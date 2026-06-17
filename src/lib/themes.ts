export type ThemeName = "night" | "lofi" | "rain" | "light";

// Order the theme switcher cycles through: light → rain → lofi → dark.
export const themeOrder: ThemeName[] = ["light", "rain", "lofi", "night"];

// Label shown in the switcher pill, e.g. "theme: lofi cafe".
export const themeLabels: Record<ThemeName, string> = {
  light: "light",
  rain: "rain",
  lofi: "lofi cafe",
  night: "dark"
};

export const defaultTheme: ThemeName = "light";

export const nextTheme = (current: ThemeName): ThemeName => {
  const index = themeOrder.indexOf(current);
  return themeOrder[(index + 1) % themeOrder.length];
};

const THEME_KEY = "fv-theme";

export const isThemeName = (value: unknown): value is ThemeName => themeOrder.includes(value as ThemeName);

export const loadTheme = (): ThemeName => {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (isThemeName(stored)) return stored;
  } catch {
    /* localStorage unavailable */
  }
  return defaultTheme;
};

export const saveTheme = (theme: ThemeName) => {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* localStorage unavailable */
  }
};
