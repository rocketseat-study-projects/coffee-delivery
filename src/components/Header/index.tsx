import { MapPin, ShoppingCart } from "phosphor-react";
import { Cart, HeaderContainer, Location } from "./styles";

import LogoCoffee from "../../assets/logo-coffee.svg";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export function Header() {
  const [city, setCity] = useState("");
  async function geoLocation(lat: number, lon: number) {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
    );
    const data = await response.json();
    setCity(data.address.city);
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      geoLocation(position.coords.latitude, position.coords.longitude);
    });
  }, []);
  return (
    <HeaderContainer>
      <img src={LogoCoffee} alt="" />
      <nav>
        <Location href="">
          <MapPin size={22} weight="fill" />
          {city}
        </Location>
        <NavLink to="/checkoutorder">
          <Cart>
            <span>1</span>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
