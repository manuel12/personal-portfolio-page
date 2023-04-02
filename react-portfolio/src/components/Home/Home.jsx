import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
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
    observeElements(".about-animation", observer);
  });

  return (
    <>
      <Box className="welcome-section" id="about">
        <Container className="about-container">
          <Zoom in={headingAnimation} timeout={600}>
            <Typography
              textAlign="center"
              variant="h3"
              id="heading"
              className="about-heading about-animation"
            >
              Manuel Pineda
              <br />
              Front-end, <br class="about-line-break" />
              Back-end & Test Developer
            </Typography>
          </Zoom>
          <Zoom in={textAnimation} timeout={1000}>
            <Typography
              variant="h6"
              id="text"
              className="about-text about-animation"
            >
              Hi! I'm Manuel. How are you doing? I love all sides of programing
              web apps, from the backend, to frontend and testing.
              <br />
              I've done each. I believe in being able to build all parts of an
              application in order to fully understand how it works.
              <br />
              <br />
              In my free time I enjoy reading, running and photography.
            </Typography>
          </Zoom>
        </Container>
      </Box>
    </>
  );
};

export default Home;
