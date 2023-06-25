import {
  Container,
  BoxTitle,
  PaymentMethodButton,
  PaymentOptions,
} from "./styles";
import { CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";

export function PaymentBox() {
  return (
    <Container>
      <BoxTitle>
        <div className="icon">
          <CurrencyDollar />
        </div>
        <div>
          <h3>Pagamento</h3>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </BoxTitle>

      <PaymentOptions>
        <PaymentMethodButton>
          <CreditCard />
          <span>Cartão de crédito</span>
        </PaymentMethodButton>
        <PaymentMethodButton className="selected">
          <Bank />
          <span>Cartão de débito</span>
        </PaymentMethodButton>
        <PaymentMethodButton>
          <Money />
          <span>Dinheiro</span>
        </PaymentMethodButton>
      </PaymentOptions>
    </Container>
  );
}
