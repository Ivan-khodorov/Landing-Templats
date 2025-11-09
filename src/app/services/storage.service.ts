import { STORAGE_KEYS } from '@/app/constants';

export const storage = {
  set<T>(key: string, value: T, useSession = false) {
    const s = useSession ? sessionStorage : localStorage;
    s.setItem(key, JSON.stringify(value));
  },
  get<T>(key: string, useSession = false): T | null {
    const s = useSession ? sessionStorage : localStorage;
    const raw = s.getItem(key);
    if (!raw) return null;
    try { return JSON.parse(raw) as T; } catch { return null; }
  },
  remove(key: string, useSession = false) {
    const s = useSession ? sessionStorage : localStorage;
    s.removeItem(key);
  },
  keys: STORAGE_KEYS
};
