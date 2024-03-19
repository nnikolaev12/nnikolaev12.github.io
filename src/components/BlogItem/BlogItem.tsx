import { IBlogItemProps } from "./IBlogItemProps";
import styles from "./BlogItem.module.scss";
import { formatDate } from "../../Helper";

export const BlogItem = (props: IBlogItemProps) => {
  const { title, slug, date, description, thumbnail } = props;

  return (
    <li className={styles.item}>
      <a href={`/blog/${slug}`}>
        <div
          className={styles.thumbnail}
          style={{
            backgroundImage: "url('/assets/img/blog/" + thumbnail + "')",
          }}
        ></div>
        <div className={styles.text}>
          <h3>{title}</h3>
          <time dateTime={date}>{formatDate(date)}</time>
          <p>{description}</p>
        </div>
      </a>
    </li>
  );
};
