import { Button } from "../../components/Button/Button";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section id="Contact" className={styles.contact}>
      <div className={`wrapper ${styles.wrapper}`}>
        <div className={styles.form}>
          <h3>Get in Touch</h3>
          <form>
            <div className={styles.formControl}>
              <label htmlFor="Name">Your Name</label>
              <input
                type="text"
                name=""
                id="Name"
                placeholder="ex. Jim Carrey"
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="Email">Your Email</label>
              <input
                type="email"
                name=""
                id="Email"
                placeholder="ex. your.email@example.com"
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="Message">Your Message</label>
              <textarea
                name=""
                id="Message"
                placeholder="Let's talk about..."
              ></textarea>
            </div>
            <div className={styles.submit}>
              <Button href="#" text="Submit" buttonClass="primary" />
            </div>
          </form>
        </div>
        <div className={styles.textbox}>
          <h3 className="heading">Contact Me</h3>
          <p>
            I'd love to work with you. Get in touch with me, let's schedule a
            meeting, and talk about your project.
          </p>
          <div className={styles.extra}>
            <span>
              Location:&nbsp;<i>Varna, Bulgaria</i>
            </span>
            <span>
              Email:&nbsp;
              <a href="mailto:me@nikolaynikolaev.com">
                <i>me@nikolaynikolaev.com</i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
