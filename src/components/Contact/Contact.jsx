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
    <section className='contact' id='contact'>
      <Container className='contact-container'>
        <Typography
          variant='h3'
          id='contactHeading'
          className='contact-heading'
        >
          Contact
        </Typography>

        <Zoom in={contactCardAnimation} timeout={600}>
          <div id='contactCard' className='contact-card contact-animation'>
            <Zoom in={contactQuestionAnimation} timeout={600}>
              <Typography
                variant='h5'
                id='contactQuestion'
                className='contact-animation'
              >
                Do you want to work together?
              </Typography>
            </Zoom>
            <div className='icon-section'>
              <Zoom in={socialIconsAnimation} timeout={700}>
                <a
                  href='mailto:manuelpinedacabeza.com'
                  target='_blank'
                  rel='noreferrer'
                  id='socialIcon'
                  className='contact-animation'
                >
                  <div className='icon-container'>
                    <EmailIcon />
                  </div>
                </a>
              </Zoom>
              <Zoom in={socialIconsAnimation} timeout={800}>
                <a
                  href='https://www.linkedin.com/in/manuel-pineda-9070aa69/'
                  target='_blank'
                  rel='noreferrer'
                  id='socialIcon'
                  className='contact-animation'
                >
                  <div className='icon-container'>
                    <LinkedInIcon />
                  </div>
                </a>
              </Zoom>
              <Zoom in={socialIconsAnimation} timeout={900}>
                <a
                  href='https://github.com/manuel12'
                  target='_blank'
                  rel='noreferrer'
                  id='socialIcon'
                  className='contact-animation'
                >
                  <div className='icon-container'>
                    <GitHubIcon />
                  </div>
                </a>
              </Zoom>
            </div>
          </div>
        </Zoom>
      </Container>
    </section>
  );
};

export default Contact;
