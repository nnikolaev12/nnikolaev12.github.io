import "./Blog.css";
import Button from "../Button";

const Blog = () => {
  return (
    <section
      id="Blog"
      className="blog"
      style={{ backgroundImage: "url('/assets/img/blog-background.png')" }}
    >
      <div className="wrapper">
        <div className="blog__headings">
          <span className="subheading">Blog</span>
          <h2 className="heading">Latest Write-ups</h2>
        </div>
        <div className="blog__button">
          <Button
            href="#contact"
            classes="btn-outline-dark"
            text="Explore More"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
