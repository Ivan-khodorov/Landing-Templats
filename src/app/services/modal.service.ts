let current: HTMLDialogElement | null = null;

export function bindModal(el: HTMLDialogElement) {
  current = el;
}

export function openModal() {
  current?.showModal();
}

export function closeModal() {
  current?.close();
}
