export function createTabs<T extends string>(initial: T) {
  let current = initial;
  const subs = new Set<(name: T)=>void>();
  return {
    get active() { return current; },
    set(name: T) { current = name; subs.forEach(s => s(name)); },
    subscribe(fn: (name:T)=>void) { subs.add(fn); return () => subs.delete(fn); }
  };
}
