import Link from "next/link";

import {
  Container,
  Section,
  Stack,
} from "@noahbloom/ui";

import "./work-grid.css";

const projects = [
  {
    title: "T-Shirt Designs",
    category: "Apparel",
    description:
      "Original graphic designs and expressive prints created for everyday wear.",
    href: "/work/t-shirt-designs",
    variant: "apparel",
  },
  {
    title: "Mug Designs",
    category: "Home & Lifestyle",
    description:
      "Playful and thoughtful designs created to bring personality to everyday moments.",
    href: "/work/mug-designs",
    variant: "lifestyle",
  },
  {
    title: "Typography & Slogans",
    category: "Typography",
    description:
      "Memorable words, bold ideas, and carefully crafted typography designed to make a statement.",
    href: "/work/typography-slogans",
    variant: "typography",
  },
  {
    title: "Creative Collections",
    category: "Collections",
    description:
      "Curated collections of original artwork built around unique themes, moods, and ideas.",
    href: "/work/creative-collections",
    variant: "collections",
  },
];

export function WorkGrid() {
  return (
    <Section className="work-grid">
      <Container>
        <Stack gap="lg">
          <div className="work-grid__items">
            {projects.map((project) => (
              <article
                key={project.title}
                className="work-grid__card"
              >
                <div
                  className={`work-grid__image work-grid__image--${project.variant}`}
                >
                  <span>{project.category}</span>

                  <div className="work-grid__visual">
                    <span className="work-grid__visual-title">
                      {project.title}
                    </span>
                  </div>
                </div>

                <div className="work-grid__content">
                  <Stack gap="sm">
                    <h2 className="work-grid__title">
                      {project.title}
                    </h2>

                    <p className="work-grid__description">
                      {project.description}
                    </p>

                    <Link
                      href={project.href}
                      className="work-grid__link"
                    >
                      Explore collection
                    </Link>
                  </Stack>
                </div>
              </article>
            ))}
          </div>
        </Stack>
      </Container>
    </Section>
  );
}