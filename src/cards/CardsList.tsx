/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from './Card';
import style from './ItemCards.module.css'
import { CartItem } from '../provider/CartProvider';



interface IProps {
  data: any;
  onClickHandler:(arg:CartItem)=> void;
}

export const CardsList = ({ data, onClickHandler }: IProps) => {
  return (
    <div className={style.item_wrapper}>
      {data.map((element: any) => (
        <Card key={element.id} img={element.img} title={element.title} price={element.price} rate={element.rate} count={element.count} onClickHandler={()=>onClickHandler(element)}/>
      ))}
    </div>
  )
}
