import { Hero } from "../components/hero";
import { SelectedWork } from "../components/selected-work";
import { StudioPhilosophy } from "../components/studio-philosophy";
import { Services } from "../components/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <StudioPhilosophy />
    </main>
  );
}