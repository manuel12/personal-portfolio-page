import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import Zoom from "@mui/material/Zoom";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { createObserver, observeElements } from "../../helpers/helpers";
import "./styles.css";

const Contact = () => {
  const [contactHeadingAnimation, setContactHeadingAnimation] = useState(false);
  const [socialIconsAnimation, setSocialIconsAnimation] = useState(false);
  const [contactQuestionAnimation, setContactQuestionAnimation] =
    useState(false);
  const [contactFormAnimation, setContactFormAnimation] = useState(false);

  const animationFunctions = {
    contactHeading: setContactHeadingAnimation,
    socialIcon: setSocialIconsAnimation,
    contactForm: setContactFormAnimation,
    contactQuestion: setContactQuestionAnimation,
  };

  const observer = createObserver(animationFunctions);

  useEffect(() => {
    observeElements(".contact-animation", observer);
  });

  return (
    <Box class="contact" id="contact">
      <Container class="contact-container">
        <div className="contact-card">
          <Zoom in={contactHeadingAnimation} timeout={1200}>
            <Typography
              variant="h3"
              id="contactHeading"
              className="contact-heading contact-animation"
            >
              Contact
            </Typography>
          </Zoom>

          <div class="icon-section">
            <Zoom in={socialIconsAnimation} timeout={2000}>
              <a
                href="mailto:manuelpinedacabeza.com"
                target="_blank"
                id="socialIcon"
                className="contact-animation"
              >
                <div class="icon-container">
                  <EmailIcon />
                </div>
              </a>
            </Zoom>
            <Zoom in={socialIconsAnimation} timeout={2500}>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                id="socialIcon"
                className="contact-animation"
              >
                <div class="icon-container">
                  <LinkedInIcon />
                </div>
              </a>
            </Zoom>
            <Zoom in={socialIconsAnimation} timeout={3000}>
              <a
                href="https://github.com/manuel12"
                target="_blank"
                id="socialIcon"
                className="contact-animation"
              >
                <div class="icon-container">
                  <GitHubIcon />
                </div>
              </a>
            </Zoom>
          </div>

          <Zoom in={contactQuestionAnimation} timeout={1500}>
            <Typography
              variant="body1"
              id="contactQuestion"
              className="contact-heading contact-animation"
            >
              Do you want to work together?
            </Typography>
          </Zoom>

          <Box component="form" id="contactForm" className="contact-animation">
            <Zoom in={contactFormAnimation} timeout={1800}>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name..."
              />
            </Zoom>
            <Zoom in={contactFormAnimation} timeout={2200}>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your email..."
              />
            </Zoom>
            <Zoom in={contactFormAnimation} timeout={2600}>
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
              ></textarea>
            </Zoom>
            <Zoom in={contactFormAnimation} timeout={3000}>
              <button type="submit" class="submit-btn">
                Submit
              </button>
            </Zoom>
          </Box>
        </div>
      </Container>
    </Box>
  );
};

export default Contact;