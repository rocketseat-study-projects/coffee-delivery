import { Actions, AddCartWrapper, ButtonCart, Buy, CoffeeCardContainer, Tags } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { formatMoney } from "../../../../utils/formatMoney";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";

export function CoffeeCard() {
  const { coffees, handleIncrease, handleDecrease } = useContext(CoffeeContext);

  // const formattedPrice = formatMoney(coffee.value);
  // console.log(formattedPrice);
  return (
    <>
      {coffees.map((coffee) => {
        return (
          <CoffeeCardContainer key={coffee.id}>
            <img src={`/coffee/${coffee.image}`} alt="" />
            <Tags>
              <span>{coffee.category}</span>
              {coffee.secondeCategory && <span>{coffee.secondeCategory}</span>}
              {coffee.thirdCategory && <span>{coffee.thirdCategory}</span>}
            </Tags>
            <h3>{coffee.title}</h3>
            <p>{coffee.description}</p>
            <Buy>
              <p>{coffee.value}</p>
              <Actions>
                <AddCartWrapper>
                  <QuantityInput
                    id={coffee.id}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                    quantity={coffee.quantity}
                  />
                </AddCartWrapper>
                <ButtonCart>
                  <ShoppingCart weight="fill" size={24} />
                </ButtonCart>
              </Actions>
            </Buy>
          </CoffeeCardContainer>
        );
      })}
    </>
  );
}
