import { Icon, IntroBanner, IntroContainer, IntroContent, IntroItens, Item } from "./styles";

import CoffeeImage from "../../../../assets/coffee-img.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Intro() {
  return (
    <>
      <IntroBanner />
      <IntroContainer>
        <IntroContent>
          <header>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </header>

          <IntroItens>
            <Item>
              <Icon variant="yellow-dark">
                <ShoppingCart size={16} weight="fill" />
              </Icon>
              <p>Compra simples e segura</p>
            </Item>

            <Item>
              <Icon variant="gray">
                <Package size={16} weight="fill" />
              </Icon>
              <p>Embalagem mantém o café intacto</p>
            </Item>

            <Item>
              <Icon variant="yellow">
                <Timer size={16} weight="fill" />
              </Icon>
              <p>Entrega rápida e rastreada</p>
            </Item>

            <Item>
              <Icon variant="purple">
                <Coffee size={16} weight="fill" />
              </Icon>
              <p>O café chega fresquinho até você</p>
            </Item>
          </IntroItens>
        </IntroContent>

        <div>
          <img src={CoffeeImage} alt="Imagem Cafe do banner" />
        </div>
      </IntroContainer>
    </>
  );
}
