import { Container, ItemContainer } from "./styles";
import { IconHolder } from "../IconHolder";
import { MapPin, Clock, CurrencyDollar } from "@phosphor-icons/react";

export function Summary() {
  return (
    <Container>
      <ItemContainer>
        <IconHolder>
          <MapPin weight="fill" />
        </IconHolder>
        <div>
          <span>
            Entrega em <strong> Rua João Daniel Martinelli, 102</strong>{" "}
          </span>
          <span>Farrapos, Porto Alegre, RS</span>
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
          <strong>Cartão de crédito</strong>
        </div>
      </ItemContainer>
    </Container>
  );
}
