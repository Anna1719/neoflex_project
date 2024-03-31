import { ReactNode } from "react";
import style from "./ItemsNumber.module.css";

type TProps = {
  children: ReactNode;
  count: number;
};

export const ItemsNumber = ({ children, count }: TProps) => {
  return (
    <div className={style.wrapper}>
      {children}
      {/* считает неправильно, функцию надо в провайдере написать */}
      {count && count > 0 ? <span className={style.count}>{count}</span> : null} 
    </div>
  );
};
