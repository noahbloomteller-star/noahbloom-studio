import Link from "next/link";

import {
  Button,
  Container,
  Section,
  Stack,
} from "@noahbloom/ui";

import "./hero.css";

export function Hero() {
  return (
    <Section className="hero">
      <Container>
        <div className="hero__content">
          <Stack gap="lg">
            <p className="hero__eyebrow">
              Noah Bloom Studio
            </p>

            <h1 className="hero__title">
              Thoughtful digital experiences,
              built with intention.
            </h1>

            <p className="hero__description">
              We create meaningful digital products,
              brands, and experiences that feel clear,
              human, and beautifully considered.
            </p>

            <div className="hero__actions">
              <Button href="/work">
  Explore the Studio
</Button>

<Button
  href="/about"
  variant="secondary"
>
  About Us
</Button>
            </div>
          </Stack>
        </div>
      </Container>
    </Section>
  );
}