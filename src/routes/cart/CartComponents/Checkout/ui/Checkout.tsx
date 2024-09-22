import { useState } from "react";
import { Button, Modal } from "../../../../../components";
import { formatPrice } from "../../../../../utils/helpers";
import { CheckoutForm } from "../../../../../components/checkoutForm";

import style from "./Checkout.module.css";

type TProps = {
  total: number;
  onCheckout: () => void;
};

export const Checkout = ({ total }: TProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.checkout}>
      <div className={style.checkout_top}>
        <div>Итого</div>
        <div>{formatPrice(total)}</div>
      </div>

      <Button
        type="button"
        className={style.checkout_button}
        onClick={() => setOpen(true)}
      >
        Перейти к оформлению
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <CheckoutForm />
      </Modal>
    </div>
  );
};
