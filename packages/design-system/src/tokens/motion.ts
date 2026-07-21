export const motion = {
  duration: {
    instant: "100ms",
    fast: "180ms",
    normal: "300ms",
    slow: "500ms",
    cinematic: "800ms",
  },

  easing: {
    standard: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    enter: "cubic-bezier(0.16, 1, 0.3, 1)",
    exit: "cubic-bezier(0.7, 0, 0.84, 0)",
    emphasized: "cubic-bezier(0.22, 1, 0.36, 1)",
  },

  distance: {
    sm: "8px",
    md: "16px",
    lg: "32px",
  },
} as const;