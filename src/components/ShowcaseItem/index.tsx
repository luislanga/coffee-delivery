import { AdderContainer, Container, ItemAdder, ItemInfo, ShopItem, Tag } from "./styles";
import coffeeImg from "../../assets/Coffee.png";
import { Plus, Minus, ShoppingCart } from "@phosphor-icons/react"


export function ShowcaseItem() {
  return (
    <Container>
      <img src={coffeeImg} alt="" />
      <div className="tags">
        {" "}
        {/* fazer um styled component para essa div */}
        <Tag>tradicional</Tag>
      </div>
      <ItemInfo>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </ItemInfo>
      <ShopItem>
        <div className="pricing">
          R$
          <span className="price">9,90</span>
        </div>
        <ItemAdder>
          <AdderContainer>
            <button className="minus">
              <Minus weight="bold"/>
            </button>
            <span className="quantity">1</span>
            <button className="plus">
              <Plus weight="bold"/>
            </button>
          </AdderContainer>
          <button className="addToCart">
            <ShoppingCart weight="fill"/>
          </button>
        </ItemAdder>
      </ShopItem>
    </Container>
  );
}
