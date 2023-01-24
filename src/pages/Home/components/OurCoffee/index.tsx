import { CoffeeCard } from "../CoffeeCard";
import { CoffeeMenuContainer, OurCoffeesContainer } from "./styles";

export function OurCoffee() {
  return (
    <OurCoffeesContainer>
      <h2>Nosso cafe</h2>

      <CoffeeMenuContainer>
        <CoffeeCard />
      </CoffeeMenuContainer>
    </OurCoffeesContainer>
  );
}
