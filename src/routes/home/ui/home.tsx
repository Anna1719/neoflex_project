import { data } from "../../../utils/data";
import style from "./home.module.css";
import { useContext } from "react";
import { CartContext, TCartItem } from "../../../provider";
import { CardsList } from "../HomeComponents/CardsList";

export const HomePage = () => {
  const { addItem, cart } = useContext(CartContext);

  const countNumberInCart = (id: number) =>
    cart.find((item: TCartItem) => item.id === id)?.count;

  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>{data.fisrt_feed.title}</h2>
      <CardsList
        data={data.fisrt_feed.elements}
        addToCart={addItem}
        countNumberInCart={countNumberInCart}
      />

      <h2 className={style.title}>{data.second_feed.title}</h2>
      <CardsList
        data={data.second_feed.elements}
        addToCart={addItem}
        countNumberInCart={countNumberInCart}
      />
    </div>
  );
};
