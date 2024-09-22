import {useLayoutEffect, useState} from "react";
import cn from "classnames";
import imagePlaceholder from "../assets/placeholder.png";

import style from "./Image.module.css";

interface IProps {
  src: string;
  className?: string;
}

export const Img = ({src, className}: IProps): JSX.Element => {
  const [isValidImg, setIsValidImg] = useState(true);

  const checkImgSrc = (src: string) => {
    const img = new Image();
    img.onload = () => {
      setIsValidImg(true);
    };
    img.onerror = () => {
      setIsValidImg(false);
    };
    img.src = src;
  };

  useLayoutEffect(() => {
    checkImgSrc(src);
  }, [src]);

  return (
    <img
      src={isValidImg ? src : imagePlaceholder}
      alt="Картинка"
      className={cn(style.img, className)}
    />
  );
};
