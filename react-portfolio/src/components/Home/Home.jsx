import React from "react";
import "./styles.css";

const Home = () => {
  return (
    <>
      <section class="welcome-section" id="welcome-section">
        <div class="about-container">
          <h1 class="about-heading">
            Manuel Pineda
            <br />
            Front-end, <br class="about-line-break" />
            Back-end & Test Developer
          </h1>

          <p class="about-text">
            Hi! I'm Manuel. How are you doing? I love all sides of programing
            web apps, from the backend, to frontend and testing.
            <br />
            I've done each. I believe in being able to build all parts of an
            application in order to fully understand how it works.
            <br />
            <br />
            In my free time I enjoy reading, running and photography.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
