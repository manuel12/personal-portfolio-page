import React from "react";
import "./styles.css";

const Contact = () => {
  return (
    <section class="contact" id="contact">
      <div class="contact-container">
        <h1>Contact</h1>
        <p>Do you want to work together?</p>
        <form>
          <input id="name" type="text" name="name" placeholder="Your name..." />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email..."
          />
          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
          ></textarea>
          <input type="submit" class="submit-btn" />
        </form>
        <div class="icon-section">
          <a href="mailto:manuelpinedacabeza.com" target="_blank">
            <div class="icon-container">
              <i class="fa-regular fa-envelope"></i>
            </div>
          </a>
          <a href="https://www.linkedin.com/" id="profile-link" target="_blank">
            <div class="icon-container">
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </a>
          <a href="https://github.com/manuel12" target="_blank">
            <div class="icon-container">
              <i class="fa-brands fa-github"></i>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
