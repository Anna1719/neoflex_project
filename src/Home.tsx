import {Link} from "react-router-dom";
import style from "./css/Home.module.css";

function Home() {
  return (
    <Link className={style.link} to="/">
      <h1 className={style.logo}>QPICK</h1>
    </Link>
  )
}

export default Home
