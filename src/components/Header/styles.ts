import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      gap: 0.25rem;
      padding: 0 0.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Location = styled.a`
  background: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  border-radius: 6px;
`;

export const Cart = styled.a`
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  border-radius: 6px;

  width: 2.5rem;
`;
