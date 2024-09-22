import { MinusIcon, PlusIcon } from "../../../../routes/cart/CartComponents/Card/ui/Card";
import style from "./CartButtons.module.css";

type TProps = { onAdd: () => void; onRemove: () => void; count: number };

export const CartButtons = ({ onAdd, onRemove, count }: TProps) => {
  return (
    <div className={style.buttons}>
      <button onClick={onRemove}>
        <MinusIcon />
      </button>
      <span>{count}</span>
      <button onClick={onAdd}>
        <PlusIcon />
      </button>
    </div>
  );
};
