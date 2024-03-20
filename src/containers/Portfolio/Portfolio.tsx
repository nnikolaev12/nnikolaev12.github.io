import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { PortfolioItem } from "../../components/PortfolioItem/PortfolioItem";
import portfolio from "./portfolio.json";
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  const [itemsToShow, setItemsToShow] = useState(4);

  const loadMoreItems = () => {
    setItemsToShow(itemsToShow + 4);
  };

  return (
    <section id="Portfolio" className={styles.portfolio}>
      <div className="wrapper">
        <span className={`${styles.subheading} subheading`}>Portfolio</span>
        <h2 className={`${styles.heading} heading`}>Latest Work</h2>
        <div>
          <ul className={styles.list}>
            {portfolio.items.slice(0, itemsToShow).map((item) => (
              <PortfolioItem
                key={item.id}
                title={item.title}
                url={item.url}
                description={item.description}
                thumbnail={item.thumbnail}
              />
            ))}
          </ul>
          <div className={styles.button}>
            <Button
              onClick={loadMoreItems}
              buttonClass="outline-dark"
              text="Explore more"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
