import style from '../cards/ItemCards.module.css'
import { headphones_regular, headphones_wireless } from '../data/Items';
import { CardsList } from '../cards/CardsList';
import { useContext } from 'react';
import { cartContext } from '../provider/CartProvider';


function MainPage() {

  const {addItem} = useContext(cartContext);

  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Наушники</h2>
      <CardsList data={headphones_regular} onClickHandler={addItem}/>
    <h2 className={style.title}>Беспроводные наушники</h2>
      <CardsList data={headphones_wireless} onClickHandler={addItem}/>
    </div>
  );
}

export default MainPage