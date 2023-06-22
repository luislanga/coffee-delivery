import { Container } from "./styles";
import { AddressForm } from "../../components/AddressForm";

export function Checkout() {
  return (
    <Container>
      <h2>Complete seu pedido</h2>
      <AddressForm />
    </Container>
  );
}
