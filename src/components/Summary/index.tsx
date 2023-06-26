import { Container, ItemContainer } from "./styles";
import { IconHolder } from "../IconHolder";
import { MapPin, Clock, CurrencyDollar } from "@phosphor-icons/react";
import { useContext } from "react";
import { AddressContext } from "../../contexts/AddressContext";
import { PaymentMethodContext } from "../../contexts/PaymentInfoContext";

export function Summary() {
  const { currentAddress } = useContext(AddressContext)
  const { currentPaymentInfo } = useContext(PaymentMethodContext)

  return (
    <Container>
      <ItemContainer>
        <IconHolder>
          <MapPin weight="fill" />
        </IconHolder>
        <div>
          <span>
            Entrega em <strong> {`${currentAddress.rua}, ${currentAddress.number}` }</strong>
          </span>
          <span>{`${currentAddress.neighborhood}, ${currentAddress.city}, ${currentAddress.uf}`}</span>
        </div>
      </ItemContainer>

      <ItemContainer>
        <IconHolder variant="yellow">
          <Clock weight="fill" />
        </IconHolder>
        <div>
          <span>Previsão de entrega</span>
          <strong>20 min - 30 min</strong>
        </div>
      </ItemContainer>

      <ItemContainer>
        <IconHolder variant="dark-yellow">
          <CurrencyDollar />
        </IconHolder>
        <div>
          <span>Pagamento na entrega</span>
          <strong>{currentPaymentInfo}</strong>
        </div>
      </ItemContainer>
    </Container>
  );
}
