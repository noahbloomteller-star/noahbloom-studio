import { colors, typography } from "@noahbloom/design-system";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: colors.background.primary,
        color: colors.foreground.primary,
        padding: "4rem",
        fontFamily: typography.fontFamily.sans,
      }}
    >
      <h1
        style={{
          color: colors.brand.green,
          fontSize: typography.fontSize["4xl"],
          fontWeight: typography.fontWeight.bold,
        }}
      >
        Noah Bloom Studio
      </h1>

      <p
        style={{
          color: colors.foreground.secondary,
          fontSize: typography.fontSize.lg,
        }}
      >
        Design System connected successfully.
      </p>
    </main>
  );
}