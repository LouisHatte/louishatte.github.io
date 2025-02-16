import { get, writable, type Writable } from "svelte/store";

export type ModalContent = "contact";

type Modal = {
  show: boolean;
  content: ModalContent;
};

export const modal: Writable<Modal> = writable({
  show: false,
  content: "contact",
});

export function openModal(content: ModalContent) {
  modal.set({ show: true, content });
}

export function closeModal() {
  modal.set({ ...get(modal), show: false });
}
