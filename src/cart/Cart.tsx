/* eslint-disable @typescript-eslint/no-unused-vars */
import { cartContext } from '../provider/CartProvider';
import { useContext } from "react";
import style from "./Cart.module.css";
import { Trashcan } from '../icons/IconData';

export const Cart = () => {

  const { cart, addItem, deleteOneItem, deleteItem } =
    useContext(cartContext);

  const getCartPrice = () => {
    return cart.reduce((current, element) => current + element.price * element.count, 0);
  };

  return (
      <div className={style.wrapper}>
        <h3>Корзина</h3>
      {!cart?.length && (
        <div className={style.empty_wrapper}>Корзина пуста</div>
      )}
      {!!cart?.length && (
        <div className={style.content}>
          <div className={style.cards_list}>
            {cart.map((cart_item) => (
              <div className={style.card}>
                <div>
                  <img
                    className={style.img}
                    src={cart_item.img}
                    alt={cart_item.title} />
                  <div className={style.button_wrapper}>
                    <button className={style.buttons} onClick={() => deleteOneItem(cart_item)}>-</button>
                    <div className={style.count_items}>{cart_item.count}</div>
                    <button className={style.buttons} onClick={() => addItem(cart_item)}>+</button>
                  </div>
                </div>
                <div className={style.item_name_price}>
                  <h4 className={style.item_name}>{cart_item.title}</h4>
                  <span className={style.item_price}>{`${cart_item.price.toLocaleString('ru-RU')} ₽`}</span>
                </div>
                <div className={style.delete_card}>
                  <button className={style.delete_button} onClick={() => deleteItem(cart_item)}>
                    <Trashcan />
                  </button>
                  <div className={style.items_price}>{`${(cart_item.price * cart_item.count).toLocaleString('ru-RU')} ₽`}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={style.checkout}>
            <div className={style.checkout_top}>
              <div>Итого</div>
              <div>{`₽ ${(getCartPrice()).toLocaleString('ru-RU')}`}</div>
            </div>
            <button type="button" className={style.checkout_button}>Перейти к оформлению</button>
          </div>
        </div>
        )}
      </div>
  );
};
