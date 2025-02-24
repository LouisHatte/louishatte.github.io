import type { Component } from "svelte";
import { writable, type Writable } from "svelte/store";

import ContactForm from "@/components/dialogs/ContactForm.svelte";
import Spinner from "@/lib/spinners/Spinner.svelte";

type DialogContentKey = "contact" | "test";
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
  test: {
    title: "A!",
    body: Spinner,
  },
};

export const dialog: Writable<DialogContentValue> = writable({
  ...dialogContents["contact"],
});

export function updateDialogContent(dialogContentKey: DialogContentKey) {
  dialog.set({ ...dialogContents[dialogContentKey] });
}
