import { Coffee, CoffeeCard } from "../CoffeeCard";
import { CoffeeMenuContainer, OurCoffeesContainer } from "./styles";

export function OurCoffee() {
  return (
    <OurCoffeesContainer>
      <h2>Nossos cafés</h2>
      <CoffeeMenuContainer>
        <CoffeeCard />
      </CoffeeMenuContainer>
    </OurCoffeesContainer>
  );
}
