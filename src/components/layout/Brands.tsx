import "./Brands.css";
import BrandLogo from "../BrandLogo";

const Brands = () => {
  return (
    <section className="brands">
      <div className="wrapper">
        <ul className="brands__list">
          <BrandLogo src="blubito-logo.png" name="Blubito GmbH" />
          <BrandLogo src="sensity-logo.png" name="Sensity AI" />
          <BrandLogo src="upc-logo.png" name="Ultimate Poker Coaching" />
          <BrandLogo src="fs-logo.png" name="Fantastic Services" />
        </ul>
        <div className="divider"></div>
      </div>
    </section>
  );
};

export default Brands;
