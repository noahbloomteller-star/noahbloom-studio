import Link from "next/link";

import { Container } from "@noahbloom/ui";

import "./site-footer.css";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__content">
          <div className="site-footer__brand">
            <Link
              href="/"
              className="site-footer__logo"
            >
              Noah Bloom Studio
            </Link>

            <p className="site-footer__description">
              Thoughtful digital experiences,
              built with intention.
            </p>
          </div>

          <nav
            className="site-footer__links"
            aria-label="Footer navigation"
          >
            <Link href="/work">
              Work
            </Link>

            <Link href="/about">
              About
            </Link>

            <Link href="/contact">
              Contact
            </Link>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {new Date().getFullYear()} Noah Bloom Studio.
            All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}