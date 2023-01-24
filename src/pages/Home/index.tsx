import { Header } from "../../components/Header";
import { Intro } from "./components/Intro";
import { OurCoffee } from "./components/OurCoffee";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffee />
    </HomeContainer>
  );
}
