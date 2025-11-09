export function honeypotGuard(honeypotValue: string | undefined): boolean {
  return !honeypotValue || honeypotValue.trim().length === 0;
}
