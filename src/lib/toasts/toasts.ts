import { writable, type Writable } from "svelte/store";

export type ToastType = "info" | "success" | "error";

type Toast = {
  duration: number;
  id: string;
  message: string;
  type: ToastType;
};

export const toasts: Writable<Toast[]> = writable([]);

export function addToast(
  message: string,
  type: ToastType = "info",
  duration = 3000
) {
  toasts.update((allToasts) => [
    ...allToasts,
    { id: Date.now().toString(), message, type, duration },
  ]);
}

export function removeToast(id: string) {
  toasts.update((allToasts) => allToasts.filter((toast) => toast.id !== id));
}
