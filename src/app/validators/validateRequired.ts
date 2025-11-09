export function validateRequired(value: string | null | undefined): boolean {
  return !!(value && value.trim().length > 0);
}
