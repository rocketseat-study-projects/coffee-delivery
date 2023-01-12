import { MapPin, ShoppingCart } from "phosphor-react";
import { Cart, HeaderContainer, Location } from "./styles";

import LogoCoffee from "../../assets/logo-coffee.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffee} alt="" />
      <nav>
        <Location href="">
          <MapPin size={22} weight="fill" />
          São Paulo, SP
        </Location>
        <NavLink to="">
          <Cart href="">
            <span>1</span>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
