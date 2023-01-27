import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 100%;
  width: 256px;
  background: ${(props) => props.theme["gray-100"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  padding-top: 0;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }

  h3 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: ${(props) => props.theme["gray-800"]};
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme["gray-600"]};
  }
`;

export const Tags = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span {
    background: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    text-transform: uppercase;
    font-size: 10px;
    text-align: center;

    border-radius: 100px;
    width: 5rem;
    height: 1.3rem;
    padding: 0.25rem 0.5rem;
  }
`;

export const Buy = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 29px;

  p {
    color: ${(props) => props.theme["gray-700"]};
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 130%;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  button {
  }
`;
export const AddCartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  border-radius: 6px;
  background: ${(props) => props.theme["gray-400"]};

  button {
    border: 0;
    background: transparent;
    color: ${(props) => props.theme.purple};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
      transition: color 0.2s;
    }
    &:disabled {
      color: ${(props) => props.theme["gray-100"]};
    }
  }
`;

export const ButtonCart = styled.button`
  border: none;
  background: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  width: 2.5rem;
  height: 2.3rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.purple};
    transition: background-color 0.2s;
  }
`;
