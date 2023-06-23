import styled from "styled-components";

export const Container = styled.div`
  padding: 0.8rem 0.4rem;
  display: flex;
  justify-content: space-between;
  img {
    height: 6.4rem;
    width: 6.4rem;
  }
  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 1.6rem;
    font-family: "Roboto";
    font-weight: 700;
    line-height: 130%;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  gap: 2rem;
`;

export const AdderContainer = styled.div`
  background-color: ${(props) => props.theme["base-button"]};
  padding: 0.8rem;
  display: flex;
  width: 7.2rem;
  height: 3.2rem;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  border-radius: 6px;
  font-size: 1.6rem;
  font-family: "Roboto";

  button {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.purple};
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

export const CardControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  span {
    font-size: 16px;
    font-family: Roboto;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const CardButtons = styled.div`
  display: flex;
  gap: 0.8rem;

  .remove {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1.6rem;
    padding: 0.65rem;
    border: none;
    color: ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme["base-button"]};
    border-radius: 6px;
    cursor: pointer;
    span {
      font-size: 1.2rem;
      font-family: "Roboto";
      text-transform: uppercase;
      color: ${(props) => props.theme["base-text"]};
    }

    &:hover {
      background-color: ${(props) => props.theme["base-hover"]};
    }
  }
`;
