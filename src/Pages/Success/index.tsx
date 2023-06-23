import { Container } from "./styles";
import { Summary } from "../../components/Summary";
import illustration from "../../assets/Illustration.svg"

export function Success() {
  return (
    <Container>
      <div className="SuccessInfo">
        <div className="SuccessTitle">
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <Summary />
      </div>
      <img src={illustration} alt="" />
    </Container>
  );
}
