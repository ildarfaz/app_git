import { FC } from "react";
import styles from "./button.module.scss";

type IButton = {
  children: JSX.Element | string;
  onClick: () => void;
  active?: boolean;
  isDisabled?: boolean;
}
export const Button: FC<IButton> = ({ children, onClick, active, isDisabled = false }) => {
  return (
    <div className={styles.box}>
      <button className={active ? styles.active : ''}
        onClick={onClick}
        disabled={isDisabled}>{children}</button>
    </div>

  )

}