import { get, writable, type Writable } from "svelte/store";

type Color = "neutral" | "purple" | "indigo";
type Id = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

type ColorId = `${Color}${Id}`;
type ActiveColorId = `color${Id}`;

const COLORS: Color[] = ["neutral", "purple", "indigo"];

const COLOR_IDS: Record<ColorId, string> = {
  neutral1: "#ffffff",
  neutral2: "#f7f7f7",
  neutral3: "#e1e1e1",
  neutral4: "#b1b1b1",
  neutral5: "#9E9E9E",
  neutral6: "#515151",
  neutral7: "#3b3b3b",
  neutral8: "#222222",
  neutral9: "#000000",

  purple1: "#dac4ff",
  purple2: "#b990ff",
  purple3: "#a368fc",
  purple4: "#9446ed",
  purple5: "#8719e0",
  purple6: "#7a0ecc",
  purple7: "#690cb0",
  purple8: "#580a94",
  purple9: "#44056e",

  indigo1: "#B0D0FF",
  indigo2: "#88B1FC",
  indigo3: "#5E8AEE",
  indigo4: "#3A66DB",
  indigo5: "#2251CC",
  indigo6: "#1D3DBF",
  indigo7: "#132DAD",
  indigo8: "#0B1D96",
  indigo9: "#061178",
};

export const theme: Writable<Record<ActiveColorId, string>> = writable({
  color1: COLOR_IDS.neutral1,
  color2: COLOR_IDS.neutral2,
  color3: COLOR_IDS.neutral3,
  color4: COLOR_IDS.neutral4,
  color5: COLOR_IDS.neutral5,
  color6: COLOR_IDS.neutral6,
  color7: COLOR_IDS.neutral7,
  color8: COLOR_IDS.neutral8,
  color9: COLOR_IDS.neutral9,
});

const color: Writable<Color> = writable(COLORS[0]);

export function initColors() {
  for (const [key, value] of Object.entries(get(theme))) {
    document.documentElement.style.setProperty(`--${key}`, value);
  }
}

function getNextColor() {
  const currentColor = get(color);
  const currentIndex = COLORS.findIndex((c) => c === currentColor);
  if (currentIndex === -1) return;

  const nextIndex = (currentIndex + 1) % COLORS.length;
  return COLORS[nextIndex];
}

theme.subscribe(() => {
  console.log(get(theme));
});

export function updateTheme() {
  const nextColor = getNextColor();
  if (!nextColor) return;

  Object.keys(get(theme)).forEach((_, i) => {
    const index = `${i + 1}` as Id;
    const key: ColorId = `${nextColor}${index}`;
    document.documentElement.style.setProperty(
      `--color${index}`,
      `${COLOR_IDS[key]}`
    );
  });

  theme.update(() => {
    return Object.fromEntries(
      Object.keys(get(theme)).map((key, i) => {
        const index = `${i + 1}` as Id;
        const value: ColorId = `${nextColor}${index}`;
        return [key as ActiveColorId, COLOR_IDS[value]];
      })
    ) as Record<ActiveColorId, string>;
  });

  color.update(() => nextColor);
}
