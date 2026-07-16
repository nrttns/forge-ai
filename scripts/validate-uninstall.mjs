import assert from 'node:assert/strict';
import {
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
const workspace = mkdtempSync(join(tmpdir(), 'forge-ai-uninstall-'));
const packageDirectory = join(workspace, 'package');
const installDirectory = join(workspace, 'install');
const targetDirectory = join(workspace, 'target');
const runtimeDataDirectory = join(workspace, 'runtime-data');
const npmCacheDirectory = join(workspace, 'npm-cache');
const npmLogsDirectory = join(workspace, 'npm-logs');
const targetContractPath = join(targetDirectory, 'AGENTS.md');
const consumerSentinelPath = join(installDirectory, 'consumer-owned.txt');
const runtimeDataPath = join(runtimeDataDirectory, 'target-validation.json');
const targetContract = '# Uninstall Validation Target\n';
const consumerSentinel = 'preserve consumer-owned content\n';
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

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

try {
  for (const directory of [
    packageDirectory,
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

  const npmOptions = [
    `--cache=${npmCacheDirectory}`,
    `--logs-dir=${npmLogsDirectory}`,
  ];
  const packResult = JSON.parse(run(npmCommand, [
    ...npmOptions,
    'pack',
    '--json',
    '--pack-destination',
    packageDirectory,
  ]));

  assert.equal(packResult.length, 1, 'Expected npm pack to produce exactly one archive.');

  const packageArchive = join(packageDirectory, packResult[0].filename);

  run(npmCommand, [
    ...npmOptions,
    'install',
    '--ignore-scripts',
    '--no-audit',
    '--no-fund',
    '--prefix',
    installDirectory,
    packageArchive,
  ]);

  const binaryName = process.platform === 'win32' ? 'forge-ai.cmd' : 'forge-ai';
  const installedBinary = join(installDirectory, 'node_modules', '.bin', binaryName);
  const installedPackage = join(installDirectory, 'node_modules', 'forge-ai');
  const validationResult = JSON.parse(run(
    installedBinary,
    ['validate', '--target', targetDirectory, '--data-dir', runtimeDataDirectory, '--json'],
    process.platform === 'win32' ? { shell: true } : {},
  ));

  assert.equal(existsSync(installedBinary), true);
  assert.equal(existsSync(installedPackage), true);
  assert.equal(existsSync(runtimeDataPath), true);
  assert.deepEqual(JSON.parse(readFileSync(runtimeDataPath, 'utf8')), validationResult);

  const runtimeDataBeforeUninstall = readFileSync(runtimeDataPath, 'utf8');

  run(npmCommand, [
    ...npmOptions,
    'uninstall',
    '--ignore-scripts',
    '--no-audit',
    '--no-fund',
    '--prefix',
    installDirectory,
    'forge-ai',
  ]);

  assert.equal(existsSync(installedBinary), false, 'Expected the forge-ai binary to be removed.');
  assert.equal(existsSync(installedPackage), false, 'Expected the forge-ai package to be removed.');
  assert.equal(readFileSync(targetContractPath, 'utf8'), targetContract);
  assert.equal(readFileSync(consumerSentinelPath, 'utf8'), consumerSentinel);
  assert.equal(readFileSync(runtimeDataPath, 'utf8'), runtimeDataBeforeUninstall);

  console.log('Local package uninstall validation passed.');
} finally {
  rmSync(workspace, { recursive: true, force: true });
}
