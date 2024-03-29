import { useState } from "react";
import { NavLink } from "../../components/NavLink/NavLink";
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
              <NavLink title="About" to="/" hash="About" />
            </li>
            <li>
              <NavLink title="Portfolio" to="/" hash="Portfolio" />
            </li>
            <li>
              <NavLink title="Blog" to="/" hash="Blog" />
            </li>
          </ul>
        </nav>
        <div className={styles.cta}>
          <NavLink title="Contact" to="/" hash="Contact" />
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
