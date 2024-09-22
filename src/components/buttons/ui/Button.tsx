import cn from "classnames";
import style from "./Button.module.css";

type TProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export const Button = ({ className, ...rest }: TProps) => {
  return (
    <button {...rest} className={cn(style.checkout_button, className)}></button>
  );
};