const COLOR_INDEX = "colorIndex";

export class ColorIndex {
  static init() {
    const colorIndex = ColorIndex.get();

    if (colorIndex === null) {
      localStorage.setItem(COLOR_INDEX, "0");
    }
  }

  static get() {
    return localStorage.getItem(COLOR_INDEX);
  }

  static set(colorIndex: number) {
    localStorage.setItem(COLOR_INDEX, `${colorIndex}`);
  }
}
