import { Container, ItemShowcase } from "./styles";
import { Hero } from "../../components/Hero";
import { ShowcaseItem } from "../../components/ShowcaseItem";
import itemsData from "../../data"

export function Home() {
  return (
    <Container>
      <Hero />
      <h2>Nossos cafés</h2>
      <ItemShowcase>
        {itemsData.items.map(item => {
          return(
            <ShowcaseItem
              key={item.id}
              itemTags={item.tags}
              itemName={item.name}
              itemDescription={item.description}
              itemPrice={item.price}
              itemImg={item.picture}
            />
          )
        })}
      </ItemShowcase>
    </Container>
  );
}
