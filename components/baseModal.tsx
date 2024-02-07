import { title } from "process";
import { FC, ReactElement, ReactNode, useState } from "react";
import { Button, Text } from "../share/styles";
import styles from "@/styles/BaseModal.module.css";

interface ComponnetProps {
  title: string;
  show: Boolean;
  children: ReactElement;
  // childrean?: ReactNode;
  handleClose: () => void;
  modalSubmit: () => void;
}

const BaseModal: FC<ComponnetProps> = ({
  show,
  handleClose,
  children,
  title,
  modalSubmit
}) => {
  return (
    <>
      {show && (
        <div className={styles.modalShadow}>
          <div className={styles.modal}>
            <div className={styles.headerContent}>
              <Text fontSize="25px">{title}</Text>
              <span onClick={handleClose} className={styles.closeIcon}>
                &#x2715;
              </span>
            </div>
            <div className={styles.contentModal}>{children}</div>
            <div className={styles.footerModal}>
              <Button
                backgroundColor="#000000"
                color="white"
                type="submit"
                className="rounded-0  w-100"
                onClick={modalSubmit}
              >
                انتخاب
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BaseModal;
