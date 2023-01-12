import { MapPin, ShoppingCart } from "phosphor-react";
import { Cart, HeaderContainer, Location } from "./styles";

import LogoCoffee from "../../assets/logo-coffee.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffee} alt="" />
      <nav>
        <Location href="">
          {" "}
          <MapPin size={22} />
          São Paulo, SP
        </Location>
        <Cart href="">
          <ShoppingCart size={22} />
        </Cart>
      </nav>
    </HeaderContainer>
  );
}
