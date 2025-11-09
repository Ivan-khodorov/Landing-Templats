export function onClickOutside(el: HTMLElement, handler: (ev: MouseEvent) => void) {
  function listener(ev: MouseEvent) {
    const target = ev.target as Node | null;
    if (target && !el.contains(target)) handler(ev);
  }
  document.addEventListener('mousedown', listener);
  return () => document.removeEventListener('mousedown', listener);
}
