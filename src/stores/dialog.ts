import type { Component } from "svelte";
import { writable, type Writable } from "svelte/store";

import ContactForm from "@/components/dialogs/ContactForm.svelte";

type DialogContentKey = "contact";
type DialogContentValue = {
  title: string;
  body: Component;
};
type DialogContents = Record<DialogContentKey, DialogContentValue>;

const dialogContents: DialogContents = {
  contact: {
    title: "contact-title",
    body: ContactForm,
  },
};

export const dialog: Writable<DialogContentValue> = writable({
  ...dialogContents["contact"],
});

export function changeDialogContent(dialogContentKey: DialogContentKey) {
  dialog.set({ ...dialogContents[dialogContentKey] });
}
