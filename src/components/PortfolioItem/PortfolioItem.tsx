import { IPortfolioItemProps } from "./IPortfolioItemProps";
import styles from "./PortfolioItem.module.scss";

export const PortfolioItem = (props: IPortfolioItemProps) => {
  const { title, url, description, thumbnail } = props;

  return (
    <li
      className={styles.item}
      style={{
        backgroundImage: "url('/assets/img/portfolio/" + thumbnail + "')",
      }}
    >
      <a href={url}>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </li>
  );
};
