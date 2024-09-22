import { formatPrice } from "../../../../../utils/helpers";
import style from "./Card.module.css";
import { CartButtons } from "../../../../../shared";

type TProps = {
  img: string;
  title: string;
  count: number;
  price: number;
  total: number;
  onRemove: () => void;
  onAdd: () => void;
  onDelete: () => void;
};

export const PlusIcon = () => (
  <svg
    width="31"
    height="30"
    viewBox="0 0 31 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15.6726" cy="15" r="15" fill="#FFCE7F" />
    <path
      d="M14.6726 14V8H16.6726V14H22.6726V16H16.6726V22H14.6726V16H8.67261V14H14.6726Z"
      fill="white"
    />
  </svg>
);

export const MinusIcon = () => (
  <svg
    width="31"
    height="30"
    viewBox="0 0 31 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15.4111" cy="15" r="15" fill="#FFCE7F" />
    <path d="M8.41113 14H22.4111V16H8.41113V14Z" fill="white" />
  </svg>
);

export const TrashIcon = () => (
  <svg
    width="18"
    height="17"
    viewBox="0 0 18 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.689 3.4H17.939V5.1H16.239V16.15C16.239 16.3754 16.1494 16.5916 15.99 16.751C15.8306 16.9104 15.6144 17 15.389 17H3.48896C3.26353 17 3.04733 16.9104 2.88792 16.751C2.72852 16.5916 2.63896 16.3754 2.63896 16.15V5.1H0.938965V3.4H5.18896V0.85C5.18896 0.624566 5.27852 0.408365 5.43792 0.248959C5.59733 0.0895533 5.81353 0 6.03896 0H12.839C13.0644 0 13.2806 0.0895533 13.44 0.248959C13.5994 0.408365 13.689 0.624566 13.689 0.85V3.4ZM14.539 5.1H4.33896V15.3H14.539V5.1ZM10.6409 10.2L12.1437 11.7028L10.9418 12.9047L9.43897 11.4019L7.93617 12.9047L6.73426 11.7028L8.23707 10.2L6.73426 8.6972L7.93617 7.4953L9.43897 8.9981L10.9418 7.4953L12.1437 8.6972L10.6409 10.2ZM6.88897 1.7V3.4H11.989V1.7H6.88897Z"
      fill="#DF6464"
    />
  </svg>
);

export const Card = ({
  img,
  title,
  count,
  price,
  total,
  onRemove,
  onDelete,
  onAdd,
}: TProps) => {
  return (
    <div className={style.card}>
      <div className={style.card_left}>
        <img className={style.img} src={img} alt={title} />
        <CartButtons count={count} onAdd={onAdd} onRemove={onRemove} />
      </div>
      <div className={style.card_middle}>
        <h4>{title}</h4>
        <span>{formatPrice(price)}</span>
      </div>
      <div className={style.card_right}>
        <button className={style.delete_button} onClick={onDelete}>
          <TrashIcon />
        </button>
        <div>{`${formatPrice(total)}`}</div>
      </div>
    </div>
  );
};
