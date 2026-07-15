import assert from 'node:assert/strict';
import { bootMessage, getBootMessage, getBootStatus } from '../src/boot';
import { formatBootOutput, runCli } from '../src/main';

assert.equal(bootMessage, 'Forge AI booted.');
assert.equal(getBootMessage(), bootMessage);
assert.deepEqual(getBootStatus(), { message: bootMessage, ok: true });
assert.equal(formatBootOutput(), bootMessage);
assert.equal(formatBootOutput('text'), bootMessage);
assert.equal(formatBootOutput('json'), JSON.stringify({ message: bootMessage, ok: true }));

const writtenMessages: string[] = [];
const returnedMessage = runCli((message) => writtenMessages.push(message));

assert.equal(returnedMessage, bootMessage);
assert.deepEqual(writtenMessages, [bootMessage]);

const jsonMessages: string[] = [];
const returnedJsonMessage = runCli((message) => jsonMessages.push(message), { format: 'json' });

assert.equal(returnedJsonMessage, JSON.stringify({ message: bootMessage, ok: true }));
assert.deepEqual(jsonMessages, [JSON.stringify({ message: bootMessage, ok: true })]);
