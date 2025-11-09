let open = false;
const subs = new Set<(o:boolean)=>void>();

export function openDropdown() { open = true; subs.forEach(s => s(open)); }
export function closeDropdown() { open = false; subs.forEach(s => s(open)); }
export function toggleDropdown() { open = !open; subs.forEach(s => s(open)); }
export function onDropdownChange(cb:(o:boolean)=>void){ subs.add(cb); return () => subs.delete(cb); }
