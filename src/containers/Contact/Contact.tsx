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
            Let's carve out some time to chat, swap ideas, and talk about
            potential collaboration. After all, building something truly
            remarkable requires more than just technical prowess - it requires
            teamwork and a shared vision.
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
