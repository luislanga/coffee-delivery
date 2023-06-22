import { Container } from "./styles";
import { AddressForm } from "../../components/AddressForm";
import { PaymentBox } from "../../components/PaymentBox";

export function Checkout() {
  return (
    <Container>
      <h2>Complete seu pedido</h2>
      <AddressForm />
      <PaymentBox />
    </Container>
  );
}
