/* eslint-disable @typescript-eslint/no-explicit-any */
import { SyntheticEvent, useState } from "react";
import classNames from "classnames";

import style from "./CheckoutForm.module.css";
import { Button } from "../../../components";

type TInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  classname?: string;
};

const Input = ({ className, ...rest }: TInputProps) => (
  <input {...rest} className={classNames(style.input, className)} />
);

export const CheckoutForm = () => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (e: SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(JSON.stringify(formValues));
  };

  return (
    <div className={style.wrapper}>
      <h2>Оплата</h2>
      <form onSubmit={handleSubmit} className={style.form}>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <Input
          type="number"
          pattern="[0-9]*"
          inputMode="numeric"
          name="pan"
          placeholder="Card Number"
          onChange={handleChange}
        />
        <div className={style.row}>
          <Input
            type="number"
            name="exp"
            placeholder="Exp Date"
            onChange={handleChange}
          />
          <Input
            type="number"
            name="cvv"
            placeholder="CVV"
            onChange={handleChange}
          />
        </div>
        <Button className={style.button} type="submit">
          Оформить
        </Button>
      </form>
    </div>
  );
};
