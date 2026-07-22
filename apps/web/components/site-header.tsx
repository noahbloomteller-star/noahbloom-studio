import Link from "next/link";

import { Container } from "@noahbloom/ui";

import "./site-header.css";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Container>
        <nav className="site-header__nav">
          <Link
            href="/"
            className="site-header__logo"
          >
            Noah Bloom Studio
          </Link>

          <div className="site-header__links">
            <Link href="/work">
              Work
            </Link>

            <Link href="/about">
              About
            </Link>

            <Link href="/contact">
              Contact
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}