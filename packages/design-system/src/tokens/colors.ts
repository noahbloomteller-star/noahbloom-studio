import { brand } from "./brand";

export const colors = {
  brand,

  background: {
    primary: "#FFFDF9",
    secondary: "#F7F4EE",
    inverse: "#101510",
  },

  foreground: {
    primary: "#151815",
    secondary: "#59605A",
    muted: "#858B85",
    inverse: "#FFFFFF",
  },

  surface: {
    primary: "#FFFFFF",
    secondary: "#F7F4EE",
    elevated: "#FFFFFF",
  },

  border: {
    subtle: "#E8E5DE",
    default: "#D8D5CD",
    strong: "#B8B5AD",
  },

  accent: {
    primary: brand.orange,
    secondary: brand.green,
  },

  status: {
    success: brand.green,
    warning: brand.orange,
    error: "#C83B32",
  },
} as const;