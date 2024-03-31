import { useContext } from "react";
import style from './Checkout.module.css'
import { cartContext } from '../provider/CartProvider';

export const CheckOut = () => {

  const { cart } = useContext(cartContext);

  const getCartPrice = () => {
      return cart.reduce((current, element) => current + element.price * element.count, 0);
  };

  return( 
    <div className={style.checkout}>
      {!cart?.length && (
        <div className={style.empty_checkout}/>
      )
      }
      {cart?.length && (
        <div>
          <div className={style.checkout_top}>
            <div>Итого</div>
            <div>{getCartPrice()}</div>
          </div>
          <button className={style.checkout_button}>Перейти к оформлению</button>
        </div>
      )
      }
    </div>
  );
};