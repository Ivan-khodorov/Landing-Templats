import { theme } from "@/app/services/theme.service";

export function mountThemeSwitcher(root: HTMLElement) {
  const btn = root.querySelector<HTMLButtonElement>("[data-theme-toggle]");
  const out = root.querySelector<HTMLElement>("[data-theme-output]");
  function render() { if (out) out.textContent = theme.value; }
  theme.init(); render();
  btn?.addEventListener("click", () => { theme.toggle(); render(); });
}
