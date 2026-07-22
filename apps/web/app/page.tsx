import { Hero } from "../components/hero";
import { SelectedWork } from "../components/selected-work";
import { Services } from "../components/services";
import { StudioPhilosophy } from "../components/studio-philosophy";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <StudioPhilosophy />
      <Services />
    </main>
  );
}