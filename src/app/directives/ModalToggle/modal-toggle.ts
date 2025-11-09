type Listener = (open: boolean) => void;

const listeners = new Set<Listener>();
let isOpen = false;

export function toggleModal(next?: boolean) {
  isOpen = typeof next === 'boolean' ? next : !isOpen;
  listeners.forEach(l => l(isOpen));
}

export function onModalToggle(cb: Listener) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}
