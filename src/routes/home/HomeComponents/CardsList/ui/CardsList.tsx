/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "../../Card";

import style from "./CardsList.module.css";

type TProps = {
  data: any;
  addToCart: any;
  countNumberInCart?: any;
};

export const CardsList = ({ data, addToCart, countNumberInCart }: TProps) => {
  return (
    <div className={style.cards_wrapper}>
      {data.map((el: any) => (
        <Card
          key={el.id}
          id={el.id}
          addToCart={(e) => {
            e.preventDefault();
            addToCart(el);
          }}
          img={el.img}
          price={el.price}
          rate={el.rate}
          title={el.title}
          numberInCart={countNumberInCart(el.id)}
        />
      ))}
    </div>
  );
};
