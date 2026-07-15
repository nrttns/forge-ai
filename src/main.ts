import { getBootMessage, getBootStatus } from './boot';

export type WriteLine = (message: string) => void;
export type OutputFormat = 'text' | 'json';

export interface RunCliOptions {
  readonly format?: OutputFormat;
}

export function formatBootOutput(format: OutputFormat = 'text'): string {
  if (format === 'json') {
    return JSON.stringify(getBootStatus());
  }

  return getBootMessage();
}

export function runCli(writeLine: WriteLine = console.log, options: RunCliOptions = {}): string {
  const message = formatBootOutput(options.format);
  writeLine(message);
  return message;
}

if (require.main === module) {
  const format: OutputFormat = process.argv.includes('--json') ? 'json' : 'text';
  runCli(console.log, { format });
}
