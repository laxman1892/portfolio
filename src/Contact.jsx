import { useEffect } from "react";
import "./App.css";
import "./Contact.css";
import ScrollReveal from "scrollreveal";

function Contact() {
  useEffect(() => {
    ScrollReveal().reveal(".contact", {
      delay: 250,
      origin: "left",
      distance: "150px",
      duration: 1000,
    });
    ScrollReveal().reveal(".form", {
      delay: 500,
      origin: "right",
      distance: "150px",
    });
  }, []);

  return (
    <>
      <div className="body-content contact-flex">
        <div className="contact">
          <h1>Let&apos;s work together.</h1>
          <h1>Get in touch.</h1>
          <p>
            I&apos;m currently looking for new opportunities. Whether you have a
            question or just want to say hi, my inbox is always open. I do my
            best to respond within 1-2 working days.
          </p>
        </div>
        <div className="form">
          <form method="post">
            <label htmlFor="name">Your Name</label>
            <span>*</span> <br />
            <input
              type="text"
              name="name"
              placeholder="Your name here..."
              required
            />{" "}
            <br />
            <label htmlFor="email">Your Email</label>
            <span>*</span> <br />
            <input
              type="email"
              name="email"
              placeholder="Your email here..."
              required
            />{" "}
            <br />
            <label htmlFor="message">Your Message</label>
            <span>*</span> <br />
            <textarea
              name="message"
              placeholder="Your message here..."
              required
            ></textarea>{" "}
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
