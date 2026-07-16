import assert from 'node:assert/strict';
import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const cliPath = join(repositoryRoot, 'dist', 'main.js');
const workspace = mkdtempSync(join(tmpdir(), 'forge-ai-local-execution-'));
const validTarget = join(workspace, 'valid-target');
const invalidTarget = join(workspace, 'invalid-target');
const validContractPath = join(validTarget, 'AGENTS.md');
const validContract = '# Local Execution Validation Target\n';

function execute(args) {
  return spawnSync(process.execPath, [cliPath, ...args], {
    cwd: repositoryRoot,
    encoding: 'utf8',
  });
}

try {
  mkdirSync(validTarget, { recursive: true });
  mkdirSync(invalidTarget, { recursive: true });
  writeFileSync(validContractPath, validContract);

  const entriesBeforeExecution = readdirSync(validTarget);
  const contractBeforeExecution = readFileSync(validContractPath, 'utf8');
  const success = execute(['validate', '--target', validTarget, '--json']);

  assert.equal(success.error, undefined);
  assert.equal(success.status, 0);
  assert.equal(success.signal, null);
  assert.equal(success.stderr, '');
  assert.deepEqual(JSON.parse(success.stdout), {
    command: 'validate',
    message: 'Target contract valid.',
    ok: true,
    targetPath: validTarget,
    targetContractPath: validContractPath,
  });
  assert.deepEqual(readdirSync(validTarget), entriesBeforeExecution);
  assert.equal(readFileSync(validContractPath, 'utf8'), contractBeforeExecution);

  const failure = execute(['validate', '--target', invalidTarget, '--json']);

  assert.equal(failure.error, undefined);
  assert.equal(failure.status, 1);
  assert.equal(failure.signal, null);
  assert.equal(failure.stdout, '');
  assert.equal(
    failure.stderr.trim(),
    `Target contract does not exist: ${join(invalidTarget, 'AGENTS.md')}`,
  );
  assert.deepEqual(readdirSync(invalidTarget), []);

  console.log('Local CLI execution validation passed.');
} finally {
  rmSync(workspace, { recursive: true, force: true });
}
