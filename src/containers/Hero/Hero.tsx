import { Button } from "../../components/Button/Button";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: "url('/assets/img/hero-background.png')" }}
    >
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.content}>
          <div>
            <span>&#47;&#47; Web Development</span>
            <span>&#47;&#47; Digital Marketing</span>
          </div>
          <h1>Hi, let's elevate your online presence</h1>
          <p>
            In today's fast-paced digital landscape, having a website that not
            only looks good but also performs like a well-oiled machine is
            non-negotiable. Let's chat and talk about your business needs.
          </p>
          <div className={styles.buttons}>
            <Button href="#About" buttonClass="primary" text="Learn More" />
            <Button
              href="#Contact"
              buttonClass="outline-dark"
              text="Contact Me"
            />
          </div>
        </div>
        <div className={styles.image}>
          <img
            src="/assets/img/nick.png"
            alt="Nick Nikolaev - Web Developer & SEO Expert"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
