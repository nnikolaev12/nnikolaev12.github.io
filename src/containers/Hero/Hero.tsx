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
          <h1>Hi, I build scalable and optimized websites</h1>
          <p>
            I can assist you in building a modern website with optimization,
            scalability, and adequate maitenance in mind. Let's talk and see how
            can I help your business.
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
