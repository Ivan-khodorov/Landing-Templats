export const scroll = {
  to(selector: string, behavior: ScrollBehavior = 'smooth') {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior, block: 'start' });
  },
  toTop(behavior: ScrollBehavior = 'smooth') {
    window.scrollTo({ top: 0, behavior });
  }
};
