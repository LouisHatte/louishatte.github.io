import { get, writable, type Writable } from "svelte/store";

type Message = {
  role: "user" | "bot";
  content: string;
};

export const messages: Writable<Message[]> = writable([]);

export function addMessage(message: Message) {
  const currentMessages = get(messages);
  messages.set([...currentMessages, message]);
}
