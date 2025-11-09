export function trapFocus(container: HTMLElement) {
  const FOCUSABLE = 'a, button, input, select, textarea, [tabindex]:not([tabindex=""-1""])';
  const getItems = () => Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE))
                              .filter(el => !el.hasAttribute('disabled'));
  function onKey(e: KeyboardEvent) {
    if (e.key !== 'Tab') return;
    const items = getItems();
    if (items.length === 0) return;
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
    else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
  }
  container.addEventListener('keydown', onKey);
  return () => container.removeEventListener('keydown', onKey);
}
