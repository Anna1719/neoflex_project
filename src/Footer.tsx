import Logo from './Logo'
import {Link} from "react-router-dom";
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
            <div className={style.language_icon}/>
            <span className={style.rus_lang}>Рус</span>
            <span>Eng</span>
        </div>
      </div>
      <div className={style.footer_social}>
        <div className={style.vk_icon}/>
        <div className={style.telegram_icon}/>
        <div className={style.ws_icon}/>
      </div>
    </div>
    )
}  

export default Footer