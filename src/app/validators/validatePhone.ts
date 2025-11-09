export function validatePhone(value: string): boolean {
  return /^\\+?\\d{10,15}$/.test(value.replace(/\\s+/g, ''));
}
