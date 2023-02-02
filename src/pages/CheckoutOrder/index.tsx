import { AddressForm } from "./components/AdressForm";
import { Summary } from "./components/summary";
import { CheckoutOrderContainer } from "./styles";

export function CheckoutOrder() {
  return (
    <CheckoutOrderContainer>
      <AddressForm />
      <Summary />
    </CheckoutOrderContainer>
  );
}
