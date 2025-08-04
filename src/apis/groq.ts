import { FIREBASE_FUNCTION_ENDPOINT } from "@/constants";

export async function getGroqAnswer(
  content: string,
  role = "user",
  model = "llama-3.3-70b-versatile"
) {
  const response = await fetch(FIREBASE_FUNCTION_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content, role, model }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Something went wrong");
  }

  return data.answer;
}
