export function onResize(el: Element, cb: (entry: ResizeObserverEntry) => void) {
  const ro = new ResizeObserver((entries) => entries.forEach(cb));
  ro.observe(el as Element);
  return () => ro.disconnect();
}
