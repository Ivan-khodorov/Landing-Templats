export function onIntersect(
  el: Element,
  cb: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = { threshold: 0.2 }
) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) cb(e);
  }, options);
  io.observe(el);
  return () => io.disconnect();
}
