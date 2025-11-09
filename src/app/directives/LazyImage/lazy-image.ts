export function lazyImage(img: HTMLImageElement, placeholder?: string) {
  const dataSrc = img.getAttribute('data-src');
  if (!dataSrc) return;
  if (placeholder) img.src = placeholder;
  const off = onIntersect(img, () => {
    img.src = dataSrc;
    off();
  }, { rootMargin: '200px 0px' });
}

// локальный импорт, чтобы не плодить глобальные завис-ти
import { onIntersect } from '../Intersect/intersect';
