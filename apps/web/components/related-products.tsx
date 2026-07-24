import { products } from "../data/products";

import { ProductCard } from "./product-card";

import "./related-products.css";

type RelatedProductsProps = {
  currentSlug: string;
};

export function RelatedProducts({
  currentSlug,
}: RelatedProductsProps) {
  const relatedProducts = products.filter(
    (product) => product.slug !== currentSlug,
  );

  return (
    <section className="related-products">
      <div className="related-products__header">
        <p className="related-products__eyebrow">
          Explore more
        </p>

        <h2 className="related-products__title">
          You may also like
        </h2>
      </div>

      <div className="related-products__grid">
        {relatedProducts.map((product) => (
          <ProductCard
            key={product.slug}
            title={product.title}
            category={product.category}
            description={product.description}
            href={`/work/t-shirt-designs/${product.slug}`}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}