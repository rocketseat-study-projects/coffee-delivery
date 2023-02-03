import { CurrencyDollar, CurrencyDollarSimple, MapPinLine } from "phosphor-react";
import {
  AddressContent,
  ButtonOptions,
  FormAddress,
  HeaderFormPayment,
  Info,
  InfoComplete,
  PaymentMethod,
} from "./styles";

export function AddressForm() {
  return (
    <AddressContent>
      <h2>Complete seu pedido</h2>
      <FormAddress action="">
        <HeaderFormPayment>
          <MapPinLine size={22} />
          <div>
            <h3>Endereço de entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </HeaderFormPayment>
        <input type="text" name="" id="cep" placeholder="CEP" />
        <input type="text" name="" id="rua" placeholder="Rua" />
        <InfoComplete>
          <input type="number" name="" id="numero" placeholder="Número" />
          <input type="text" name="" id="complemento" placeholder="Complemento" />
        </InfoComplete>
        <Info>
          <input type="text" name="" id="bairro" placeholder="Bairro" />
          <input type="text" name="" id="cidade" placeholder="Cidade" />
          <input type="text" name="" id="uf" placeholder="UF" />
        </Info>
      </FormAddress>

      <PaymentMethod>
        <HeaderFormPayment>
          <CurrencyDollarSimple size={22} />
          <div>
            <h3>Pagamento</h3>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </div>
        </HeaderFormPayment>

        <ButtonOptions>
          <button>Cartao de credito</button>
          <button>Cartao de debito</button>
          <button>Dinheiro</button>
        </ButtonOptions>
      </PaymentMethod>
    </AddressContent>
  );
}
