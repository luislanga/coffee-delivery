import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 4rem;
  border-radius: 6px;
  font-family: "Roboto";
`;

export const BoxTitle = styled.div`
  .icon {
    color: ${(props) => props.theme.purple};
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

export const PaymentMethodButton = styled.button.attrs(props => ({
    className: props.className
}))`
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1.6rem;
    color: ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme["base-button"]};
    font-size: 1.6rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    span{
        color: ${(props) => props.theme["base-text"]};
        text-transform: uppercase;
        font-size: 1.2rem;
        font-family: 'Roboto';
        line-height: 100%;
        white-space: nowrap;
    }

    &:hover{
        background-color: ${(props) => props.theme["base-hover"]};
    }

    &.selected{
        background-color: ${(props) => props.theme["purple-light"]};
        outline: 1px solid ${(props) => props.theme.purple}
    }
`

export const PaymentOptions = styled.div`
    display: flex;
    gap: 1.2rem;
`