import { getProductById } from "../../../utils/data";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import style from "./Product.module.css";
import { Button, Img } from "../../../components";
import { CartContext, TCartItem } from "../../../provider";
import { Rating } from "../../../routes/home/HomeComponents/Card/ui/Card";
import { formatPrice } from "../../../utils/helpers";
import { CartButtons } from "../../../shared";

export const ProductPage = () => {
  const [product, setProduct] = useState<TCartItem>();
  const { addItem, removeItem, cart } = useContext(CartContext);
  const { product_id } = useParams();

  const countNumberInCart = (id: number) =>
    cart.find((item: TCartItem) => item.id === id)?.count;

  useEffect(() => {
    if (!product_id) return;

    const product = getProductById(+product_id);

    if (!product?.response) return;

    setProduct(product.response);
  }, [product_id]);

  if (product)
    return (
      <div className={style.wrapper}>
        <Img src={product?.img} />
        <div>
          <div className={style.title_Wrapper}>
            <h2>{product.title}</h2>
            <Rating rate={product.rate} />
          </div>
          <div className={style.priceWrapper}>
            <div className={style.price}>{formatPrice(product.price)}</div>
          </div>
          <div className={style.buttonsWrapper}>
            {countNumberInCart(product.id) && (
              <CartButtons
                count={countNumberInCart(product.id) || 0}
                onAdd={() => addItem(product)}
                onRemove={() => removeItem(product)}
              />
            )}
            <Button className={style.button} onClick={() => addItem(product)}>
              {countNumberInCart(product.id) ? "Добавить еще" : "В корзину"}
            </Button>
          </div>
          <p>{product.description}</p>
        </div>
      </div>
    );
};
