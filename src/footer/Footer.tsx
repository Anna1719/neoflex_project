/* eslint-disable react-refresh/only-export-components */
import Logo from '../logo/Logo'
import {Link} from "react-router-dom";
import { LanguageIcon, TGIcon, VKIcon, WAppIcon } from '../icons/IconData';
import style from "./Footer.module.css";

export enum routes {
  LIKES = "likes",
  CART = "cart",
  CONTACTS = "contacts",
  TOS = "tos",
}

function Footer () {
  return (
    <div className={style.wrapper}>
      <Logo/>
      <div className={style.footer_links}>
        <div>
        <Link to={routes.LIKES} className={style.link}>Избранное</Link>
        </div>
        <div>
        <Link to={routes.CART} className={style.link}>Корзина</Link>
        </div>
        <div >
        <Link to={routes.CONTACTS} className={style.link}>Контакты</Link>
        </div>
      </div>
      <div className={style.footer_links}>
        <Link to={routes.TOS} className={style.link}>Условия сервиса</Link>
        <div className={style.language}>
            <LanguageIcon />
            <span className={style.rus_lang}>Рус</span>
            <span>Eng</span>
        </div>
      </div>
      <div className={style.footer_social}>
      <Link className={style.social} target="_blank" to="https://vk.com/neoflex_ru">
          <VKIcon />
        </Link>
        <Link className={style.social} target="_blank" to="https://t.me/neoflexcareers">
          <TGIcon />
        </Link>
        <Link className={style.social} target="_blank" to="https://www.whatsapp.com/">
          <WAppIcon />
        </Link>       
      </div>
    </div>
    )
}  

export default Footer