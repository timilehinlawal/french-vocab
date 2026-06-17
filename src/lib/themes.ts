export type ThemeName = "night" | "lofi" | "rain" | "light";

// Order the theme switcher cycles through.
export const themeOrder: ThemeName[] = ["night", "lofi", "rain", "light"];

// Label shown in the switcher pill, e.g. "theme: lofi cafe".
export const themeLabels: Record<ThemeName, string> = {
  night: "night",
  lofi: "lofi cafe",
  rain: "rain",
  light: "light"
};

export const nextTheme = (current: ThemeName): ThemeName => {
  const index = themeOrder.indexOf(current);
  return themeOrder[(index + 1) % themeOrder.length];
};

export const defaultTheme: ThemeName = "night";
