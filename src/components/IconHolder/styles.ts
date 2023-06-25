import styled from "styled-components";

export type IconVariant = "purple" | "yellow" | "dark-yellow" | "gray";

interface IconContainerProps {
  variant: IconVariant;
}

const buttonVariants = {
  purple: "purple",
  yellow: "yellow",
  gray: "gray",
  ["dark-yellow"]: "dark-yellow",
};

export const IconContainer = styled.div<IconContainerProps>`
  font-size: 1.6rem;
  padding: 0.8rem;
  border-radius: 50%;
  height: 3.2rem;
  width: 3.2rem;
  color: ${(props) => props.theme.white};
  ${(props) => {
    return `background-color: var(--${buttonVariants[props.variant]})`;
  }}
`;
