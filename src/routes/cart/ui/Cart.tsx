import { CartContext, TCartItem } from "../../../provider";
import { useContext } from "react";
import style from "./Cart.module.css";
import { CardsList, Checkout } from "../CartComponents";

export const Cart = () => {
  const { addItem, cart, removeItem, deleteEntireItem } =
    useContext(CartContext);

  const getCartPrice = (cart: TCartItem[]) => {
    return cart.reduce((acc, el) => acc + el.price * el.count, 0);
  };

  return (
    <div className={style.wrapper}>
      {!cart?.length && (
        <div className={style.empty_wrapper}>Ваша корзина пуста</div>
      )}

      {!!cart.length && (
        <div className={style.content}>
          <div className={style.cards_list}>
            <CardsList
              cart={cart}
              onRemove={removeItem}
              onAdd={addItem}
              onDelete={deleteEntireItem}
            />
          </div>
          <div className={style.checkout}>
            <Checkout onCheckout={() => null} total={getCartPrice(cart)} />
          </div>
        </div>
      )}
    </div>
  );
};
