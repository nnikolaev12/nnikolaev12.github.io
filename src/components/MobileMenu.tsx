import React from "react";
import "./MobileMenu.css";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMobileMenuHandler: () => void;
}

export default class MobileMenu extends React.Component<MobileMenuProps> {
  render() {
    return (
      <div id="MobileMenu" className={this.props.isOpen ? "visible" : "hidden"}>
        <div className="mobile-menu__wrapper">
          <nav className="mobile-menu__nav">
            <ul>
              <li>
                <a
                  onClick={this.props.toggleMobileMenuHandler}
                  className="mobile-menu__nav-link"
                  href="#About"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  onClick={this.props.toggleMobileMenuHandler}
                  className="mobile-menu__nav-link"
                  href="#Portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={this.props.toggleMobileMenuHandler}
                  className="mobile-menu__nav-link"
                  href="#Contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button onClick={this.props.toggleMobileMenuHandler}>X</button>
        </div>
      </div>
    );
  }
}
