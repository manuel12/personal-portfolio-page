import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";

import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SettingsIcon from "@mui/icons-material/Settings";
import BugReportIcon from "@mui/icons-material/BugReport";

import { createObserver, observeElements } from "../../helpers/helpers";
import "./styles.css";

const Skills = () => {
  const [skillsHeadingAnimation, setSkillsHeadingAnimation] = useState(false);
  const [skillCardAnimation, setSkillCardAnimation] = useState(false);
  const [skillIconAnimation, setSkillIconAnimation] = useState(false);

  const animationFunctions = {
    skillsHeading: setSkillsHeadingAnimation,
    skillCard: setSkillCardAnimation,
    skillIcon: setSkillIconAnimation,
  };

  const observer = createObserver(animationFunctions);

  useEffect(() => {
    observeElements(".skills-animation", observer);
  });

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <Zoom in={skillsHeadingAnimation} timeout={1200}>
          <Typography
            id="skillsHeading"
            className="skills-heading skills-animation"
            variant="h3"
          >
            Skills
          </Typography>
        </Zoom>

        <div className="skill-card-container">
          <Zoom in={skillCardAnimation} timeout={600}>
            <div
              id="skillCard"
              className="skill-card-animation-wrapper skills-animation"
            >
              <SkillCard
                iconElement={<LaptopMacIcon />}
                headingText="Front-end"
                animationFunction={skillIconAnimation}
                animationTimeout={2200}
              >
                I've worked with <span className="skill">HTML</span>,
                <span className="skill">CSS</span>,
                <span className="skill">Bootstrap</span>,
                <span className="skill">React</span>,
                <span className="skill">Font Awesome</span>,
                <span className="skill">ChartJS</span> and other technologies.
                I've created both personal and certification projects using all
                these tools. I've also created my own Bootstrap-like library
                using only CSS.
              </SkillCard>
            </div>
          </Zoom>

          <Zoom in={skillCardAnimation} timeout={1000}>
            <div
              id="skillCard"
              className="skill-card-animation-wrapper skills-animation"
            >
              <SkillCard
                iconElement={<SettingsIcon />}
                headingText="Back-end"
                animationFunction={skillIconAnimation}
                animationTimeout={2600}
              >
                I've done projects in <span className="skill">Python</span>,
                <span className="skill">Django</span> and
                <span className="skill">DRF</span> and use these to make apps
                like the Expense Tracker, Motivation Vault and Media Ratings.
              </SkillCard>
            </div>
          </Zoom>
          <Zoom in={skillCardAnimation} timeout={1400}>
            <div
              id="skillCard"
              className="skill-card-animation-wrapper skills-animation"
            >
              <SkillCard
                iconElement={<BugReportIcon />}
                headingText="Tests"
                animationFunction={skillIconAnimation}
                animationTimeout={3000}
              >
                I have years of experience as QA of a variety of applications
                from web pages, web applications and video games. This includes
                extensive experience creating test suites for web pages and web
                applications, automating testing processes and creating
                functional, UI, API, and Visual tests. For this I currently use
                <span className="skill">JS</span>,
                <span className="skill">Cypress</span> and
                <span className="skill">Cypress Image Snapshot</span>.
              </SkillCard>
            </div>
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default Skills;

const SkillCard = ({
  iconElement,
  headingText,
  animationFunction,
  animationTimeout,
  children,
}) => {
  return (
    <div className="skill-card">
      <div className="skill-icon-section">
        <Zoom in={animationFunction} timeout={animationTimeout}>
          <div id="skillIcon" className="skill-icon-container skills-animation">
            {iconElement}
          </div>
        </Zoom>
      </div>
      <div className="skill-text-section">
        <Zoom in={animationFunction} timeout={animationTimeout}>
          <Typography
            id="skillIcon"
            className="skill-text-section-heading skills-animation"
            variant="h4"
          >
            {headingText}
          </Typography>
        </Zoom>
        <Typography className="skill-text-section-content">
          {children}
        </Typography>
      </div>
    </div>
  );
};
