type InputEl = HTMLInputElement | HTMLTextAreaElement;

export function attachDebounceInput(
  el: InputEl,
  cb: (value: string, ev: Event) => void,
  delay = 300
) {
  let t: number | undefined;

  function onInput(ev: Event) {
    const target = ev.target as InputEl;
    if (t) window.clearTimeout(t);
    t = window.setTimeout(() => cb(target.value, ev), delay);
  }

  el.addEventListener("input", onInput);
  return () => el.removeEventListener("input", onInput);
}
