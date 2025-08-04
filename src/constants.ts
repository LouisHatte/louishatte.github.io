export const IS_PRODUCTION = process.env.NODE_ENV === "production";
export const BASE_URL = import.meta.env.BASE_URL;
export const FIREBASE_FUNCTION_ENDPOINT = IS_PRODUCTION
  ? "https://us-central1-portfolio-90460.cloudfunctions.net/getGroqAnswer"
  : "http://localhost:5001/portfolio-90460/us-central1/getGroqAnswer";
