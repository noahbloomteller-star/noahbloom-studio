import { CollectionHero } from "../../components/collection-hero";
import { WorkGrid } from "../../components/work-grid";

export default function WorkPage() {
  return (
    <main>
      <CollectionHero
        eyebrow="Selected Work"
        title={
          <>
            A collection of
            <br />
            creative work.
          </>
        }
        description="Explore selected collections of original designs created by Noah Bloom Studio."
      />

      <WorkGrid />
    </main>
  );
}