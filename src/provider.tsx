import { createContext, useEffect, useState } from "react";

export type TCartItem = {
  id: number;
  img: string;
  title: string;
  rate: number;
  price: number;
  count: number;
  description: string;
};

type TContext = {
  addItem: (cart_item: TCartItem) => void;
  removeItem: (cart_item: TCartItem) => void;
  cart: TCartItem[];
  deleteEntireItem: (cart_item: TCartItem) => void;
};

type TContextProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext(null as unknown as TContext);

const getInitialState = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const cartContextProvider = ({ children }: TContextProviderProps) => {
  const [cart, setCart] = useState<TCartItem[]>(getInitialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (cart_item: TCartItem) => {
    const element_index = cart.findIndex((el) => el.id === cart_item.id);
    if (element_index === -1) {
      const new_item = { ...cart_item };
      new_item.count += 1;
      setCart([...cart, new_item]);
    } else {
      const new_cart = [...cart];
      new_cart[element_index].count += 1;
      setCart(new_cart);
    }
  };

  const removeItem = (cart_item: TCartItem) => {
    const element_index = cart.findIndex((el) => el.id === cart_item.id);
    const new_cart = [...cart];
    if (new_cart[element_index].count !== 1) {
      new_cart[element_index].count -= 1;
      setCart(new_cart);
    } else {
      setCart((cart) => [
        ...cart.filter((item: TCartItem) => item.id !== cart_item.id),
      ]);
    }
  };

  const deleteEntireItem = (cart_item: TCartItem) => {
    setCart((cart) => [
      ...cart.filter((item: TCartItem) => item.id !== cart_item.id),
    ]);
  };

  return (
    <CartContext.Provider
      value={{ addItem, removeItem, deleteEntireItem, cart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default cartContextProvider;
