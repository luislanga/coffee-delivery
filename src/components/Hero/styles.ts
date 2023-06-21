import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5.4rem;
  padding: 8.4rem 0 10.8rem;
`;

export const Lettering = styled.div`
  width: 58.8rem;

  margin-bottom: 6.6rem;
  h1 {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 4.8rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
    margin-bottom: 1.6rem;
  }

  p {
    font-family: "Roboto";
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const BulletPointsContainer = styled.div`
  display: grid;
  grid-template-areas:
  "a b"
  "c d";
  max-width: 56.7rem;
  gap: 2rem 4rem;
`;

export const BulletPoint = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  span {
    font-family: "Roboto";
    font-size: 1.6rem;
    line-height: 130%;
  }
`;
