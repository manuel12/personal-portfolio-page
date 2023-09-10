import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";

import { createObserver, observeElements } from "../../helpers/helpers";
import "./styles.css";

const Home = () => {
  const [headingAnimation, setHeadingAnimation] = useState(false);
  const [textAnimation, setTextAnimation] = useState(false);

  const animationFunctions = {
    heading: setHeadingAnimation,
    text: setTextAnimation,
  };

  const observer = createObserver(animationFunctions);

  useEffect(() => {
    observeElements(".home-animation", observer);
  });

  return (
    <>
      <section className='welcome-section'>
        <Container className='home-container'>
          <Zoom in={headingAnimation} timeout={600}>
            <Typography
              textAlign='center'
              variant='h1'
              id='heading'
              className='home-heading home-text-name home-animation'
            >
              Manuel Pineda
            </Typography>
          </Zoom>

          <Zoom in={headingAnimation} timeout={600}>
            <Typography
              textAlign='center'
              variant='h4'
              id='heading'
              className='home-heading home-text-profession home-animation'
            >
              Front-end, <br className='home-line-break' />
              Back-end & QA Engineer
            </Typography>
          </Zoom>
          <Zoom in={textAnimation} timeout={1000}>
            <Typography
              textAlign='center'
              id='text'
              className='home-text-home-me home-animation'
            >
              Hi! I'm Manuel. Although my professional experience is in QA, I
              love all sides of programing web apps, from the backend, to
              frontend and testing. I've done each and I believe in being able
              to build all parts of an application in order to fully understand
              how it works. In my free time I enjoy contributing to open source
              projects, pursuing certifications, reading, running and
              photography.
            </Typography>
          </Zoom>
        </Container>
      </section>
    </>
  );
};

export default Home;
