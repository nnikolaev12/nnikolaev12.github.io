import styles from "./MobileMenu.module.scss";

interface MobileMenuProps {
  show: boolean;
  toggleMobileMenuHandler: () => void;
}

export const MobileMenu = (props: MobileMenuProps) => {
  const { show, toggleMobileMenuHandler } = props;
  const visibilityClass = show ? "visible" : "hidden";

  return (
    <div className={`${styles.MobileMenu} ${visibilityClass}`}>
      <div className={styles.wrapper}>
        <nav>
          <ul>
            <li>
              <a
                onClick={toggleMobileMenuHandler}
                className={styles.link}
                href="#About"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                onClick={toggleMobileMenuHandler}
                className={styles.link}
                href="#Portfolio"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                onClick={toggleMobileMenuHandler}
                className={styles.link}
                href="#Contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className="button" onClick={toggleMobileMenuHandler}>
          X
        </button>
      </div>
    </div>
  );
};
