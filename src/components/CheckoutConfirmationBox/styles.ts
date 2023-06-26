import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;
  padding: 4rem;
  display: flex;
  flex-direction: column;

  > div {
    padding-bottom: 2.4rem;
  }

  div + div {
    padding-top: 2.4rem;
    border-top: 1px solid ${(props) => props.theme["base-button"]};
  }
`;

export const PaymentInfo = styled.div`
  display: grid;
  grid-template-areas:
    "a b"
    "c d"
    "e f"
    "g g";
  justify-content: space-between;
  gap: 1.5rem;
  font-family: "Roboto";
  font-size: 1.4rem;

  p {
    font-weight: 700;
    font-size: 2rem;
  }
`;
export const ConfirmButton = styled.button`
  font-family: "Roboto";
  background-color: ${(props) => props.theme["yellow"]};
  color: ${(props) => props.theme.white};
  width: 100%;
  padding: 1.2rem;
  border: none;
  border-radius: 6px;
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }

  &:disabled {
    background-color: ${(props) => props.theme["base-button"]};
    cursor: default;
  }
`;
