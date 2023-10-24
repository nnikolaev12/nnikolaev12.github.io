import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <section id="Footer" className={`${styles.footer} wrapper`}>
      <div className={styles.main}>
        <div className={styles.logo}>
          <img
            src="/assets/img/nn-logo.png"
            width="160"
            height="160"
            alt="N2 logo"
          />
          <span>Nick Nikolaev</span>
        </div>
        <div className={styles.menu}>
          <ul className={styles.nav}>
            <li>
              <a href="#About">About Me</a>
            </li>
            <li>
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#Blog">Blog</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
          <ul className={styles.social}>
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
      <div className={styles.copyright}>
        <p>
          Copyright © {new Date().getFullYear()} Nikolay Nikolaev. All Rights
          Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
