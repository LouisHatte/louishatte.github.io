import { views } from "@/stores/view";

const VIEW_INDEX = "viewIndex";

export class ViewIndex {
  static init() {
    ViewIndex._sanitizeValue();
  }

  private static _sanitizeValue() {
    const rawViewIndex = localStorage.getItem(VIEW_INDEX);
    if (rawViewIndex === null) {
      localStorage.setItem(VIEW_INDEX, "0");
      return 0;
    }

    const viewIndex = Number(rawViewIndex);
    if (
      isNaN(viewIndex) ||
      viewIndex === Infinity ||
      viewIndex === -Infinity ||
      viewIndex < 0 ||
      viewIndex >= views.length
    ) {
      localStorage.setItem(VIEW_INDEX, "0");
      return 0;
    }
    return viewIndex;
  }

  static get() {
    return ViewIndex._sanitizeValue();
  }

  static set(viewIndex: number) {
    localStorage.setItem(VIEW_INDEX, `${viewIndex}`);
  }
}
