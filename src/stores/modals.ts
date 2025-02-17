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

modal.subscribe(() => {
  console.log(get(modal));
});

export function openModal(content: ModalContent) {
  modal.set({ show: true, content });
}

export function closeModal() {
  console.log("B?");
  const currentModal = get(modal);
  modal.set({ show: false, content: currentModal.content });
}
