import Link from "next/link";

import {
  Container,
  Section,
  Stack,
} from "@noahbloom/ui";

import "./site-footer.css";

const footerLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Section className="site-footer__cta">
        <Container>
          <Stack gap="lg">
            <div className="site-footer__cta-content">
              <Stack gap="md">
                <p className="site-footer__eyebrow">
                  Have a project in mind?
                </p>

                <h2 className="site-footer__title">
                  Let&apos;s make something
                  meaningful together.
                </h2>

                <p className="site-footer__description">
                  We&apos;d love to hear about your idea,
                  challenge, or next big thing.
                </p>

                <Link
                  href="/contact"
                  className="site-footer__cta-link"
                >
                  Start a conversation
                </Link>
              </Stack>
            </div>
          </Stack>
        </Container>
      </Section>

      <div className="site-footer__bottom">
        <Container>
          <div className="site-footer__bottom-inner">
            <div className="site-footer__brand">
              <Link
                href="/"
                className="site-footer__brand-link"
              >
                Noah Bloom Studio
              </Link>

              <p className="site-footer__copyright">
                © {new Date().getFullYear()} Noah Bloom Studio.
                All rights reserved.
              </p>
            </div>

            <nav
              className="site-footer__nav"
              aria-label="Footer navigation"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="site-footer__nav-link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </Container>
      </div>
    </footer>
  );
}