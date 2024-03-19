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
          <h2 className="heading">Web developer and Digital Marketer</h2>
          <p>
            Ever since I was knee-high to a grasshopper, I've been enamored with
            those magical boxes we call computers. I mean, who doesn't love a
            good blinking cursor or the satisfying hum of a cooling fan, am I
            right? It all started back in the days of high school, when I
            cobbled together my first website. Ah, the memories of those late
            nights spent wrestling with HTML and CSS, trying to make that table
            look at least partually decent (yep, websites were build with tables
            back then).
          </p>
          <p>
            Fast forward to today, and here I am, fully entrenched in the wild
            and wonderful world of IT. I guess you could say I'm living the
            dream – getting paid to do what I love, surrounded by interesting
            challenges and cutting-edge technologies. So if you're in need of a
            seasoned web developer with a penchant for problem-solving, look no
            further.
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
          <h2 className="heading">How can I help your business</h2>
          <p>
            I am collaborating with businesses of all shapes and sizes achieve
            their digital dreams. From mom-and-pop shops to multinational
            corporations, I've had the pleasure of lending my expertise to a
            wide array of web-centric endeavors.
          </p>
          <img src="/assets/img/services.png" alt="What I offer" />
        </div>
        <div>
          <ol>
            <li>
              <span>
                <strong>Full-Stack Web Development</strong>
                <br />
                WordPress, Laravel, React
              </span>
            </li>
            <li>
              <span>
                <strong>Digital Marketing</strong>
                <br />
                SEO, Analytics, Social Media, Ads
              </span>
            </li>
            <li>
              <span>
                <strong>Education</strong>
                <br />
                Consulatation, Training, and Mentoring
              </span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default About;
