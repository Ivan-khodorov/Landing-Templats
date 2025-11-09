export function scrollToAnchor(selector: string, behavior: ScrollBehavior = 'smooth') {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior, block: 'start' });
}
