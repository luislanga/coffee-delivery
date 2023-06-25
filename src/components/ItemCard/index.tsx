import {
  AdderContainer,
  CardButtons,
  CardControls,
  Container,
  ItemInfo,
} from "./styles";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { useState, useContext } from 'react'
import { CartContext } from "../../contexts/CartContext";

interface ItemCardProps {
  cardImage: string;
  cardName: string;
  cardPrice: number;
  cardQuantity: number;
  cardId: number;
}

export function ItemCard({cardImage, cardName, cardPrice, cardQuantity, cardId}: ItemCardProps) {

  const { addToCart, removeFromCart, cartTotal, cart } = useContext(CartContext)
  const [currentQuantity, setCurrentQuantity] = useState<number>(cardQuantity)

  function addOne() {
    if(currentQuantity < 99){
      setCurrentQuantity(prev => ++prev)
      addToCart(1, cardId, cardPrice)
    }
  }

  function removeOne(){
    if(currentQuantity > 1){
      addToCart(-1, cardId, cardPrice)
      setCurrentQuantity(prev => --prev)
    }
  }

  return (
    <Container>
      <ItemInfo>
        <img src={cardImage} alt="" />
        <CardControls>
          <span>{cardName}</span>
          <CardButtons>
            <AdderContainer>
              <button onClick={removeOne}>
                <Minus weight="bold" />
              </button>
              <span className="quantity">{currentQuantity}</span>
              <button onClick={addOne}>
                <Plus weight="bold" />
              </button>
            </AdderContainer>
            <button className="remove" onClick={() => removeFromCart(cardId)}>
                <Trash />
                <span>Remover</span>
            </button>
          </CardButtons>
        </CardControls>
      </ItemInfo>
      <p>R$ {cardPrice.toFixed(2).toString().replace(".", ",")}</p>
    </Container>
  );
}
