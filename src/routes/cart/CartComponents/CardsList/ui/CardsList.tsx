import { TCartItem } from "../../../../../provider";
import style from "./CardsList.module.css";
import { Card } from "../..";

type TProps = {
  cart: TCartItem[];
  onRemove: (arg: TCartItem) => void;
  onAdd: (arg: TCartItem) => void;
  onDelete: (arg: TCartItem) => void;
};

export const CardsList = ({ cart, onRemove, onAdd, onDelete }: TProps) => {
  return (
    <div className={style.cards_list}>
      {cart.map((cart_item) => (
        <Card
          key={cart_item.id}
          count={cart_item.count}
          img={cart_item.img}
          price={cart_item.price}
          title={cart_item.title}
          total={cart_item.price * cart_item.count}
          onRemove={() => onRemove(cart_item)}
          onAdd={() => onAdd(cart_item)}
          onDelete={() => onDelete(cart_item)}
        />
      ))}
    </div>
  );
};
