/* eslint-disable @typescript-eslint/no-unused-vars */
import { cartContext } from '../provider/CartProvider';
import { useContext } from "react";
import style from "./Cart.module.css";

export const Cart = () => {

  const { cart, addItem, deleteOneItem, deleteItem } =
    useContext(cartContext);

  const getCartPrice = () => {
    return cart.reduce((current, element) => current + element.price * element.count, 0);
  };

  return (
    <div className={style.wrapper}>
      {!cart?.length && (
        <div className={style.empty_wrapper}>"Корзина пуста"</div>
      )}
      <div className={style.content}>
        <div className={style.cards_list}>
          {cart.map((cart_item) => (
            <div className={style.card}>
              <div>
                <img
                  className={style.img}
                  src={cart_item.img}
                  alt={cart_item.title}
                />
                <div className={style.buttons}>
                  <button onClick={() => deleteOneItem(cart_item)}>-</button>
                  <span>{cart_item.count}</span>
                  <button onClick={() => addItem(cart_item)}>+</button>
                </div>
              </div>
              <div>
                <h4>{cart_item.title}</h4>
                <span>{cart_item.price}</span>
              </div>
              <div>
                <button onClick={() => deleteItem(cart_item)}>Удалить товар</button>                
                <div>{`${cart_item.price * cart_item.count} ₽`}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={style.checkout}>
          <div className={style.checkout_top}>
            <div>Итого</div>
            <div>{getCartPrice()}</div>
          </div>
          <button className={style.checkout_button}>Перейти к оформлению</button>
        </div>
      </div>
    </div>
  );
};
