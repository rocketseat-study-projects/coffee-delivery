import styled, { css } from "styled-components";
import backgroundIntro from "../../../../assets/background-intro.svg";

export const IntroBanner = styled.div`
  position: absolute;

  height: 400px;
  width: 100%;
  left: 0;

  filter: blur(50px);
  background-image: url(${backgroundIntro});
  background-size: cover;
  z-index: -1;
`;

export const IntroContainer = styled.section`
  padding: 0 0 5.75rem 0;
  width: 100%;
  gap: 56px;
  margin-top: 5.875rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
  }

  p {
    padding-top: 1rem;
    font-size: 20px;
    line-height: 130%;
  }
`;
interface IntroItensProps {
  variant?: "yellow-dark" | "yellow" | "purple" | "gray";
}
export const IntroItens = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);

  padding-top: 2.875rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  color: white;

  p {
    color: gray;
  }
`;

export const Icon = styled.span<IntroItensProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  ${(props) =>
    props.variant === "yellow" &&
    css`
      background: ${(props) => props.theme.yellow};
    `}
  ${(props) =>
    props.variant === "yellow-dark" &&
    css`
      background: ${(props) => props.theme["yellow-dark"]};
    `}
    ${(props) =>
    props.variant === "purple" &&
    css`
      background: ${(props) => props.theme.purple};
    `}
    ${(props) =>
    props.variant === "gray" &&
    css`
      background: ${(props) => props.theme["gray-700"]};
    `}
`;
