import { useState } from "react";
import Button from "../Button";
import MobileMenu from "../MobileMenu";

import "./Header.css";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    isMobileOpen ? setIsMobileOpen(false) : setIsMobileOpen(true);
  };

  return (
    <div className="wrapper header">
      <div className="header__menu">
        <div className="header__logo">
          <img
            src="/assets/img/nn-logo.png"
            width="80"
            height="80"
            alt="N2 logo"
          />
          <span>Nick Nikolaev</span>
        </div>
        <nav className="header__nav">
          <ul>
            <li>
              <a className="header__nav-link" href="#About">
                About Me
              </a>
            </li>
            <li>
              <a className="header__nav-link" href="#Portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="header__nav-link" href="#Blog">
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__cta">
          <Button href="#Contact" classes="btn-outline" text="Contact Me" />
        </div>
        <div className="header__open-mobile-menu">
          <button onClick={toggleMobileMenu}>&#9776;</button>
        </div>
      </div>
      <MobileMenu
        isOpen={isMobileOpen}
        toggleMobileMenuHandler={toggleMobileMenu}
      />
    </div>
  );
};

export default Header;
