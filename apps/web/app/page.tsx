import {
  Button,
  Container,
  Section,
  Stack,
} from "@noahbloom/ui";

export default function Home() {
  return (
    <main>
      <Section>
        <Container>
          <Stack gap="lg">
            <h1>Noah Bloom Studio</h1>

            <p>
              Building a thoughtful digital studio.
            </p>

            <Button variant="primary">
              Explore
            </Button>
          </Stack>
        </Container>
      </Section>
    </main>
  );
}