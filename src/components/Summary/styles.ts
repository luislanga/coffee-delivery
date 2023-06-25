import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${(props) => props.theme["purple-dark"]};
  border-radius: 6px 36px;
  padding: 4rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  font-size: 16px;
  font-family: Roboto;
  line-height: 130%;
  color: ${(props) => props.theme["base-text"]};
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  div {
    display: flex;
    flex-direction: column;
  }
`;
