import { ContactForm } from "../../components/ContactForm/ContactForm";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section id="Contact" className={styles.contact}>
      <div className={`wrapper ${styles.wrapper}`}>
        <ContactForm />
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
