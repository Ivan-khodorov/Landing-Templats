export function attachAutofocus(el: HTMLElement) {
  // фокус после монтирования узла
  setTimeout(() => el.focus(), 0);
}
