import { HeaderContainer, HeaderLocation, HeaderCart, HeaderNav } from "./styles";
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart  } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CartContext } from "../../contexts/CartContext";

import logo from "../../assets/Logo.svg"


export function Header() {

  const { cart } = useContext(CartContext)
  const cartHasItems = cart.length > 0

  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={logo} alt="Coffee Delivery" />
      </NavLink>
      <HeaderNav>
        <HeaderLocation>
            <MapPin weight="fill"/>
            <span>Porto Alegre, RS</span>
        </HeaderLocation>
        <NavLink to='/checkout'>
          <HeaderCart>
              <ShoppingCart weight="fill"/>
              {cartHasItems ? <span>{cart.length}</span> : null}
          </HeaderCart>
        </NavLink>
      </HeaderNav>
    </HeaderContainer>
  );
}
