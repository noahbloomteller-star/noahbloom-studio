import Image from "next/image";
import Link from "next/link";

import {
  Container,
  Section,
  Stack,
} from "@noahbloom/ui";

import { products } from "../../../../data/products";

import "./product-page.css";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug,
  );

  if (!product) {
    return (
      <main>
        <Section>
          <Container>
            <Stack gap="md">
              <h1>Product not found</h1>

              <Link href="/work/t-shirt-designs">
                ← Back to T-Shirt Designs
              </Link>
            </Stack>
          </Container>
        </Section>
      </main>
    );
  }

  return (
    <main>
      <Section className="product-page">
        <Container>
          <div className="product-page__layout">
            <div className="product-page__visual">
              <Image
                src={product.image}
                alt={product.title}
                width={1600}
                height={2000}
                className="product-page__image"
                priority
              />
            </div>

            <div className="product-page__content">
              <Stack gap="lg">
                <Link
                  href="/work/t-shirt-designs"
                  className="product-page__back"
                >
                  ← Back to T-Shirt Designs
                </Link>

                <Stack gap="md">
                  <p className="product-page__category">
                    {product.category}
                  </p>

                  <h1 className="product-page__title">
                    {product.title}
                  </h1>

                  <p className="product-page__description">
                    {product.description}
                  </p>

                  <p className="product-page__details">
                    {product.details}
                  </p>
                </Stack>

                <div className="product-page__actions">
                  <Link
                    href={product.marketplaceUrl}
                    className="product-page__marketplace-link"
                  >
                    View on Marketplace →
                  </Link>
                </div>
              </Stack>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}