import * as functions from "firebase-functions/v2/https";
import cors from "cors";
import axios from "axios";

const allowedOrigins = [
  "https://louishatte.github.io",
  "http://localhost:5173",
];

const corsHandler = cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
});

export const getGroqAnswer = functions.onRequest((req, res) => {
  return new Promise<void>((resolve) => {
    corsHandler(req, res, async () => {
      if (req.method === "OPTIONS") {
        res.status(204).send("");
        return resolve();
      }

      if (req.method !== "POST") {
        res.status(405).send("Method Not Allowed");
        return resolve();
      }

      const {
        content,
        role = "user",
        model = "llama-3.3-70b-versatile",
      } = req.body;

      if (!content) {
        res.status(400).json({ error: "Content is required" });
        return resolve();
      }

      try {
        const GROQ_API_KEY = process.env.GROQ_API_KEY;

        if (!GROQ_API_KEY) {
          res.status(500).json({ error: "Missing API key" });
          return resolve();
        }

        const response = await axios.post(
          "https://api.groq.com/openai/v1/chat/completions",
          {
            model,
            messages: [{ role, content }],
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${GROQ_API_KEY}`,
            },
          }
        );

        const answer = response.data.choices[0].message.content;
        res.status(200).json({ answer });
      } catch (err) {
        console.error("Groq API error:", err);
        res.status(500).json({ error: "Failed to get AI response" });
      }

      resolve();
    });
  });
});
