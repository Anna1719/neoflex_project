import Logo from '../logo/Logo'
import { LikeIcon, CartIcon } from '../icons/IconData'
import style from './Header.module.css'
import {Link} from "react-router-dom"
import { useContext } from 'react';
import { cartContext, getCartLength} from '../provider/CartProvider';
import { ItemsNumber } from './items_number/ItemsNumber'
import { routes } from '../footer/Footer';

function Header () {

    const {cart} = useContext(cartContext);


    return (
        <div className={style.header}>
            <Logo/>
            <div className={style.icon_wrapper}>
                <Link to={routes.LIKES} className={style.cart_icon}>
                  <ItemsNumber count={0}>
                    <LikeIcon />
                  </ItemsNumber>  
                </Link>
                <Link to={routes.CART} className={style.cart_icon}>
                  <ItemsNumber count={getCartLength(cart)}>
                    <CartIcon />
                  </ItemsNumber>
                </Link>
            </div>
        </div>
    )
}

export default Header