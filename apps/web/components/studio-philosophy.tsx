import {
  Container,
  Section,
  Stack,
} from "@noahbloom/ui";

import "./studio-philosophy.css";

const principles = [
  {
    number: "01",
    title: "Clarity",
    description:
      "We simplify complexity and focus on what truly matters.",
  },
  {
    number: "02",
    title: "Humanity",
    description:
      "We design for real people, creating experiences that feel natural and considered.",
  },
  {
    number: "03",
    title: "Intent",
    description:
      "Every detail has a reason to exist, from the first interaction to the smallest element.",
  },
];

export function StudioPhilosophy() {
  return (
    <Section className="studio-philosophy">
      <Container>
        <Stack gap="lg">
          <div className="studio-philosophy__intro">
            <Stack gap="md">
              <p className="studio-philosophy__eyebrow">
                Our Approach
              </p>

              <h2 className="studio-philosophy__title">
                We believe good digital experiences
                should feel clear, human, and intentional.
              </h2>

              <p className="studio-philosophy__description">
                We combine thoughtful strategy, purposeful
                design, and technology to create digital
                experiences that feel simple, meaningful,
                and built to last.
              </p>
            </Stack>
          </div>

          <div className="studio-philosophy__principles">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="studio-philosophy__principle"
              >
                <span className="studio-philosophy__number">
                  {principle.number}
                </span>

                <Stack gap="sm">
                  <h3 className="studio-philosophy__principle-title">
                    {principle.title}
                  </h3>

                  <p className="studio-philosophy__principle-description">
                    {principle.description}
                  </p>
                </Stack>
              </article>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}