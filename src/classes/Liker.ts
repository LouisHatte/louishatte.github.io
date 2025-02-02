import { ref, onValue, set } from "firebase/database";
import { writable, get } from "svelte/store";

import { db } from "@/apis/firebase";

const LIKER = "liker";

export class Liker {
  static set() {
    let liked = localStorage.getItem(LIKER);
    if (liked === null) {
      localStorage.setItem(LIKER, "false");
    }
  }

  static async like() {
    await set(likesRef, get(likes) + 1);
    liked.set(true);
    localStorage.setItem(LIKER, "true");
  }

  static async dislike() {
    await set(likesRef, get(likes) - 1);
    liked.set(false);
    localStorage.setItem(LIKER, "false");
  }

  static isLiked() {
    const liker = localStorage.getItem(LIKER);
    if (!liker) return false;
    return JSON.parse(liker);
  }
}

export const likes = writable(0);
export const liked = writable(Liker.isLiked());

const likesRef = ref(db, "likes");

onValue(likesRef, (snapshot) => {
  if (snapshot.exists()) {
    likes.set(snapshot.val());
  }
});

window.addEventListener("storage", (event) => {
  if (event.key !== LIKER || event.newValue === null) return;
  liked.set(JSON.parse(event.newValue));
});
