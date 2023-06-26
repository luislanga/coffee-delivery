import {
  Container,
  BoxTitle,
  PaymentMethodButton,
  PaymentOptions,
} from "./styles";
import { CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";
import { useContext } from "react";
import { PaymentMethodContext } from "../../contexts/PaymentInfoContext";

export function PaymentBox() {
  const { currentPaymentInfo, setPaymentInfo } =
    useContext(PaymentMethodContext);

  function paymentChoice(method: string) {
    setPaymentInfo(method);
  }

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
        <PaymentMethodButton
          className={
            currentPaymentInfo.toString() === "Cartão de crédito"
              ? "selected"
              : ""
          }
          onClick={() => paymentChoice("Cartão de crédito")}
        >
          <CreditCard />
          <span>Cartão de crédito</span>
        </PaymentMethodButton>
        <PaymentMethodButton
          className={
            currentPaymentInfo.toString() === "Cartão de débito"
              ? "selected"
              : ""
          }
          onClick={() => paymentChoice("Cartão de débito")}
        >
          <Bank />
          <span>Cartão de débito</span>
        </PaymentMethodButton>
        <PaymentMethodButton
          className={
            currentPaymentInfo.toString() === "Dinheiro" ? "selected" : ""
          }
          onClick={() => paymentChoice("Dinheiro")}
        >
          <Money />
          <span>Dinheiro</span>
        </PaymentMethodButton>
      </PaymentOptions>
    </Container>
  );
}
