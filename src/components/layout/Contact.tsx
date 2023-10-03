import "./Contact.css";
import Button from "../Button";

const Contact = () => {
  return (
    <section id="Contact" className="contact">
      <div className="wrapper">
        <div className="contact__form">
          <h3>Get in Touch</h3>
          <form>
            <div className="contact__form-control">
              <label htmlFor="Name">Your Name</label>
              <input
                type="text"
                name=""
                id="Name"
                placeholder="ex. Jim Carrey"
              />
            </div>
            <div className="contact__form-control">
              <label htmlFor="Email">Your Email</label>
              <input
                type="email"
                name=""
                id="Email"
                placeholder="ex. your.email@example.com"
              />
            </div>
            <div className="contact__form-control">
              <label htmlFor="Message">Your Message</label>
              <textarea
                name=""
                id="Message"
                placeholder="Let's talk about..."
              ></textarea>
            </div>
            <div className="contact__form-submit">
              <Button href="#" text="Submit" classes="btn-primary" />
            </div>
          </form>
        </div>
        <div className="contact__textbox">
          <h3 className="heading">Contact Me</h3>
          <p>
            I'd love to work with you. Get in touch with me, let's schedule a
            meeting, and talk about your project.
          </p>
          <div className="contact__extra">
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
