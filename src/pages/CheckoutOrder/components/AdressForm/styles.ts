import styled from "styled-components";

export const AddressContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    color: ${(props) => props.theme["gray-800"]};
  }
`;

export const FormAddress = styled.form`
  background: ${(props) => props.theme["gray-100"]};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;

  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  input {
    margin: 1rem 0;
    padding: 0.75rem;
    gap: 0.75rem;
    height: 2.62rem;

    background: ${(props) => props.theme["gray-300"]};

    border: 1px solid ${(props) => props.theme["gray-400"]};
    border-radius: 4px;
  }

  #rua {
    width: 100%;
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 200px 276px 60px;
  flex-direction: row;
  gap: 0.75rem;
`;

export const InfoComplete = styled.div`
  display: grid;
  grid-template-columns: 200px 348px;
  flex-direction: row;
  gap: 0.75rem;
`;

export const PaymentMethod = styled.section`
  background: ${(props) => props.theme["gray-100"]};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const HeaderFormPayment = styled.header`
  display: flex;
  gap: 8px;

  h3 {
    font-size: 1rem;
  }

  p {
    margin-top: 5px;
    font-size: 0.875rem;
  }
`;

export const ButtonOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;

  button {
    margin-top: 32px;
    height: 51px;
    padding: 16px;
    gap: 12px;
    width: 178.67px;

    background: #e6e5e5;
    border-radius: 6px;
    border: none;
  }
`;
