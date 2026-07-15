import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import { bootMessage, getBootMessage, getBootStatus } from '../src/boot';
import { formatBootOutput, getCliStatus, parseCliArgs, runCli } from '../src/main';

assert.equal(bootMessage, 'Forge AI booted.');
assert.equal(getBootMessage(), bootMessage);
assert.deepEqual(getBootStatus(), { message: bootMessage, ok: true });
assert.deepEqual(getCliStatus(), { message: bootMessage, ok: true });
assert.equal(formatBootOutput(), bootMessage);
assert.equal(formatBootOutput('text'), bootMessage);
assert.equal(formatBootOutput('json'), JSON.stringify({ message: bootMessage, ok: true }));

const targetPath = resolve('.');
assert.deepEqual(getCliStatus({ targetPath: '.' }), {
  message: bootMessage,
  ok: true,
  targetPath,
});
assert.equal(formatBootOutput('text', { targetPath: '.' }), `${bootMessage} Target: ${targetPath}`);
assert.equal(
  formatBootOutput('json', { targetPath: '.' }),
  JSON.stringify({ message: bootMessage, ok: true, targetPath }),
);
assert.deepEqual(parseCliArgs([]), { format: 'text' });
assert.deepEqual(parseCliArgs(['--json']), { format: 'json' });
assert.deepEqual(parseCliArgs(['--target', '.']), { format: 'text', targetPath: '.' });
assert.deepEqual(parseCliArgs(['--json', '--target', '.']), { format: 'json', targetPath: '.' });
assert.throws(() => parseCliArgs(['--target']), /Missing value for --target/);
assert.throws(() => parseCliArgs(['--unsupported']), /Unsupported argument/);
assert.throws(() => getCliStatus({ targetPath: './missing-target-path' }), /Target path does not exist/);

const writtenMessages: string[] = [];
const returnedMessage = runCli((message) => writtenMessages.push(message));

assert.equal(returnedMessage, bootMessage);
assert.deepEqual(writtenMessages, [bootMessage]);

const jsonMessages: string[] = [];
const returnedJsonMessage = runCli((message) => jsonMessages.push(message), { format: 'json', targetPath: '.' });

assert.equal(returnedJsonMessage, JSON.stringify({ message: bootMessage, ok: true, targetPath }));
assert.deepEqual(jsonMessages, [JSON.stringify({ message: bootMessage, ok: true, targetPath })]);
