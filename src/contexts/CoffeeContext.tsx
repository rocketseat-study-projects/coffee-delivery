import { createContext, ReactNode, useEffect, useState } from "react";

interface Coffee {
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

export interface CoffeeContextType {
  coffees: Coffee[];

  handleIncrease: (id: string) => void;
  handleDecrease: (id: string) => void;
}

export interface CoffeeContextProviderProps {
  children: ReactNode;
}
export const CoffeeContext = createContext({} as CoffeeContextType);

export function CoffeeContextProvider({ children }: CoffeeContextProviderProps) {
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
  return (
    <CoffeeContext.Provider value={{ coffees, handleDecrease, handleIncrease }}>
      {children}
    </CoffeeContext.Provider>
  );
}
