import { AddressContent, FormAddress } from "./styles";

export function AddressForm() {
  return (
    <AddressContent>
      <FormAddress action="">
        <header>
          <p>Endereço de entrega</p>
          <p>informe o endereço de entrega</p>
        </header>
        <input type="text" name="" id="cep" placeholder="Cep" />
        <input type="text" name="" id="" />
        <input type="number" name="" id="" />
        <input type="number" name="" id="" />
        <input type="number" name="" id="" />
        <input type="number" name="" id="" />
      </FormAddress>

      <div>
        <p>Pagamento</p>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

        <button>Cartao de credito</button>
        <button>Cartao de debito</button>
        <button>Dinheiro</button>
      </div>
    </AddressContent>
  );
}
