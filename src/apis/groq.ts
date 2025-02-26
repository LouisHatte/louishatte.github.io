import axios from "axios";
import { get } from "svelte/store";

import { _ } from "@/classes/Locale";
import { addToast } from "@/lib/toasts/toasts";

const URL = "https://api.groq.com/openai/v1/chat/completions";
const KEY: string = import.meta.env.VITE_GROQ_API_KEY;
const LLAMA_MODEL = "llama-3.3-70b-versatile";

export async function getGroqAnswer(
  content: string,
  role = "user",
  model = LLAMA_MODEL
) {
  try {
    const response = await axios.post(
      URL,
      {
        model,
        messages: [{ role, content }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${KEY}`,
        },
      }
    );
    return response.data.choices[0].message.content as string;
  } catch (error) {
    console.error("Fetching Groq error.", error);
    addToast(get(_)("on-error"), "error");
    throw error;
  }
}
