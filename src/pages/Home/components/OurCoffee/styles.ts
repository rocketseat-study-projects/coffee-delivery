import styled from "styled-components";
export const OurCoffeesContainer = styled.section`
  width: 100%;
  margin-top: 2rem;

  h2 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;

    color: ${(props) => props.theme["gray-800"]};

    @media screen and (max-width: 580px) {
      text-align: center;
    }
  }
`;
export const CoffeeMenuContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;

  @media screen and (max-width: 580px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
