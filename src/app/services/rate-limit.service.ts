export function rateLimit<T extends unknown[]>(
  fn: (...args: T) => void,
  interval = 300
) {
  let last = 0;
  let scheduled = false;
  let latestArgs: T | null = null;

  return (...args: T) => {
    latestArgs = args;
    const now = Date.now();
    const delay = Math.max(0, interval - (now - last));

    if (!scheduled) {
      scheduled = true;
      window.setTimeout(() => {
        if (latestArgs) fn(...latestArgs);
        last = Date.now();
        scheduled = false;
      }, delay);
    }
  };
}
