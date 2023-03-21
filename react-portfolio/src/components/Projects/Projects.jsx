import React from "react";
import "./styles.css";

const Projects = () => {
  return (
    <section class="projects" id="projects">
      <div class="projects-container">
        <h1 class="projects-heading">My Projects</h1>
        <div class="projects-grid">
          <div class="project-tile">
            <a
              href="https://github.com/manuel12/django-expense-tracker-public"
              target="_blank"
            >
              <span>Expense Tracker</span>
              <img src="images/expense-tracker.png" />
            </a>
          </div>
          <div class="project-tile">
            <a
              href="https://github.com/manuel12/motivation-vault"
              target="_blank"
            >
              <span>Motivation Vault</span>
              <img src="images/motivation-vault.png" />
            </a>
          </div>

          <div class="project-tile">
            <a href="https://github.com/manuel12/media-ratings" target="_blank">
              <span>Media Ratings</span>
              <img src="images/media-ratings.png" />
            </a>
          </div>
          <div class="project-tile">
            <a
              href="https://github.com/manuel12/custom-css-library"
              target="_blank"
            >
              <span>Custom Library</span>
              <img src="images/custom-library.png" />
            </a>
          </div>
          <div class="project-tile">
            <a
              href="https://github.com/manuel12/technical-documentation-page"
              target="_blank"
            >
              <span>Custom Library - Documentation</span>
              <img src="images/technical-documentation-page.png" />
            </a>
          </div>

          <div class="project-tile">
            <a href="https://github.com/manuel12/landing-page" target="_blank">
              <span>Landing Page</span>
              <img src="images/landing-page.png" />
            </a>
          </div>

          <div class="project-tile">
            <a href="https://github.com/manuel12/quote-project" target="_blank">
              <span>Random Quote Generator</span>
              <img src="images/random-quote-generator.png" />
            </a>
          </div>

          <div class="project-tile">
            <a
              href="https://github.com/manuel12/25-plus-5-clock"
              target="_blank"
            >
              <span>25 + 5 Clock</span>
              <img src="images/25_plus_5_clock.png" />
            </a>
          </div>

          <div class="project-tile">
            <a href="https://github.com/manuel12/js-calculator" target="_blank">
              <span>JS Calculator</span>
              <img src="images/js-calculator.png" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
