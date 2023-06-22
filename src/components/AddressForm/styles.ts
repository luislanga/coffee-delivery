import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 4rem;
  border-radius: 6px;
  font-family: "Roboto";
`;

export const FormTitle = styled.div`
  .icon {
    color: ${(props) => props.theme["yellow-dark"]};
    font-size: 2.2rem;
  }
  display: flex;
  gap: 0.8rem;
  line-height: 130%;
  margin-bottom: 3.2rem;
  h3 {
    font-size: 1.6rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 400;
  }
  span {
    font-size: 1.4rem;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const FormFields = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    input{
        background-color: ${(props) => props.theme["base-input"]};
        border: 1px solid ${(props) => props.theme["base-button"]};
        border-radius: 4px;
        padding: 1.2rem;
        font-size: 1.4rem;
        font-family: 'Roboto';
        line-height: 130%;
    }

    .shortInput{
        width: 20rem;
    }

    .tinyInput{
        width: 6rem;
    }

    .lined{
        display: flex;
        gap: 1.2rem;
    }

    .grownInput{
        flex: 1;
    }
`
