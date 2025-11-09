/**
 * Debounce: откладывает вызов fn на wait мс с последним набором аргументов.
 * Типобезопасно: без any/Function.
 */
export function debounce<T extends (...args: unknown[]) => void>(fn: T, wait = 200) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>): void => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, wait);
  };
}
