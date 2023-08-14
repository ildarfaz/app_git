import { FC } from "react";
import styles from "./button.module.scss";

type IButton = {
  children: JSX.Element | string;
  onClick: () => void;
  active?: boolean;
}
export const Button: FC<IButton> = ({ children, onClick, active }) => {
  return (
    <div className={styles.box}>
      <button className={active ? styles.active : ''}
        onClick={onClick}>{children}</button>
    </div>

  )

}