import { useForm, ValidationError } from "@formspree/react";
import styles from "./ContactForm.module.scss";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xgejdzrp");

  if (state.succeeded) {
    return (
      <div className={styles.success}>
        <p>Thanks for contacting! I will get back to you in no time.</p>
      </div>
    );
  }

  return (
    <div className={styles.form}>
      <h3>Get in Touch</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.formControl}>
          <label htmlFor="Name">Your Name</label>
          <input
            type="text"
            name="name"
            id="Name"
            placeholder="ex. Jim Carrey"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="Email">Your Email</label>
          <input
            type="email"
            name="email"
            id="Email"
            placeholder="ex. your.email@example.com"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="Message">Your Message</label>
          <textarea
            name="message"
            id="Message"
            placeholder="Let's talk about..."
            required
          ></textarea>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className={styles.submit}>
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
