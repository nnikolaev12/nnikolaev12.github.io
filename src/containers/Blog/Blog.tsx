import { Button } from "../../components/Button/Button";
import { BlogItem } from "../../components/BlogItem/BlogItem";
import blog from "./blog-posts.json";
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
        <ul className={styles.list}>
          {blog.posts.map((item) => (
            <BlogItem
              key={item.id}
              title={item.title}
              slug={item.slug}
              date={item.date}
              thumbnail={item.thumbnail}
              description={item.description}
            />
          ))}
        </ul>
        {blog.posts.length > 3 && (
          <div className={styles.button}>
            <Button href="#" buttonClass="outline-dark" text="Explore More" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
