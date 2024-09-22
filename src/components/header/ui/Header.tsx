import { IconCount, Logo } from "../../../components";
import style from "./Header.module.css";
import { CartContext } from "../../../provider";
import { CartIcon, HeartIcon } from "../../../icons";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../components/footer/ui/Footer";

export const Header = () => {
  const { cart } = useContext(CartContext);

  const getCartLength = cart.reduce((acc, el) => acc + el.count, 0);

  return (
    <header className={style.header}>
      <Logo />
      <div className={style.headerIcons}>
        <Link to={ROUTES.FAVOURITES}>
          <IconCount count={0}>
            <HeartIcon />
          </IconCount>
        </Link>
        <Link to={ROUTES.CART}>
          <IconCount count={getCartLength}>
            <CartIcon />
          </IconCount>
        </Link>
      </div>
    </header>
  );
};
