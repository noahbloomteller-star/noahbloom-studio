import Link from "next/link";

import "./product-card.css";

type ProductCardProps = {
  title: string;
  category: string;
  description: string;
  href: string;
  variant: string;
};

export function ProductCard({
  title,
  category,
  description,
  href,
  variant,
}: ProductCardProps) {
  return (
    <article className="product-card">
      <div
        className={`product-card__image product-card__image--${variant}`}
      >
        <span className="product-card__image-label">
          {category}
        </span>

        <span className="product-card__image-title">
          {title}
        </span>
      </div>

      <div className="product-card__content">
        <p className="product-card__category">
          {category}
        </p>

        <h2 className="product-card__title">
          {title}
        </h2>

        <p className="product-card__description">
          {description}
        </p>

        <Link
          href={href}
          className="product-card__link"
        >
          View Product →
        </Link>
      </div>
    </article>
  );
}