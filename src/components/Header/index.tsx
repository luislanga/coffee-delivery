import { HeaderContainer, HeaderLocation, HeaderCart, HeaderNav } from "./styles";
import { MapPin, ShoppingCart  } from '@phosphor-icons/react'
import logo from "../../assets/Logo.svg"

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Coffee Delivery" />
      <HeaderNav>
        <HeaderLocation>
            <MapPin weight="fill"/>
            <span>Porto Alegre, RS</span>
        </HeaderLocation>
        <HeaderCart>
            <ShoppingCart weight="fill"/>
            <span>3</span>
        </HeaderCart>
      </HeaderNav>
    </HeaderContainer>
  );
}
