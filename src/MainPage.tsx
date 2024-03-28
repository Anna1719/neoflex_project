import style from './css/MainPage.module.css'
import { headphones } from './data/items'

// Здесь только 6 товаров (проводные наушники),беспроводные отделены хэдером
// Я пыталась для подхэдерной части отдельную функцию прописать, но как это сделать, видимо, не понимаю

// Верстка карточек товаров кривая
// Картинки съезжают при открытии devtools, отступа между ними и текстом нет 

function mainPage() {
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Наушники</h2>
    <div className={style.item_wrapper}>
      {headphones.map((element) => (
        <div className={style.item}>
          <div className={style.pic_wrapper}>
            <img src={element.img} className={style.pic} alt={element.title}/>
          </div>
          <div className={style.group_wrapper}>
            <h4>{element.title}</h4>
            <div className={style.prod_price}>{element.price}</div>
            <div className={style.rate_wrapper}>
              <div className={style.ico_rate}/>
              <div className={style.rate}>{element.rate}</div> 
            </div>
            <button type="button" className={style.buy_button}>Купить</button>
          </div>
        </div>
      ))}
      </div>
      <h2 className={style.title}>Беспроводные наушники</h2>
    </div>
  )
}

export default mainPage