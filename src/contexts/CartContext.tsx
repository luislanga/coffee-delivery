import { createContext, useState, useEffect } from "react";

export interface CartItem {
  amount: number;
  id: number;
  price: number;
}

interface CartContextProviderProps {
  children: React.ReactNode;
}

interface CartContextType {
  cart: CartItem[];
  cartTotal: number;
  addToCart: (amount: number, id: number, price: number) => void;
  removeFromCart: (id: number) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [toggle, setToggle] = useState<boolean>(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);

  function toggleFn() {
    // A mudança de estado provocada por essa função está sendo usada para acionar useEffect em casos onde seria necessário deep compare
    setToggle((prev) => !prev);
  }

  function addToCart(amount: number, id: number, price: number) {
    const containsId: number = cart.findIndex((item) => item.id === id);

    if (containsId > -1) {
      const auxCart: CartItem[] = cart;
      auxCart[containsId].amount = auxCart[containsId].amount + amount;
      setCart(auxCart);
    } else setCart((prev) => [...prev, { amount, id, price }]);

    toggleFn();
  }

  function removeFromCart(id: number) {
    const auxCart: CartItem[] = cart;
    const filteredAuxCart: CartItem[] = auxCart.filter(
      (item) => item.id !== id
    );
    setCart(filteredAuxCart);
  }

  useEffect(() => {
    let cartValueSum = 0;
    cart.map((item) => {
      cartValueSum = cartValueSum + item.price * item.amount;
    });
    setCartTotal(cartValueSum);
  }, [cart, toggle]);

  return (
    <CartContext.Provider
      value={{ cart, cartTotal, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
