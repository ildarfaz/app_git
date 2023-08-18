import { FC } from "react";
import styles from "./button.module.scss";

type TButton = {
  children: JSX.Element | string;
  onClick: () => void;
  active?: boolean;
  isDisabled?: boolean;
}
export const Button: FC<TButton> = ({ children, onClick, active, isDisabled = false }) => {
  return (
    <div className={styles.box}>
      <button className={active ? styles.active : ''}
        onClick={onClick}
        disabled={isDisabled}>{children}</button>
    </div>

  )

}