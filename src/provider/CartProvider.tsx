/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

export type CartItem = {
    id:number;
    img:string;
    title:string;
    price:number;
    rate:number;
    count:number;
}

type IContext = {
    cart:CartItem[];
    addItem:(item:CartItem)=>void;
    deleteOneItem: (item: CartItem) => void;
    deleteItem: (item: CartItem) => void;
}

export const cartContext = createContext(null as unknown as IContext)

const getInitialState = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
};

// export const getCartLength = (items:IContext) =>{
//   const cartLength = 0;

//   items.cart.map((item) => (
//     cartLength += item.count
//   ))
// }

const CartProvider = ({children}:{children:React.ReactNode}) => {

    const [cart, setCart] = useState<CartItem[]>(getInitialState)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);

    const addItem = (item:CartItem) => {

        const element_index = cart.findIndex((element) => element.id === item.id);

        if (element_index === -1) {
            const new_item = { ...item };
            new_item.count += 1;
      
            setCart([...cart, new_item]);
          } 
        else {
            const new_cart = [...cart];
            new_cart[element_index].count += 1;
            setCart(new_cart);
          }
      
    };

    const deleteOneItem = (item: CartItem) => {
        const element_index = cart.findIndex((element) => element.id === item.id);
        const new_cart = [...cart];
        if (new_cart[element_index].count !== 1) {
          new_cart[element_index].count -= 1;
          setCart(new_cart);
        } 
        else {
          setCart((cart) => [
            ...cart.filter((item: CartItem) => item.id !== item.id),
          ]);
        }
    }; 

    const deleteItem = (entire_item: CartItem) => {
        setCart((cart) => [
          ...cart.filter((item: CartItem) => item.id !== entire_item.id),
        ]);
    };

    return(
        <cartContext.Provider value={{cart, addItem, deleteOneItem, deleteItem}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider