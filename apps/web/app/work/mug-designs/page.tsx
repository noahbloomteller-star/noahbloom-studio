import { CollectionHero } from "../../../components/collection-hero";

export default function MugDesignsPage() {
  return (
    <main>
      <CollectionHero
        eyebrow="Home & Lifestyle"
        title={
          <>
            Small moments.
            <br />
            Thoughtful designs.
          </>
        }
        description="A collection of playful and thoughtful designs created to bring personality to everyday moments."
      />
    </main>
  );
}