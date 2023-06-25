import {
  BulletPoint,
  BulletPointsContainer,
  Container,
  Lettering,
} from "./styles";
import { IconHolder } from "../IconHolder";
import { ShoppingCart, Timer, Coffee, Package } from "@phosphor-icons/react";
import heroImage from "../../assets/Imagem.svg";

export function Hero() {
  return (
    <Container>
      <div className="textContainer">
        <Lettering>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Lettering>
        <BulletPointsContainer>
          <BulletPoint className="bulletPoint">
            <IconHolder variant={"dark-yellow"}>
              <ShoppingCart weight="fill" />
            </IconHolder>
            <span>Compra simples e segura</span>
          </BulletPoint>
          <BulletPoint>
            <IconHolder variant={"gray"}>
              <Coffee weight="fill" />
            </IconHolder>
            <span>Embalagem mantém o café intacto</span>
          </BulletPoint>
          <BulletPoint>
            <IconHolder variant={"yellow"}>
              <Timer weight="fill" />
            </IconHolder>
            <span>Entrega rápida e rastreada</span>
          </BulletPoint>
          <BulletPoint>
            <IconHolder>
              <Package weight="fill" />
            </IconHolder>
            <span>O café chega fresquinho até você</span>
          </BulletPoint>
        </BulletPointsContainer>
      </div>
      <img src={heroImage} alt="" />
    </Container>
  );
}
