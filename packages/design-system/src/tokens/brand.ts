/**
 * Noah Bloom Studio
 *
 * Core brand identity tokens.
 *
 * These values represent the primary colors
 * extracted from the official Noah Bloom Studio logo.
 */

export const brand = {
  orange: "#FF6500",
  green: "#009B2A",
  white: "#FFFFFF",
} as const;

export type BrandColor = keyof typeof brand;