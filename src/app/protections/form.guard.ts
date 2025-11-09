import { honeypotGuard } from './honeypot.guard';
import { rateLimitGuard } from './rate-limit.guard';

export function canSubmitForm(opts: { honeypot?: string; key?: string }): boolean {
  if (!rateLimitGuard(opts.key ?? 'form', 3, 10000)) return false;
  if (!honeypotGuard(opts.honeypot)) return false;
  return true;
}
