import { Logo } from "../../index"
import { Link } from "react-router-dom";

import style from "./Footer.module.css";
import { PlanetIcon, TGIcon, VIberIcon, VKIcon } from "../../../icons";

export enum ROUTES {
  FAVOURITES = "favourites",
  CART = "cart",
  CONTACTS = "contacts",
  TOS = "tos",
  PRODUCT = "product",
}

export const Footer = () => {
  return (
    <footer className={style.wrapper}>
      <Logo />

      <ul className={style.list}>
        <li className={style.listItem}>
          <Link className={style.link} to={ROUTES.FAVOURITES}>
            Избранное
          </Link>
        </li>
        <li className={style.listItem}>
          <Link className={style.link} to={ROUTES.CART}>
            Корзина
          </Link>
        </li>
        <li className={style.listItem}>
          <Link className={style.link} to={ROUTES.CONTACTS}>
            Контакты
          </Link>
        </li>
      </ul>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link className={style.link} to={ROUTES.TOS}>
            Условия сервиса
          </Link>
        </li>
        <li className={style.listItem}>
          <div className={style.language}>
            <PlanetIcon />
            <span>Рус</span> <span>Eng</span>
          </div>
        </li>
      </ul>

      <div className={style.socials}>
        <Link target="_blank" to="https://vk.ru">
          <VKIcon />
        </Link>
        <Link target="_blank" to="https://t.me/seniorFront">
          <TGIcon />
        </Link>
        <Link target="_blank" to="viber://pa?chatURI=medcentersvet_new">
          <VIberIcon />
        </Link>
      </div>
    </footer>
  );
};
