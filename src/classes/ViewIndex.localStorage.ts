const VIEW_INDEX = "viewIndex";

export class ViewIndex {
  static init() {
    const viewIndex = ViewIndex.get();

    if (viewIndex === null) {
      localStorage.setItem(VIEW_INDEX, "0");
    }
  }

  static get() {
    return localStorage.getItem(VIEW_INDEX);
  }

  static set(viewIndex: number) {
    localStorage.setItem(VIEW_INDEX, `${viewIndex}`);
  }
}
