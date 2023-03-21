import React from "react";
import "./styles.css";

const Skills = () => {
  return (
    <section class="skills" id="skills">
      <div class="skills-container">
        <h1 class="skills-heading">Skills</h1>
        <div class="skill-card-container">
          <div class="skill-card">
            <div class="skill-icon-section">
              <div class="skill-icon-container">
                <i class="fa-solid fa-laptop-code"></i>
              </div>
            </div>
            <div class="skill-text-section">
              <h2 class="skill-text-section-heading">Front-end</h2>
              <p class="skill-text-section-content">
                I've worked with <span class="skill">HTML</span>,
                <span class="skill">CSS</span>,
                <span class="skill">Bootstrap</span>,
                <span class="skill">React</span>,
                <span class="skill">Font Awesome</span>,
                <span class="skill">ChartJS</span> and other technologies. I've
                created both personal and certification projects using all these
                tools. I've also created my own Bootstrap-like library using
                only CSS.
              </p>
            </div>
          </div>
          <div class="skill-card">
            <div class="skill-icon-section">
              <div class="skill-icon-container">
                <i class="fa-solid fa-gears"></i>
              </div>
            </div>
            <div class="skill-text-section">
              <h2 class="skill-text-section-heading">Back-end</h2>
              <p class="skill-text-section-content">
                I've done projects in <span class="skill">Python</span>,
                <span class="skill">Django</span> and
                <span class="skill">DRF</span> and use these to make apps like
                the Expense Tracker, Motivation Vault and Media Ratings.
              </p>
            </div>
          </div>
          <div class="skill-card">
            <div class="skill-icon-section">
              <div class="skill-icon-container">
                <i class="fa-solid fa-bug"></i>
              </div>
            </div>
            <div class="skill-text-section">
              <h2 class="skill-text-section-heading">Tests</h2>
              <p class="skill-text-section-content">
                I have years of experience as QA of a variety of applications
                from web pages, web applications and video games. This includes
                extensive experience creating test suites for web pages and web
                applications, automating testing processes and creating
                functional, UI, API, and Visual tests. For this I currently use
                <span class="skill">JS</span>,<span class="skill">Cypress</span>{" "}
                and
                <span class="skill">Cypress Image Snapshot</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
