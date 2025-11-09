export function throttle<T extends unknown[]>(
  fn: (...args: T) => void,
  wait = 100
) {
  let last = 0;
  let timer: number | undefined;

  return (...args: T) => {
    const now = Date.now();
    const remaining = wait - (now - last);

    if (remaining <= 0) {
      if (timer) { clearTimeout(timer); timer = undefined; }
      last = now;
      fn(...args);
    } else if (!timer) {
      timer = window.setTimeout(() => {
        last = Date.now();
        timer = undefined;
        fn(...args);
      }, remaining);
    }
  };
}
