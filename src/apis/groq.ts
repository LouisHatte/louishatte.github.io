import axios from "axios";

const URL = "https://api.groq.com/openai/v1/chat/completions";
const KEY: string = import.meta.env.VITE_GROQ_API_KEY;
const MODEL = "llama-3.3-70b-versatile";

export async function getAnswer(input: string) {
  try {
    const response = await axios.post(
      URL,
      {
        model: MODEL,
        messages: [{ role: "user", content: input }],
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
    console.error("Error fetching completion:", error);
    throw error;
  }
}
