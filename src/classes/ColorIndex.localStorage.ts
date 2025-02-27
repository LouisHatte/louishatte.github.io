import { NUMBER_OF_COLORS } from "@/lib/styles/colors";

const COLOR_INDEX = "colorIndex";

export class ColorIndex {
  static init() {
    ColorIndex._sanitizeValue();
  }

  private static _sanitizeValue() {
    const rawColorIndex = localStorage.getItem(COLOR_INDEX);
    if (rawColorIndex === null) {
      localStorage.setItem(COLOR_INDEX, "0");
      return 0;
    }

    const colorIndex = Number(rawColorIndex);
    if (
      isNaN(colorIndex) ||
      colorIndex === Infinity ||
      colorIndex === -Infinity ||
      colorIndex < 0 ||
      colorIndex >= NUMBER_OF_COLORS
    ) {
      localStorage.setItem(COLOR_INDEX, "0");
      return 0;
    }
    return colorIndex;
  }

  static get() {
    return ColorIndex._sanitizeValue();
  }

  static set(colorIndex: number) {
    localStorage.setItem(COLOR_INDEX, `${colorIndex}`);
  }
}
