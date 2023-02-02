import styled from "styled-components";

export const AddressContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FormAddress = styled.form`
  background: ${(props) => props.theme["gray-100"]};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 16px;
    padding: 12px;

    width: 560px;
    height: 42px;

    /* Base/Input */

    background: #eeeded;
    /* Base/Button */

    border: 1px solid #e6e5e5;
    border-radius: 4px;
  }
  #cep {
    border: 2px solid red;
    width: 200px;
  }
`;
