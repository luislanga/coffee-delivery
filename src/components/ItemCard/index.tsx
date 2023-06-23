import {
  AdderContainer,
  CardButtons,
  CardControls,
  Container,
  ItemInfo,
} from "./styles";
import image from "../../assets/Coffee.png";
import { Minus, Plus, Trash } from "@phosphor-icons/react";

export function ItemCard() {
  return (
    <Container>
      <ItemInfo>
        <img src={image} alt="" />
        <CardControls>
          <span>Expresso trad wife</span>
          <CardButtons>
            <AdderContainer>
              <button className="minus">
                <Minus weight="bold" />
              </button>
              <span className="quantity">1</span>
              <button className="plus">
                <Plus weight="bold" />
              </button>
            </AdderContainer>
            <button className="remove">
                <Trash />
                <span>Remover</span>
            </button>
          </CardButtons>
        </CardControls>
      </ItemInfo>
      <p>R$ 9,90</p>
    </Container>
  );
}
