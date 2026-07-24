import Image from "next/image";
import Link from "next/link";

import "./product-card.css";

type ProductCardProps = {
  title: string;
  category: string;
  description: string;
  href: string;
  image: string;
};

export function ProductCard({
  title,
  category,
  description,
  href,
  image,
}: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-card__image">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="product-card__image-element"
        />
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