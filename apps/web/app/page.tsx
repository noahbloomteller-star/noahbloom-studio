import { Button } from "@noahbloom/ui";

export default function Home() {
  return (
    <main
      style={{
        padding: "4rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "flex-start",
      }}
    >
      <h1>Noah Bloom Studio</h1>

      <p>Design System and UI package connected successfully.</p>

      <Button>
        Primary Button
      </Button>

      <Button variant="secondary">
        Secondary Button
      </Button>

      <Button variant="ghost">
        Ghost Button
      </Button>

      <Button size="sm">
        Small Button
      </Button>

      <Button size="lg">
        Large Button
      </Button>

      <Button disabled>
        Disabled Button
      </Button>
    </main>
  );
}