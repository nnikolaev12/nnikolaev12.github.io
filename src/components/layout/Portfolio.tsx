import "./Portfolio.css";
import PortfolioItems from "../PortfolioItems";

const Portfolio = () => {
  return (
    <section id="Portfolio" className="portfolio">
      <div className="wrapper">
        <span className="subheading">Portfolio</span>
        <h2 className="heading">Latest Work</h2>
        <PortfolioItems count={4} />
      </div>
    </section>
  );
};

export default Portfolio;
