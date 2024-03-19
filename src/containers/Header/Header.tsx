import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { MobileMenu } from "../../components/MobileMenu/MobileMenu";

import styles from "./Header.module.scss";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className={`${styles.header} wrapper`}>
      <div className={styles.menu}>
        <a href="/">
          <div className={styles.logo}>
            <img
              src="/assets/img/nn-logo.png"
              width="80"
              height="80"
              alt="N2 logo"
            />

            <span>
              Nick
              <br />
              Nikolaev
            </span>
          </div>
        </a>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a className={styles.link} href="/#About">
                About Me
              </a>
            </li>
            <li>
              <a className={styles.link} href="/#Portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className={styles.link} href="/#Blog">
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.cta}>
          <Button href="/#Contact" buttonClass="outline" text="Contact Me" />
        </div>
        <div className={styles.openMobileMenu}>
          <button onClick={toggleMobileMenu}>&#9776;</button>
        </div>
      </div>
      <MobileMenu
        show={isMobileOpen}
        toggleMobileMenuHandler={toggleMobileMenu}
      />
    </div>
  );
};

export default Header;
