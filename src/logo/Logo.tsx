import {Link} from "react-router-dom";
import style from "./Logo.module.css";

function Logo() {
  return (
    <Link className={style.link} to="/">
      <h1 className={style.logo}>QPICK</h1>
    </Link>
  )
}

export default Logo
