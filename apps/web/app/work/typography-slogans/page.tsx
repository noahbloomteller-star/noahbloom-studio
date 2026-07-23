import { CollectionHero } from "../../../components/collection-hero";

export default function TypographySlogansPage() {
  return (
    <main>
      <CollectionHero
        eyebrow="Typography"
        title={
          <>
            Words that make
            <br />
            a statement.
          </>
        }
        description="Memorable words, bold ideas, and carefully crafted typography designed to express personality and inspire."
      />
    </main>
  );
}