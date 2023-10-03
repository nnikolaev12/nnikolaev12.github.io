import "./Footer.css";

const Footer = () => {
  return (
    <section id="Footer" className="wrapper footer">
      <div className="footer__main">
        <div className="footer__logo">
          <img
            src="/assets/img/nn-logo.png"
            width="160"
            height="160"
            alt="N2 logo"
          />
          <span>Nick Nikolaev</span>
        </div>
        <div className="footer__menu">
          <ul className="footer__nav">
            <li>
              <a className="footer__nav-link" href="#About">
                About Me
              </a>
            </li>
            <li>
              <a className="footer__nav-link" href="#Portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="footer__nav-link" href="#Blog">
                Blog
              </a>
            </li>
            <li>
              <a className="footer__nav-link" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
          <ul className="footer__social">
            <li>
              <a href="https://www.linkedin.com/in/nikolay-nikolaev-78992268/">
                <img
                  width="30"
                  height="30"
                  src="/assets/icons/linkedin.svg"
                  alt="LinkedIn icon"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/nnikolaev12">
                <img
                  width="30"
                  height="30"
                  src="/assets/icons/github.svg"
                  alt="GitHub icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>Copyright © 2022 Nikolay Nikolaev. All Rights Reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
