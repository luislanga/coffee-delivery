import { Container, ItemShowcase } from "./styles";
import { Hero } from "../../components/Hero";
import { ShowcaseItem } from "../../components/ShowcaseItem";

export function Home() {
  return (
    <Container>
      <Hero />
      <ItemShowcase>
        <h2>Nossos cafés</h2>
        <ShowcaseItem />
        <ShowcaseItem />
        <ShowcaseItem />
      </ItemShowcase>
    </Container>
  );
}
