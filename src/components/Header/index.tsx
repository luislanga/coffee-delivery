import {
  HeaderContainer,
  HeaderLocation,
  HeaderCart,
  HeaderNav,
} from "./styles";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { AddressContext } from "../../contexts/AddressContext";

import logo from "../../assets/Logo.svg";

export function Header() {
  const { cart } = useContext(CartContext);
  const { currentAddress } = useContext(AddressContext);

  const cartHasItems = cart.length > 0;

  return (
    <HeaderContainer>
      <NavLink to={"/"}>
        <img src={logo} alt="Coffee Delivery" />
      </NavLink>
      <HeaderNav>
        <HeaderLocation>
          <MapPin weight="fill" />
          <span>
            {currentAddress.city !== ""
              ? `${currentAddress.city}, ${currentAddress.uf}`
              : "-"}
          </span>
        </HeaderLocation>
        <NavLink to="/checkout">
          <HeaderCart>
            <ShoppingCart weight="fill" />
            {cartHasItems ? <span>{cart.length}</span> : null}
          </HeaderCart>
        </NavLink>
      </HeaderNav>
    </HeaderContainer>
  );
}
