#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { isAbsolute, join, relative, resolve } from 'node:path';
import { getBootMessage, getBootStatus } from './boot';

export type WriteLine = (message: string) => void;
export type OutputFormat = 'text' | 'json';
export type CliCommand = 'validate';

export interface RunCliOptions {
  readonly command?: CliCommand;
  readonly dataDirectory?: string;
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
  readonly runtimeDataPath?: string;
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

function pathsOverlap(firstPath: string, secondPath: string): boolean {
  const firstToSecond = relative(firstPath, secondPath);
  const secondToFirst = relative(secondPath, firstPath);
  const isWithin = (path: string): boolean =>
    path === '' || (!path.startsWith('..') && !isAbsolute(path));

  return isWithin(firstToSecond) || isWithin(secondToFirst);
}

export function storeTargetValidationStatus(
  status: TargetValidationStatus,
  dataDirectory: string,
): TargetValidationStatus {
  const resolvedDataDirectory = resolve(dataDirectory);

  if (pathsOverlap(status.targetPath, resolvedDataDirectory)) {
    throw new Error(
      `Runtime data directory must not overlap the Target path: ${resolvedDataDirectory}`,
    );
  }

  if (existsSync(resolvedDataDirectory) && !statSync(resolvedDataDirectory).isDirectory()) {
    throw new Error(`Runtime data path is not a directory: ${resolvedDataDirectory}`);
  }

  mkdirSync(resolvedDataDirectory, { recursive: true, mode: 0o700 });

  const runtimeDataPath = join(resolvedDataDirectory, 'target-validation.json');
  const storedStatus = { ...status, runtimeDataPath };

  writeFileSync(runtimeDataPath, `${JSON.stringify(storedStatus, null, 2)}\n`, {
    encoding: 'utf8',
    mode: 0o600,
  });

  return storedStatus;
}

export function formatTargetValidationOutput(
  targetPath: string,
  format: OutputFormat = 'text',
  dataDirectory?: string,
): string {
  const validationStatus = getTargetValidationStatus(targetPath);
  const status = dataDirectory === undefined
    ? validationStatus
    : storeTargetValidationStatus(validationStatus, dataDirectory);

  if (format === 'json') {
    return JSON.stringify(status);
  }

  const runtimeDataOutput = status.runtimeDataPath === undefined
    ? ''
    : ` Runtime data: ${status.runtimeDataPath}`;

  return `${status.message} Target: ${status.targetPath} Contract: ${status.targetContractPath}${runtimeDataOutput}`;
}

export function parseCliArgs(args: readonly string[]): RunCliOptions {
  let command: CliCommand | undefined;
  let dataDirectory: string | undefined;
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

    if (arg === '--data-dir') {
      const value = args[index + 1];
      if (value === undefined || value.startsWith('--')) {
        throw new Error('Missing value for --data-dir');
      }
      if (dataDirectory !== undefined) {
        throw new Error('Multiple --data-dir values are not supported');
      }
      dataDirectory = value;
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

  if (dataDirectory !== undefined && command !== 'validate') {
    throw new Error('--data-dir is supported only by the validate command');
  }

  return {
    ...(command === undefined ? {} : { command }),
    ...(dataDirectory === undefined ? {} : { dataDirectory }),
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

    message = formatTargetValidationOutput(
      options.targetPath,
      options.format,
      options.dataDirectory,
    );
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
