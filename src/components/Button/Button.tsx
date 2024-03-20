import { IButtonProps } from "./IButtonProps";
import styles from "./Button.module.scss";

export const Button = (props: IButtonProps) => {
  const { onClick, text, buttonClass } = props;

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[buttonClass]}`}
    >
      {text}
    </button>
  );
};
