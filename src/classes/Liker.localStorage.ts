import { ref, onValue, set } from "firebase/database";
import { writable, get } from "svelte/store";

import { db } from "@/apis/firebase";

const LIKER = "liker";

export class Liker {
  static init() {
    let liked = localStorage.getItem(LIKER);
    if (liked === null) {
      localStorage.setItem(LIKER, "false");
    }
  }

  static async like() {
    liked.set(true);
    await set(likesRef, get(likes) + 1);
    localStorage.setItem(LIKER, "true");
  }

  static isLiked() {
    const liker = localStorage.getItem(LIKER);
    if (!liker) return false;
    return JSON.parse(liker);
  }
}

export const likes = writable(0);
export const liked = writable(Liker.isLiked());

const isProduction = process.env.NODE_ENV === "production";
const refName = isProduction ? "likes" : "likesLocal";
const likesRef = ref(db, refName);

onValue(likesRef, (snapshot) => {
  if (snapshot.exists()) {
    likes.set(snapshot.val());
  }
});

window.addEventListener("storage", (event) => {
  if (event.key !== LIKER || event.newValue === null) return;
  liked.set(JSON.parse(event.newValue));
});
