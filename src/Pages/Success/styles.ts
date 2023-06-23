import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 8rem;

  .SuccessInfo {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .SuccessTitle {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    h1 {
      font-size: 3.2rem;
      font-family: "Baloo 2";
      font-weight: 800;
      line-height: 130%;
      color: ${(props) => props.theme["yellow-dark"]};
    }

    p {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 2rem;
      font-family: "Roboto";
      line-height: 130%;
    }
  }
`;
