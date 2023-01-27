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
      padding: 0.5rem;
      height: 2.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Roboto", sans-serif;
    }
  }
`;

export const Location = styled.a`
  background: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  border-radius: 6px;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 38px;
  height: 38px;
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  border-radius: 6px;

  width: 2.5rem;

  position: relative;

  &:hover {
    transform: scale(1.02);
  }

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);

    background: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme["white"]};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }
`;
