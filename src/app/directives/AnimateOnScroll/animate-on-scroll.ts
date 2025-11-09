export function animateOnScroll(el: HTMLElement, className = 'aos-in') {
  el.classList.add('aos-ready');
  const off = onIntersect(el, () => {
    el.classList.add(className);
    off();
  });
}
import { onIntersect } from '../Intersect/intersect';
