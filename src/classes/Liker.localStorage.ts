import { writable, get } from "svelte/store";

import { db, onValue, ref, set } from "@/apis/firebase";
import { IS_PRODUCTION } from "@/constants";

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

const refName = IS_PRODUCTION ? "likes" : "likesLocal";
const likesRef = ref(db, refName);

onValue(likesRef, (snapshot) => {
  if (snapshot.exists()) {
    likes.set(snapshot.val());
  }
});

// Keep like button style synchronized between all tabs of the same browser.
window.addEventListener("storage", (event) => {
  if (event.key !== LIKER || event.newValue === null) return;
  liked.set(JSON.parse(event.newValue));
});
