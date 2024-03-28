import Home from './Home'
import style from './css/Header.module.css'
import {Link} from "react-router-dom"

function Header() {
    return (
        <div className={style.header}>
            <Home/>
            <div className={style.icon_wrapper}>
                <div className={style.heart_icon}/>
                <Link to={"/CART"} className={style.cart_icon}></Link>
            </div>
        </div>
    )
}


export default Header