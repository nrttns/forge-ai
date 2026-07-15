export const bootMessage = 'Forge AI booted.';

export interface BootStatus {
  readonly message: string;
  readonly ok: true;
}

export function getBootMessage(): string {
  return bootMessage;
}

export function getBootStatus(): BootStatus {
  return {
    message: getBootMessage(),
    ok: true,
  };
}
