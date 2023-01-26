// import { createContext, ReactNode, useState } from "react";
// import { CoffeeProps } from "../utils/Coffee";
// import { coffeesUtils } from "../utils/Coffee";

// // interface CoffeeContexType {
// //   id: string;
// //   title: string;
// //   description: string;
// //   category: string;
// //   secondeCategory?: string;
// //   thirdCategory?: string;
// //   quantity: number;
// //   value: number;
// //   image: string;
// // }

// interface CoffeeInformationsContext {
//   coffees: CoffeeProps[];
// }
// interface CoffeeContextProviderProps {
//   children: ReactNode;
// }
// export const CoffeeContext = createContext({} as CoffeeInformationsContext);

// export function CoffeeContextProvider({ children }: CoffeeContextProviderProps) {
//   const [coffees, setCoffees] = useState(coffeesUtils);
//   return <CoffeeContext.Provider value={{ coffees }}>{children}</CoffeeContext.Provider>;
// }
