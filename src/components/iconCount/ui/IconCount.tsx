import { ReactNode } from "react";
import style from "./IconCount.module.css";

type TProps = {
  children: ReactNode;
  count: number;
};

export const IconCount = ({ children, count }: TProps) => {
  return (
    <div className={style.wrapper}>
      {children}
      {count && count > 0 ? <span className={style.count}>{count}</span> : null}
    </div>
  );
};
