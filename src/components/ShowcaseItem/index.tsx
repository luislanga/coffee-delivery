import {
  AdderContainer,
  Container,
  ItemAdder,
  ItemInfo,
  ShopItem,
  Tag,
} from "./styles";
import { Plus, Minus, ShoppingCart } from "@phosphor-icons/react";
import { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export interface ShowcaseItemProps {
  itemName: string;
  itemDescription: string;
  itemPrice: number;
  itemImg: string;
  itemTags: string[];
  itemId: number;
}

export function ShowcaseItem({
  itemName,
  itemDescription,
  itemPrice,
  itemTags,
  itemImg,
  itemId,
}: ShowcaseItemProps) {
  const { addToCart } = useContext(CartContext);

  const [addQuantity, setAddQuantity] = useState(1);

  function addMoreItems() {
    if (addQuantity < 99) {
      setAddQuantity((prev) => ++prev);
    }
  }

  function removeItem() {
    if (addQuantity > 1) {
      setAddQuantity((prev) => --prev);
    }
  }

  function priceToString(itemPrice: number) {
    const stringPrice = itemPrice.toFixed(2).toString().replace(".", ",");
    return stringPrice;
  }

  const stringPrice = priceToString(itemPrice);

  return (
    <Container>
      <img src={itemImg} alt="" />
      <div className="tags">
        {itemTags.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>;
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
            <button onClick={removeItem} className="minus">
              <Minus weight="bold" />
            </button>
            <span className="quantity">{addQuantity}</span>
            <button onClick={addMoreItems} className="plus">
              <Plus weight="bold" />
            </button>
          </AdderContainer>
          <button
            className="addToCart"
            onClick={() => addToCart(addQuantity, itemId, itemPrice)}
          >
            <ShoppingCart weight="fill" />
          </button>
        </ItemAdder>
      </ShopItem>
    </Container>
  );
}
