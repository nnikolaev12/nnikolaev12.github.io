import { Button } from "../../components/Button/Button";
import styles from "./Blog.module.scss";

const Blog = () => {
  return (
    <section
      id="Blog"
      className={styles.blog}
      style={{ backgroundImage: "url('/assets/img/blog-background.png')" }}
    >
      <div className="wrapper">
        <div className={styles.headings}>
          <span className="subheading">Blog</span>
          <h2 className="heading">Latest Write-ups</h2>
        </div>
        <div className={styles.button}>
          <Button href="#" buttonClass="outline-dark" text="Explore More" />
        </div>
      </div>
    </section>
  );
};

export default Blog;
