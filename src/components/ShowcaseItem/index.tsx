import {
  AdderContainer,
  Container,
  ItemAdder,
  ItemInfo,
  ShopItem,
  Tag,
} from "./styles";
import { Plus, Minus, ShoppingCart } from "@phosphor-icons/react";

interface ShowcaseItemProps {
  itemName: string;
  itemDescription: string;
  itemPrice: number;
  itemImg: string;
  itemTags: string[]; 
}

export function ShowcaseItem({itemName, itemDescription, itemPrice, itemTags, itemImg}: ShowcaseItemProps) {

  function priceToString(itemPrice: number){
    const stringPrice = itemPrice.toFixed(2).toString().replace('.',',')
    return stringPrice
  }

  const stringPrice = priceToString(itemPrice)
  return (
    <Container>
      <img src={itemImg} alt="" />
      <div className="tags">
        {itemTags.map(tag => {
          return(
            <Tag key={tag}>{tag}</Tag>
          )
        })}
      </div>
      <ItemInfo>
        <h3>{itemName}</h3>
        <p>{itemDescription}</p>
      </ItemInfo>
      <ShopItem>
        <div className="pricing">
          R$
          <span className="price">{stringPrice}</span>
        </div>
        <ItemAdder>
          <AdderContainer>
            <button className="minus">
              <Minus weight="bold" />
            </button>
            <span className="quantity">1</span>
            <button className="plus">
              <Plus weight="bold" />
            </button>
          </AdderContainer>
          <button className="addToCart">
            <ShoppingCart weight="fill" />
          </button>
        </ItemAdder>
      </ShopItem>
    </Container>
  );
}
