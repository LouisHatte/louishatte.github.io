import type { SvelteComponent } from "svelte";
import { writable, type Writable, get } from "svelte/store";

type ModalState = {
  title: string;
  content: SvelteComponent | null;
  show: boolean;
};

export const modalState: Writable<ModalState> = writable({
  title: "",
  content: null,
  show: false,
});

modalState.subscribe(() => {
  console.log(get(modalState));
});

export function openModal(content: SvelteComponent, title: string) {
  modalState.set({
    title,
    content,
    show: true,
  });
}

export function closeModal() {
  modalState.set({
    show: false,
    title: "",
    content: null,
  });
}
