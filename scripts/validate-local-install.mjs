import assert from 'node:assert/strict';
import { existsSync, mkdirSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const workspace = mkdtempSync(join(tmpdir(), 'forge-ai-local-install-'));
const packageDirectory = join(workspace, 'package');
const installDirectory = join(workspace, 'install');
const npmCacheDirectory = join(workspace, 'npm-cache');
const npmLogsDirectory = join(workspace, 'npm-logs');
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
  mkdirSync(packageDirectory, { recursive: true });
  mkdirSync(installDirectory, { recursive: true });
  mkdirSync(npmCacheDirectory, { recursive: true });
  mkdirSync(npmLogsDirectory, { recursive: true });

  const npmOptions = [
    `--cache=${npmCacheDirectory}`,
    `--logs-dir=${npmLogsDirectory}`,
  ];
  const packOutput = run(npmCommand, [
    ...npmOptions,
    'pack',
    '--json',
    '--pack-destination',
    packageDirectory,
  ]);
  const packResult = JSON.parse(packOutput);

  assert.equal(packResult.length, 1, 'Expected npm pack to produce exactly one archive.');

  const packageArchive = join(packageDirectory, packResult[0].filename);
  assert.equal(existsSync(packageArchive), true, 'Expected the package archive to exist.');

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

  assert.equal(existsSync(installedBinary), true, 'Expected the installed forge-ai binary to exist.');

  const validationOutput = run(
    installedBinary,
    ['validate', '--target', repositoryRoot, '--json'],
    process.platform === 'win32' ? { shell: true } : {},
  );
  const validationResult = JSON.parse(validationOutput);

  assert.deepEqual(validationResult, {
    command: 'validate',
    message: 'Target contract valid.',
    ok: true,
    targetPath: repositoryRoot,
    targetContractPath: join(repositoryRoot, 'AGENTS.md'),
  });

  console.log('Local package installation validation passed.');
} finally {
  rmSync(workspace, { recursive: true, force: true });
}
