import Button from "../Button";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: "url('/assets/img/hero-background.png')" }}
    >
      <div className="wrapper">
        <div className="hero__text">
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
          <div className="hero__buttons">
            <Button href="#About" classes="btn-primary" text="Learn More" />
            <Button
              href="#Contact"
              classes="btn-outline-dark"
              text="Contact Me"
            />
          </div>
        </div>
        <div className="hero__image">
          <img src="/assets/img/nick.png" alt="Nick Nikolaev - Web Developer" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
