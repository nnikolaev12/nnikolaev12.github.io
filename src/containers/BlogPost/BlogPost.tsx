import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";
import { formatDate } from "../../Helper";
import blogPosts from "../Blog/blog-posts.json";
import styles from "./BlogPost.module.scss";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.posts.find((post) => post.slug === slug);
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [slug]);

  const createMarkup = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div className={`${styles.post} wrapper`}>
      <h1 className={styles.heading}>{post?.title}</h1>
      <div className={styles.info}>
        <span>
          Published on{" "}
          <time dateTime={post?.date}>{formatDate(post?.date)}</time>
        </span>
        <span>
          Last updated on{" "}
          <time dateTime={post?.lastmod}>{formatDate(post?.lastmod)}</time>
        </span>
      </div>
      <div className={styles.thumbnail}>
        <img
          src={`/assets/img/blog/${post?.thumbnail}`}
          alt={post?.title}
          className={styles.image}
        />
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={createMarkup()}
      />
    </div>
  );
};

export default BlogPost;
