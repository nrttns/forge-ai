import { getBootMessage } from './boot';

export type WriteLine = (message: string) => void;

export function runCli(writeLine: WriteLine = console.log): string {
  const message = getBootMessage();
  writeLine(message);
  return message;
}

if (require.main === module) {
  runCli();
}
