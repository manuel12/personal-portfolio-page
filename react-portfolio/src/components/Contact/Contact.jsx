import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { createObserver, observeElements } from "../../helpers/helpers";
import "./styles.css";

const Contact = () => {
  const [contactCardAnimation, setContactCardAnimation] = useState(false);
  const [socialIconsAnimation, setSocialIconsAnimation] = useState(false);
  const [contactQuestionAnimation, setContactQuestionAnimation] =
    useState(false);
  const [contactFormAnimation, setContactFormAnimation] = useState(false);

  const animationFunctions = {
    contactCard: setContactCardAnimation,
    socialIcon: setSocialIconsAnimation,
    contactForm: setContactFormAnimation,
    contactQuestion: setContactQuestionAnimation,
  };

  const observer = createObserver(animationFunctions);

  useEffect(() => {
    observeElements(".contact-animation", observer);
  });

  return (
    <Box className="contact" id="contact">
      <Container className="contact-container">
        <Typography
          variant="h3"
          id="contactHeading"
          className="contact-heading"
        >
          Contact
        </Typography>
        <Zoom in={contactCardAnimation} timeout={600}>
          <div id="contactCard" className="contact-card contact-animation">
            <div className="icon-section">
              <Zoom in={socialIconsAnimation} timeout={700}>
                <a
                  href="mailto:manuelpinedacabeza.com"
                  target="_blank"
                  id="socialIcon"
                  className="contact-animation"
                >
                  <div className="icon-container">
                    <EmailIcon />
                  </div>
                </a>
              </Zoom>
              <Zoom in={socialIconsAnimation} timeout={800}>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  id="socialIcon"
                  className="contact-animation"
                >
                  <div className="icon-container">
                    <LinkedInIcon />
                  </div>
                </a>
              </Zoom>
              <Zoom in={socialIconsAnimation} timeout={900}>
                <a
                  href="https://github.com/manuel12"
                  target="_blank"
                  id="socialIcon"
                  className="contact-animation"
                >
                  <div className="icon-container">
                    <GitHubIcon />
                  </div>
                </a>
              </Zoom>
            </div>

            <Zoom in={contactQuestionAnimation} timeout={600}>
              <Typography
                variant="body1"
                id="contactQuestion"
                className="contact-animation"
              >
                Do you want to work together?
              </Typography>
            </Zoom>

            <Box
              component="form"
              id="contactForm"
              className="contact-animation"
            >
              <Zoom in={contactFormAnimation} timeout={700}>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name..."
                />
              </Zoom>
              <Zoom in={contactFormAnimation} timeout={800}>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your email..."
                />
              </Zoom>
              <Zoom in={contactFormAnimation} timeout={900}>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                ></textarea>
              </Zoom>
              <Zoom in={contactFormAnimation} timeout={1000}>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </Zoom>
            </Box>
          </div>
        </Zoom>
      </Container>
    </Box>
  );
};

export default Contact;
