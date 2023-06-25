import { Container, FormFields, FormTitle } from "./styles";
import { MapPinLine } from "@phosphor-icons/react";

export function AddressForm() {
  return (
    <Container>
      <FormTitle>
        <div className="icon">
          <MapPinLine />
        </div>
        <div>
          <h3>Endereço de entrega</h3>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </FormTitle>
      <FormFields id="address">
        <input
          className="shortInput"
          type="number"
          name="cep"
          placeholder="CEP"
        />
        <input type="text" name="rua" placeholder="Rua" />
        <div className="lined">
          <input
            className="shortInput"
            type="number"
            name="number"
            placeholder="Número"
          />
          <input
            className="grownInput"
            type="text"
            name="complement"
            placeholder="Complemento"
          />
        </div>
        <div className="lined">
          <input
            className="shortInput"
            type="text"
            name="neighborhood"
            placeholder="Bairro"
          />
          <input
            className="grownInput"
            type="text"
            name="city"
            placeholder="Cidade"
          />
          <input className="tinyInput" type="text" name="uf" placeholder="UF" />
        </div>
      </FormFields>
    </Container>
  );
}
