import Link from "next/link";

import {
  Button,
  Container,
  Section,
  Stack,
} from "@noahbloom/ui";

import "./selected-work.css";

const projects = [
  {
    title: "A thoughtful digital experience",
    category: "Digital Product",
    description:
      "A calm, focused digital experience designed around clarity and meaningful interaction.",
  },
  {
    title: "A brand with a human point of view",
    category: "Brand Identity",
    description:
      "A distinctive visual identity created to communicate personality, warmth, and intention.",
  },
  {
    title: "A simple idea, beautifully expressed",
    category: "Creative Direction",
    description:
      "A considered creative concept that brings together story, design, and digital experience.",
  },
];

export function SelectedWork() {
  return (
    <Section className="selected-work">
      <Container>
        <Stack gap="lg">
          <div className="selected-work__intro">
            <Stack gap="md">
              <p className="selected-work__eyebrow">
                Selected Work
              </p>

              <h2 className="selected-work__title">
                A few things we’ve made with care.
              </h2>

              <p className="selected-work__description">
                A small selection of thoughtful digital
                experiences, identities, and creative
                projects.
              </p>
            </Stack>
          </div>

          <div className="selected-work__grid">
            {projects.map((project) => (
              <article
                key={project.title}
                className="selected-work__card"
              >
                <div className="selected-work__visual">
                  <span>
                    {project.category}
                  </span>
                </div>

                <Stack gap="sm">
                  <p className="selected-work__category">
                    {project.category}
                  </p>

                  <h3 className="selected-work__card-title">
                    {project.title}
                  </h3>

                  <p className="selected-work__card-description">
                    {project.description}
                  </p>
                </Stack>
              </article>
            ))}
          </div>

          <div className="selected-work__action">
            <Button href="/work">
              View All Work
            </Button>
          </div>
        </Stack>
      </Container>
    </Section>
  );
}