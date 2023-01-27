import { Actions, AddCartWrapper, ButtonCart, Buy, CoffeeCardContainer, Tags } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { useEffect, useState } from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { formatMoney } from "../../../../utils/formatMoney";

export interface Coffee {
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

export function CoffeeCard() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  //puxa dados do JSONServer
  async function loadCoffees() {
    const response = await fetch("http://localhost:3333/Coffees");
    const data = await response.json();
    setCoffees(data);
  }
  useEffect(() => {
    loadCoffees();
  }, []);

  //função que aumenta a quantidade
  function handleIncrease(id: string) {
    console.log(id);
    coffees.map((item) => {
      if (item.id === id) {
        item.quantity = item.quantity + 1;
      }
      return coffees;
    });

    setCoffees([...coffees]);
  }
  //função que diminui a quantidade
  function handleDecrease(id: string) {
    coffees.map((item) => {
      if (item.id === id) {
        item.quantity = item.quantity - 1;
      }
      return coffees;
    });
    setCoffees([...coffees]);
  }

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
