import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 3.2rem 0;

  display: flex;
  justify-content: space-between;
`;

export const HeaderLocation = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;

  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};

  padding: 0.8rem;
  border-radius: 6px;

  font-size: 1.4rem;
  line-height: 130%;
  font-family: "Roboto";
  font-weight: 400;

  svg {
    color: ${(props) => props.theme.purple};
    font-size: 18px;
  }
`;

export const HeaderCart = styled.a`
  display: flex;
  align-items: center;

  padding: 0.8rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  position: relative;

  span{
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme.white};

    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.2rem;
  }

`;

export const HeaderNav = styled.nav`
    display: flex;
    gap: 1.2rem;
    align-items: center;
`
