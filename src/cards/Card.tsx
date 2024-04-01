import style from './ItemCards.module.css'
import {RateIcon} from '../icons/IconData'

interface IProps {
    img:string;
    title:string;
    price:number;
    rate:number;
    count:number;
    onClickHandler:()=> void;
}

export const Card = ({img,title,price,rate,onClickHandler}:IProps) => {
  return (
    <div className={style.item}>
    <div className={style.pic_wrapper}>
      <img src={img} className={style.pic} alt={title}/>
    </div>
    <div className={style.group_wrapper}>
      <h4>{title}</h4>
      <div className={style.prod_price}>{`${price} ₽`}</div>
      <div className={style.rate_wrapper}>
        <RateIcon />
        <div className={style.rate}>{rate}</div> 
      </div>
        <button className={style.buy_button} onClick={onClickHandler}>Купить</button>
    </div>
  </div>
  )
}
