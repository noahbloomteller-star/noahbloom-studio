import { products } from "../data/products";

import { ProductCard } from "./product-card";

import "./product-grid.css";

export function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.slug}
          title={product.title}
          category={product.category}
          description={product.description}
          href={`/work/t-shirt-designs/${product.slug}`}
          variant={product.variant}
        />
      ))}
    </div>
  );
}