import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  width: 25.6rem;
  position: relative;

  img {
    width: 12rem;
    height: 12rem;
    position: absolute;
    top: -2rem;
  }

  .tags {
    margin-top: 11.2rem;
  }
`;

export const Tag = styled.span`
  text-transform: uppercase;
  padding: 0.4rem 0.8rem;
  border-radius: 50px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 130%;
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 1.6rem 0 3.3rem;

  line-height: 130%;
  h3 {
    font-family: "Baloo 2";
    font-size: 20px;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-family: "Roboto";
    font-size: 14px;
    color: ${(props) => props.theme["base-label"]};
    text-align: center;
  }
`;

export const ShopItem = styled.div`
  display: flex;
  gap: 2.3rem;
  font-family: "Roboto";
  font-size: 1.4rem;
  .price {
    font-family: "Baloo 2";
    font-size: 2.5rem;
    margin-left: 0.3rem;
  }
`;

export const ItemAdder = styled.div`
  display: flex;
  gap: .8rem;

  .addToCart{
    background-color: ${(props) => props.theme["purple-dark"]};
    color: ${(props) => props.theme.white};
    padding: .8rem;
    font-size: 2rem;
    border: none;
    border-radius:6px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.8rem;
    width: 3.8rem;
    cursor: pointer;
  }
  `

export const AdderContainer = styled.div`
  background-color: ${(props) => props.theme["base-button"]};
  padding: .8rem;
  display: flex;
  align-items: center;
  gap: .4rem;
  border-radius: 6px;
  font-size: 1.6rem;
  font-family: 'Roboto';
  
  button{
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.purple};
    display: flex;
    align-items: center;
    cursor: pointer;
  }

`
