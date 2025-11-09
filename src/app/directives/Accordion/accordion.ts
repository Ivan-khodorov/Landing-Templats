export function createAccordion(openIndex = -1) {
  let open = openIndex;
  const subs = new Set<(i:number)=>void>();
  return {
    get opened() { return open; },
    toggle(i:number) { open = open === i ? -1 : i; subs.forEach(s => s(open)); },
    subscribe(fn:(i:number)=>void){ subs.add(fn); return () => subs.delete(fn); }
  };
}
