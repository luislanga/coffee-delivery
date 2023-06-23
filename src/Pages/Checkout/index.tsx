import { Container, InfoContainer, SelectionContainer } from "./styles";
import { AddressForm } from "../../components/AddressForm";
import { PaymentBox } from "../../components/PaymentBox";
import { CheckoutConfirmationBox } from "../../components/CheckoutConfirmationBox";

export function Checkout() {
  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>
        <AddressForm />
        <PaymentBox />
      </InfoContainer>
      <SelectionContainer>
        <h2>Cafés selecionados</h2>
        <CheckoutConfirmationBox/>
      </SelectionContainer>
    </Container>
  );
}
