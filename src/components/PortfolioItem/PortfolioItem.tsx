import { IPortfolioItemProps } from "./IPortfolioItemProps";
import styles from "./PortfolioItem.module.scss";

export const PortfolioItem = (props: IPortfolioItemProps) => {
  const { id, title, url, description, thumbnail } = props;

  return (
    <a
      key={id}
      className={styles.item}
      href={url}
      style={{
        backgroundImage: "url('/assets/img/portfolio/" + thumbnail + "')",
      }}
    >
      <li>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </li>
    </a>
  );
};
