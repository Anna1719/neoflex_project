import { ReactNode, useEffect, useRef } from "react";
import { ReactPortal } from "../../../components/reactPortal";

type TProps = { open: boolean; children: ReactNode; onClose: () => void };

import style from "./Modal.module.css";

export const Modal = ({ open, onClose, children }: TProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current!.contains(e.target as HTMLDivElement)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return document.removeEventListener("mousedown", (e) => handleClick(e));
  }, []);

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      {open && (
        <div className={style.modal_container}>
          <div ref={modalRef} className={style.modal}>
            <button className={style.close} onClick={onClose}>
              &times;
            </button>

            {children}
          </div>
        </div>
      )}
    </ReactPortal>
  );
};
