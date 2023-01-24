import { Actions, Buy, CoffeeCardContainer, Counter, Tags } from "./styles";
import ExpressTrad from "../../../../assets/express-trad.svg";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";

export interface CardCoffeelProps {
  id: string;
  title: string;
  description: string;
  category: string;
  secondeCategory?: string;
  thirdCategory?: string;
  quantity: number;
  value: number;
  image: string;
}

export function CoffeeCard({
  id,
  title,
  description,
  category,
  secondeCategory,
  thirdCategory,
  value,
  image,
}: CardCoffeelProps) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }
  return (
    <CoffeeCardContainer>
      <img src={ExpressTrad} alt="" />
      <Tags>
        <span>tradicional</span>
        <span>gelado</span>
      </Tags>

      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <Buy>
        <p>R$ 9,90</p>
        <Actions>
          <Counter>
            <button onClick={handleDecrease}>
              <Minus size={14} />
            </button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>
              <Plus size={14} />
            </button>
          </Counter>

          <button>
            <ShoppingCart weight="fill" />
          </button>
        </Actions>
      </Buy>
    </CoffeeCardContainer>
  );
}
