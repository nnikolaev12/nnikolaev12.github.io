import styles from "./About.module.scss";

const About = () => {
  return (
    <section id="About" className={`${styles.about} wrapper`}>
      <div className={styles.main}>
        <div className={styles.image}>
          <img
            src="/assets/img/about-nick.png"
            alt="Nick Nikolaev - WordPress Developer"
          />
        </div>
        <div className={styles.intro}>
          <span className="subheading">About</span>
          <h2 className="heading">Web developer, SEO Expert & Entrepreneur</h2>
          <p>
            I loved computers since I was a kid and I've build my first website
            in high school. My passion for the web continued to unravel, and
            nowadays I am fully employed in the IT sector. I am helping
            businesses with their web goals, growing my own projects, and do
            what I really love - working with interesting and challenging
            technologies.
          </p>
          <div className={styles.social}>
            <a href="https://www.linkedin.com/in/nikolay-nikolaev-78992268/">
              <img
                width="30"
                height="30"
                src="/assets/icons/linkedin.svg"
                alt="LinkedIn icon"
              />
            </a>
            <a href="https://github.com/nnikolaev12">
              <img
                width="30"
                height="30"
                src="/assets/icons/github.svg"
                alt="GitHub icon"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <span className="heading">10+</span>
          <span>Years of experience</span>
        </div>
        <div className={styles.box}>
          <span className="heading">100+</span>
          <span>Projects completed</span>
        </div>
        <div className={styles.box}>
          <span className="heading">1M+</span>
          <span>Lines of code written</span>
        </div>
      </div>
      <div className={styles.services}>
        <div>
          <span className="subheading">services</span>
          <h2 className="heading">How can I help with your business</h2>
          <p>
            I am trying to help your business the best I can and in order to do
            that I try to understand your needs and goals precisely.
          </p>
          <img src="/assets/img/services.png" alt="What I offer" />
        </div>
        <div>
          <ol>
            <li>
              <span>
                <strong>Full-Stack Development</strong> - WordPress, Laravel,
                React
              </span>
            </li>
            <li>
              <span>
                <strong>Digital Marketing</strong> - SEO, Analytics, UX
              </span>
            </li>
            <li>
              <span>
                <strong>Education</strong> - Consulatation, Training, and
                Mentoring
              </span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default About;
