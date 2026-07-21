import {
  colors,
  motion,
  radii,
  shadows,
  spacing,
  typography,
} from "./tokens";

export const theme = {
  colors,
  motion,
  radii,
  shadows,
  spacing,
  typography,
} as const;

export type Theme = typeof theme;