import Link from "next/link";
import type { ReactNode } from "react";

import {
  Container,
  Section,
  Stack,
} from "@noahbloom/ui";

import "./collection-hero.css";

type CollectionHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
};

export function CollectionHero({
  eyebrow,
  title,
  description,
}: CollectionHeroProps) {
  return (
    <Section className="collection-hero">
      <Container>
        <Stack gap="lg">
          <Link
            href="/work"
            className="collection-hero__back"
          >
            ← Back to Work
          </Link>

          <div className="collection-hero__content">
            <Stack gap="md">
              <p className="collection-hero__eyebrow">
                {eyebrow}
              </p>

              <h1 className="collection-hero__title">
                {title}
              </h1>

              <p className="collection-hero__description">
                {description}
              </p>
            </Stack>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}