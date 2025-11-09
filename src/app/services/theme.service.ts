import { STORAGE_KEYS } from "@/app/constants";

import { storage } from "./storage.service";

export type Theme = "light" | "dark";
type Listener = (theme: Theme) => void;

let current: Theme = (storage.get<Theme>(STORAGE_KEYS.THEME) ?? "light");
const subs = new Set<Listener>();

function apply(theme: Theme) {
  current = theme;
  document.documentElement.setAttribute("data-theme", theme);
  storage.set(STORAGE_KEYS.THEME, theme);
  subs.forEach(f => f(theme));
}

export const theme = {
  init() { apply(current); },
  set(next: Theme) { apply(next); },
  toggle() { apply(current === "light" ? "dark" : "light"); },
  get value() { return current; },
  subscribe(fn: Listener) { subs.add(fn); return () => subs.delete(fn); }
};
