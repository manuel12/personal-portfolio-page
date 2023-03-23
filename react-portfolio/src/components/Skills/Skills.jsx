import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";

import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SettingsIcon from "@mui/icons-material/Settings";
import BugReportIcon from "@mui/icons-material/BugReport";

import SkillCard from "../SkillCard/SkillCard";
import { createObserver, observeElements } from "../../helpers/helpers";
import "./styles.css";
import "./darkStyle.css";

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
    <Box className="skills" id="skills">
      <Container className="skills-container" maxWidth="lg">
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
                Languages and Technologies I've worked with:
                <br />
                <br />
                Figma
                <br />
                Dribble
                <br />
                HTML
                <br />
                CSS
                <br />
                Bootstrap
                <br />
                React
                <br />
                Font Awesome
                <br />
                MaterialUI
                <br />
                ChartJS
                <br />
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
                Languages and Technologies I've worked with:
                <br />
                <br />
                Python
                <br />
                Django
                <br />
                Django Rest Framework
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
                Languages and Technologies I've worked with: <br />
                <br />
                JS
                <br />
                Cypress
                <br />
                Cypress Image Snapshot
                <br />
                Python
                <br />
                Unittest
                <br />
                PyTest
                <br />
              </SkillCard>
            </div>
          </Zoom>
        </div>
      </Container>
    </Box>
  );
};

export default Skills;
