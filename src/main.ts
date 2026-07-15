#!/usr/bin/env node
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { getBootMessage, getBootStatus } from './boot';

export type WriteLine = (message: string) => void;
export type OutputFormat = 'text' | 'json';

export interface RunCliOptions {
  readonly format?: OutputFormat;
  readonly targetPath?: string;
}

export interface CliStatus {
  readonly message: string;
  readonly ok: true;
  readonly targetPath?: string;
}

export function getCliStatus(options: RunCliOptions = {}): CliStatus {
  const targetPath = options.targetPath === undefined ? undefined : resolve(options.targetPath);

  if (targetPath !== undefined && !existsSync(targetPath)) {
    throw new Error(`Target path does not exist: ${targetPath}`);
  }

  return {
    ...getBootStatus(),
    ...(targetPath === undefined ? {} : { targetPath }),
  };
}

export function formatBootOutput(format: OutputFormat = 'text', options: RunCliOptions = {}): string {
  const status = getCliStatus(options);

  if (format === 'json') {
    return JSON.stringify(status);
  }

  return status.targetPath === undefined
    ? getBootMessage()
    : `${getBootMessage()} Target: ${status.targetPath}`;
}

export function parseCliArgs(args: readonly string[]): RunCliOptions {
  let format: OutputFormat = 'text';
  let targetPath: string | undefined;

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === '--json') {
      format = 'json';
      continue;
    }

    if (arg === '--target') {
      const value = args[index + 1];
      if (value === undefined || value.startsWith('--')) {
        throw new Error('Missing value for --target');
      }
      targetPath = value;
      index += 1;
      continue;
    }

    throw new Error(`Unsupported argument: ${arg}`);
  }

  return targetPath === undefined ? { format } : { format, targetPath };
}

export function runCli(writeLine: WriteLine = console.log, options: RunCliOptions = {}): string {
  const message = formatBootOutput(options.format, options);
  writeLine(message);
  return message;
}

if (require.main === module) {
  try {
    runCli(console.log, parseCliArgs(process.argv.slice(2)));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(message);
    process.exitCode = 1;
  }
}
