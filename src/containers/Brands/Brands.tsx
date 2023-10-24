import { BrandLogo } from "../../components/BrandLogo/BrandLogo";
import styles from "./Brands.module.scss";

const Brands = () => {
  // todo: refactor list of brands to use a map function
  return (
    <section>
      <div className="wrapper">
        <ul className={styles.list}>
          <BrandLogo src="blubito-logo.png" name="Blubito GmbH" />
          <BrandLogo src="sensity-logo.png" name="Sensity AI" />
          <BrandLogo src="upc-logo.png" name="Ultimate Poker Coaching" />
          <BrandLogo src="fs-logo.png" name="Fantastic Services" />
        </ul>
        <div className={styles.divider}></div>
      </div>
    </section>
  );
};

export default Brands;
