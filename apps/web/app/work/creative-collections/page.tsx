import { CollectionHero } from "../../../components/collection-hero";

export default function CreativeCollectionsPage() {
  return (
    <main>
      <CollectionHero
        eyebrow="Collections"
        title={
          <>
            Ideas brought
            <br />
            together.
          </>
        }
        description="Curated collections of original artwork built around unique themes, moods, and creative ideas."
      />
    </main>
  );
}