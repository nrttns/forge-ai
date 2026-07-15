import assert from 'node:assert/strict';
import { bootMessage, getBootMessage } from '../src/boot';
import { runCli } from '../src/main';

assert.equal(bootMessage, 'Forge AI booted.');
assert.equal(getBootMessage(), bootMessage);

const writtenMessages: string[] = [];
const returnedMessage = runCli((message) => writtenMessages.push(message));

assert.equal(returnedMessage, bootMessage);
assert.deepEqual(writtenMessages, [bootMessage]);
