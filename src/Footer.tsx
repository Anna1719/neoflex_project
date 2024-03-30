import Logo from './Logo'
import {Link} from "react-router-dom";
import { LanguageIcon, TGIcon, VKIcon, WAppIcon } from './IconData';
import style from "./css/Footer.module.css";

// Линки кроме корзины не прописаны, но как их сделать понятно

function Footer () {
  return (
    <div className={style.wrapper}>
      <Logo/>
      <div className={style.footer_links}>
        <div className={style.link}>Избранное</div>
        <Link to={"/CART"} className={style.link}>Корзина</Link>
        <div className={style.link}>Контакты</div>
      </div>
      <div className={style.footer_links}>
        <div className={style.link}>Условия сервиса</div>
        <div className={style.language}>
            <LanguageIcon />
            <span className={style.rus_lang}>Рус</span>
            <span>Eng</span>
        </div>
      </div>
      <div className={style.footer_social}>
        <VKIcon />
        <TGIcon />
        <WAppIcon />
      </div>
    </div>
    )
}  

export default Footer