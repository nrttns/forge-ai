import assert from 'node:assert/strict';
import { bootMessage, getBootMessage } from '../src/boot';

assert.equal(bootMessage, 'Forge AI booted.');
assert.equal(getBootMessage(), bootMessage);
