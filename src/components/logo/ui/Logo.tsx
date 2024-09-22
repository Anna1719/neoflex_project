import {Link} from "react-router-dom";
import style from "./Logo.module.css";

export const Logo = () => {
  return (
    <Link className={style.link} to="/">
      <h1 className={style.logo}>QPICK</h1>
    </Link>
  );
};
