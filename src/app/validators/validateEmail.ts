export function validateEmail(value: string): boolean {
  return /^[\\w.-]+@[\\w.-]+\\.\\w{2,}$/.test(value.trim());
}
