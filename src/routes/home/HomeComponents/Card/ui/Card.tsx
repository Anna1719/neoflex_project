/* eslint-disable @typescript-eslint/no-explicit-any */
import { Img } from "../../../../../components";
import { StarIcon } from "../../../../../icons";
import { Link } from "react-router-dom";

import style from "./Card.module.css";
import { formatPrice } from "../../../../../utils/helpers";
import { ROUTES } from "../../../../../components/footer/ui/Footer";

type TProps = {
  img: string;
  title: string;
  price: number;
  rate: number;
  addToCart: (arg: any) => void;
  numberInCart?: number;
  id: number;
};

export const Rating = ({ rate }: { rate: number }) => (
  <span className={style.card_rate}>
    <StarIcon />
    {rate}
  </span>
);

export const Card = ({
  img,
  title,
  price,
  rate,
  addToCart,
  numberInCart,
  id,
}: TProps) => {
  return (
    <Link className={style.card} to={`${ROUTES.PRODUCT}/${id}`}>
      <Img className={style.card_image} src={img} />
      <div className={style.card_bottom}>
        <div className={style.card_bottom_row1}>
          <h4 className={style.card_title}>{title}</h4>
          <span className={style.card_price}>{formatPrice(price)}</span>
        </div>
        <div className={style.card_bottom_row2}>
          <Rating rate={rate} />
          <button
            type="button"
            className={style.card_buttton}
            onClick={addToCart}
          >
            {numberInCart ? `В корзине ${numberInCart} +` : "Купить"}
          </button>
        </div>
      </div>
    </Link>
  );
};
