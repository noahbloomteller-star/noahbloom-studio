import {
  Container,
  Section,
  Stack,
} from "@noahbloom/ui";

import "./services.css";

const services = [
  {
    number: "01",
    title: "Digital Experiences",
    description:
      "Thoughtful websites and digital products designed to make complex ideas feel simple, clear, and engaging.",
  },
  {
    number: "02",
    title: "Brand Identity",
    description:
      "Distinctive visual identities that give brands a clear point of view and a consistent presence across every touchpoint.",
  },
  {
    number: "03",
    title: "Creative Direction",
    description:
      "Strategic creative direction that brings together story, design, technology, and purpose into one coherent experience.",
  },
];

export function Services() {
  return (
    <Section className="services">
      <Container>
        <Stack gap="lg">
          <div className="services__intro">
            <Stack gap="md">
              <p className="services__eyebrow">
                What We Do
              </p>

              <h2 className="services__title">
                Ideas deserve thoughtful execution.
              </h2>

              <p className="services__description">
                We help ambitious ideas become clear,
                meaningful, and memorable experiences
                through strategy, design, and technology.
              </p>
            </Stack>
          </div>

          <div className="services__list">
            {services.map((service) => (
              <article
                key={service.number}
                className="services__item"
              >
                <span className="services__number">
                  {service.number}
                </span>

                <h3 className="services__item-title">
                  {service.title}
                </h3>

                <p className="services__item-description">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}