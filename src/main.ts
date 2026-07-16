#!/usr/bin/env node
import { existsSync, readFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { getBootMessage, getBootStatus } from './boot';

export type WriteLine = (message: string) => void;
export type OutputFormat = 'text' | 'json';
export type CliCommand = 'validate';

export interface RunCliOptions {
  readonly command?: CliCommand;
  readonly format?: OutputFormat;
  readonly targetPath?: string;
}

export interface TargetContract {
  readonly targetPath: string;
  readonly contractPath: string;
  readonly content: string;
}

export interface CliStatus {
  readonly message: string;
  readonly ok: true;
  readonly targetPath?: string;
  readonly targetContractPath?: string;
}

export interface TargetValidationStatus {
  readonly command: 'validate';
  readonly message: 'Target contract valid.';
  readonly ok: true;
  readonly targetPath: string;
  readonly targetContractPath: string;
}

export function loadTargetContract(targetPath: string): TargetContract {
  const resolvedTargetPath = resolve(targetPath);

  if (!existsSync(resolvedTargetPath)) {
    throw new Error(`Target path does not exist: ${resolvedTargetPath}`);
  }

  if (!statSync(resolvedTargetPath).isDirectory()) {
    throw new Error(`Target path is not a directory: ${resolvedTargetPath}`);
  }

  const contractPath = join(resolvedTargetPath, 'AGENTS.md');

  if (!existsSync(contractPath)) {
    throw new Error(`Target contract does not exist: ${contractPath}`);
  }

  if (!statSync(contractPath).isFile()) {
    throw new Error(`Target contract is not a file: ${contractPath}`);
  }

  const content = readFileSync(contractPath, 'utf8');

  if (content.trim().length === 0) {
    throw new Error(`Target contract is empty: ${contractPath}`);
  }

  return {
    targetPath: resolvedTargetPath,
    contractPath,
    content,
  };
}

export function getCliStatus(options: RunCliOptions = {}): CliStatus {
  if (options.targetPath === undefined) {
    return getBootStatus();
  }

  const targetContract = loadTargetContract(options.targetPath);

  return {
    ...getBootStatus(),
    targetPath: targetContract.targetPath,
    targetContractPath: targetContract.contractPath,
  };
}

export function formatBootOutput(format: OutputFormat = 'text', options: RunCliOptions = {}): string {
  const status = getCliStatus(options);

  if (format === 'json') {
    return JSON.stringify(status);
  }

  return status.targetPath === undefined
    ? getBootMessage()
    : `${getBootMessage()} Target: ${status.targetPath} Contract: ${status.targetContractPath}`;
}

export function getTargetValidationStatus(targetPath: string): TargetValidationStatus {
  const targetContract = loadTargetContract(targetPath);

  return {
    command: 'validate',
    message: 'Target contract valid.',
    ok: true,
    targetPath: targetContract.targetPath,
    targetContractPath: targetContract.contractPath,
  };
}

export function formatTargetValidationOutput(
  targetPath: string,
  format: OutputFormat = 'text',
): string {
  const status = getTargetValidationStatus(targetPath);

  if (format === 'json') {
    return JSON.stringify(status);
  }

  return `${status.message} Target: ${status.targetPath} Contract: ${status.targetContractPath}`;
}

export function parseCliArgs(args: readonly string[]): RunCliOptions {
  let command: CliCommand | undefined;
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

    if (arg === 'validate') {
      if (command !== undefined) {
        throw new Error(`Multiple commands are not supported: ${command}, ${arg}`);
      }
      command = 'validate';
      continue;
    }

    throw new Error(`Unsupported argument: ${arg}`);
  }

  if (command === 'validate' && targetPath === undefined) {
    throw new Error('The validate command requires --target <path>');
  }

  return {
    ...(command === undefined ? {} : { command }),
    format,
    ...(targetPath === undefined ? {} : { targetPath }),
  };
}

export function runCli(writeLine: WriteLine = console.log, options: RunCliOptions = {}): string {
  let message: string;

  if (options.command === 'validate') {
    if (options.targetPath === undefined) {
      throw new Error('The validate command requires --target <path>');
    }

    message = formatTargetValidationOutput(options.targetPath, options.format);
  } else {
    message = formatBootOutput(options.format, options);
  }

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
