import { IButtonProps } from "./IButtonProps";
import styles from "./Button.module.scss";

export const Button = (props: IButtonProps) => {
  const { href, text, buttonClass } = props;

  return (
    <a href={href}>
      <button className={`${styles.button} ${styles[buttonClass]}`}>
        {text}
      </button>
    </a>
  );
};
