const hits = new Map<string, { count: number; ts: number }>();

export function rateLimitGuard(key: string, limit = 3, windowMs = 10_000): boolean {
  const now = Date.now();
  const rec = hits.get(key) ?? { count: 0, ts: now };
  if (now - rec.ts > windowMs) { rec.count = 0; rec.ts = now; }
  rec.count += 1;
  hits.set(key, rec);
  return rec.count <= limit;
}
