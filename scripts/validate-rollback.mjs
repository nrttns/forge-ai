import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const workspace = mkdtempSync(join(tmpdir(), 'forge-ai-rollback-'));
const baselinePackageDirectory = join(workspace, 'baseline-package');
const candidateSourceDirectory = join(workspace, 'candidate-source');
const candidatePackageDirectory = join(workspace, 'candidate-package');
const installDirectory = join(workspace, 'install');
const targetDirectory = join(workspace, 'target');
const runtimeDataDirectory = join(workspace, 'runtime-data');
const npmCacheDirectory = join(workspace, 'npm-cache');
const npmLogsDirectory = join(workspace, 'npm-logs');
const targetContractPath = join(targetDirectory, 'AGENTS.md');
const consumerSentinelPath = join(installDirectory, 'consumer-owned.txt');
const runtimeDataPath = join(runtimeDataDirectory, 'target-validation.json');
const installedPackageDirectory = join(installDirectory, 'node_modules', 'forge-ai');
const installedPackageJsonPath = join(installedPackageDirectory, 'package.json');
const binaryName = process.platform === 'win32' ? 'forge-ai.cmd' : 'forge-ai';
const installedBinary = join(installDirectory, 'node_modules', '.bin', binaryName);
const targetContract = '# Rollback Validation Target\n';
const consumerSentinel = 'preserve consumer-owned content\n';
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const baselinePackageJsonText = readFileSync(join(repositoryRoot, 'package.json'), 'utf8');
const baselinePackageJson = JSON.parse(baselinePackageJsonText);
const versionParts = baselinePackageJson.version.split('.').map(Number);

assert.equal(versionParts.length, 3, 'Expected a three-part baseline package version.');
assert.equal(versionParts.every(Number.isInteger), true, 'Expected a numeric baseline package version.');

const candidateVersion = `${versionParts[0]}.${versionParts[1]}.${versionParts[2] + 1}`;
const candidatePackageJson = {
  ...baselinePackageJson,
  version: candidateVersion,
};

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: repositoryRoot,
    encoding: 'utf8',
    ...options,
  });

  if (result.error !== undefined) {
    throw result.error;
  }

  assert.equal(
    result.status,
    0,
    [
      `${command} ${args.join(' ')} failed with exit code ${result.status}.`,
      result.stdout.trim(),
      result.stderr.trim(),
    ].filter(Boolean).join('\n'),
  );

  return result.stdout.trim();
}

function digest(path) {
  return createHash('sha256').update(readFileSync(path)).digest('hex');
}

function pack(destination, source) {
  const args = [
    `--cache=${npmCacheDirectory}`,
    `--logs-dir=${npmLogsDirectory}`,
    'pack',
    '--json',
    '--pack-destination',
    destination,
  ];

  if (source !== undefined) {
    args.push(source);
  }

  const result = JSON.parse(run(npmCommand, args));
  assert.equal(result.length, 1, 'Expected npm pack to produce exactly one archive.');
  return join(destination, result[0].filename);
}

function install(packageArchive) {
  run(npmCommand, [
    `--cache=${npmCacheDirectory}`,
    `--logs-dir=${npmLogsDirectory}`,
    'install',
    '--offline',
    '--ignore-scripts',
    '--no-audit',
    '--no-fund',
    '--prefix',
    installDirectory,
    packageArchive,
  ]);
}

function installedVersion() {
  return JSON.parse(readFileSync(installedPackageJsonPath, 'utf8')).version;
}

function validateInstalledCli(options = []) {
  return JSON.parse(run(
    installedBinary,
    ['validate', '--target', targetDirectory, ...options, '--json'],
    process.platform === 'win32' ? { shell: true } : {},
  ));
}

try {
  for (const directory of [
    baselinePackageDirectory,
    candidateSourceDirectory,
    candidatePackageDirectory,
    installDirectory,
    targetDirectory,
    runtimeDataDirectory,
    npmCacheDirectory,
    npmLogsDirectory,
  ]) {
    mkdirSync(directory, { recursive: true });
  }

  writeFileSync(targetContractPath, targetContract);
  writeFileSync(consumerSentinelPath, consumerSentinel);
  writeFileSync(
    join(candidateSourceDirectory, 'package.json'),
    `${JSON.stringify(candidatePackageJson, null, 2)}\n`,
  );
  cpSync(join(repositoryRoot, 'dist'), join(candidateSourceDirectory, 'dist'), { recursive: true });

  const baselinePackageArchive = pack(baselinePackageDirectory);
  const candidatePackageArchive = pack(candidatePackageDirectory, candidateSourceDirectory);
  const baselineArchiveDigest = digest(baselinePackageArchive);

  install(baselinePackageArchive);
  assert.equal(existsSync(installedBinary), true);
  assert.equal(installedVersion(), baselinePackageJson.version);

  const baselineValidation = validateInstalledCli(['--data-dir', runtimeDataDirectory]);
  assert.deepEqual(JSON.parse(readFileSync(runtimeDataPath, 'utf8')), baselineValidation);

  const validationWithoutRuntimeData = {
    command: baselineValidation.command,
    message: baselineValidation.message,
    ok: baselineValidation.ok,
    targetPath: baselineValidation.targetPath,
    targetContractPath: baselineValidation.targetContractPath,
  };

  const runtimeDataBeforeUpdate = readFileSync(runtimeDataPath, 'utf8');

  install(candidatePackageArchive);
  assert.equal(installedVersion(), candidateVersion);
  assert.deepEqual(validateInstalledCli(), validationWithoutRuntimeData);
  assert.equal(digest(baselinePackageArchive), baselineArchiveDigest);
  assert.equal(readFileSync(targetContractPath, 'utf8'), targetContract);
  assert.equal(readFileSync(consumerSentinelPath, 'utf8'), consumerSentinel);
  assert.equal(readFileSync(runtimeDataPath, 'utf8'), runtimeDataBeforeUpdate);

  install(baselinePackageArchive);
  assert.equal(installedVersion(), baselinePackageJson.version);
  assert.equal(readFileSync(installedPackageJsonPath, 'utf8'), baselinePackageJsonText);
  assert.deepEqual(validateInstalledCli(), validationWithoutRuntimeData);
  assert.equal(readFileSync(targetContractPath, 'utf8'), targetContract);
  assert.equal(readFileSync(consumerSentinelPath, 'utf8'), consumerSentinel);
  assert.equal(readFileSync(runtimeDataPath, 'utf8'), runtimeDataBeforeUpdate);

  console.log('Local package rollback validation passed.');
} finally {
  rmSync(workspace, { recursive: true, force: true });
}
