import { CartContext, CartItem } from "../../contexts/CartContext";
import { ItemCard } from "../ItemCard";
import { ConfirmButton, Container, PaymentInfo } from "./styles";
import { useContext } from "react";
import data from "../../data";
import { PaymentMethodContext } from "../../contexts/PaymentInfoContext";

export function CheckoutConfirmationBox() {
  const { cart, cartTotal } = useContext(CartContext);
  const { currentPaymentInfo } = useContext(PaymentMethodContext);

  return (
    <Container>
      {cart.length ? (
        <>
          {cart.map((item: CartItem) => {
            return (
              <ItemCard
                key={item.id}
                cardId={item.id}
                cardImage={data.items[item.id].picture}
                cardName={data.items[item.id].name}
                cardPrice={data.items[item.id].price}
                cardQuantity={item.amount}
              />
            );
          })}
          <PaymentInfo>
            <span>Total de itens</span>
            <span>R$ {cartTotal.toFixed(2).toString().replace(".", ",")}</span>
            <span>Entrega</span>
            <span>R$ 3,50</span>
            <p>Total</p>
            <p>
              R$ {(cartTotal + 3.5).toFixed(2).toString().replace(".", ",")}
            </p>
          </PaymentInfo>
          <ConfirmButton
            disabled={!currentPaymentInfo}
            form="address"
            type="submit"
          >
            Confirmar pedido
          </ConfirmButton>
        </>
      ) : (
        <p>Não há itens no carrinho</p>
      )}
    </Container>
  );
}
