import { Container, FormFields, FormTitle } from "./styles";
import { MapPinLine } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useContext } from "react";
import { AddressContext, formData } from "../../contexts/AddressContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { PaymentMethodContext } from "../../contexts/PaymentInfoContext";

const newAddressValidaitonSchema = zod.object({
  cep: zod.number().min(1, "campo obrigatório"),
  rua: zod.string().min(1, "campo obrigatório"),
  number: zod.number().min(1, "campo obrigatório"),
  neighborhood: zod.string().min(1, "campo obrigatório"),
  city: zod.string().min(1, "campo obrigatório"),
  uf: zod.string().min(1, "campo obrigatório").max(2, "máximo 2 caracteres"),
});

export function AddressForm() {
  const { register, handleSubmit } = useForm<formData>({
    resolver: zodResolver(newAddressValidaitonSchema),
  });

  const navigate = useNavigate();
  const { setAddress } = useContext(AddressContext);
  const { resetCart } = useContext(CartContext);
  const { resetPaymentInfo } = useContext(PaymentMethodContext);

  function handleGetAddress(data: formData) {
    setAddress(data);
    navigate("/success");
    resetCart();
    resetPaymentInfo();
  }

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
      <FormFields onSubmit={handleSubmit(handleGetAddress)} id="address">
        <input
          className="shortInput"
          type="number"
          placeholder="CEP"
          {...register("cep", { valueAsNumber: true })}
        />
        <input type="text" placeholder="Rua" {...register("rua")} />
        <div className="lined">
          <input
            className="shortInput"
            type="number"
            placeholder="Número"
            {...register("number", { valueAsNumber: true })}
          />
          <input
            className="grownInput"
            type="text"
            placeholder="Complemento"
            {...register("complement")}
          />
        </div>
        <div className="lined">
          <input
            className="shortInput"
            type="text"
            placeholder="Bairro"
            {...register("neighborhood")}
          />
          <input
            className="grownInput"
            type="text"
            placeholder="Cidade"
            {...register("city")}
          />
          <input
            className="tinyInput"
            type="text"
            placeholder="UF"
            {...register("uf")}
          />
        </div>
      </FormFields>
    </Container>
  );
}
