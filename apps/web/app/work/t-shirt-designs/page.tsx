import { CollectionHero } from "../../../components/collection-hero";
import { ProductGrid } from "../../../components/product-grid";

export default function TShirtDesignsPage() {
  return (
    <main>
      <CollectionHero
        eyebrow="Apparel"
        title={
          <>
            Original designs
            <br />
            made to be worn.
          </>
        }
        description="A collection of original graphic designs, expressive typography, and creative prints created for everyday apparel."
      />

      <ProductGrid />
    </main>
  );
}