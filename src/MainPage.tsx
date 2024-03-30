import style from './css/ItemCards.module.css'
import {RateIcon} from './IconData'
import { headphones_regular, headphones_wireless } from './data/items';

const headphones_reg = headphones_regular.map((element) => (
  <div className={style.item}>
    <div className={style.pic_wrapper}>
      <img src={element.img} className={style.pic} alt={element.title}/>
    </div>
    <div className={style.group_wrapper}>
      <h4>{element.title}</h4>
      <div className={style.prod_price}>{element.price}</div>
      <div className={style.rate_wrapper}>
        <RateIcon />
        {/* <div className={style.ico_rate}/> */}
        <div className={style.rate}>{element.rate}</div> 
      </div>
        <button type="button" className={style.buy_button}>Купить</button>
    </div>
  </div>
))

const headphones_wirls = headphones_wireless.map((element) => (
  <div className={style.item}>
    <div className={style.pic_wrapper}>
      <img src={element.img} className={style.pic} alt={element.title}/>
    </div>
    <div className={style.group_wrapper}>
      <h4>{element.title}</h4>
      <div className={style.prod_price}>{element.price}</div>
      <div className={style.rate_wrapper}>
        <RateIcon />
        {/* <div className={style.ico_rate}/> */}
        <div className={style.rate}>{element.rate}</div> 
      </div>
        <button type="button" className={style.buy_button}>Купить</button>
    </div>
  </div>
))

function MainPage() {
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Наушники</h2>
    <div className={style.item_wrapper}>
      {headphones_reg}
    </div>
    <h2 className={style.title}>Беспроводные наушники</h2>
    <div className={style.item_wrapper}>
      {headphones_wirls}
    </div>
    </div>
  );
}

export default MainPage