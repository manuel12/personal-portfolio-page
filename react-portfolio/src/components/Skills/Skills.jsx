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
                skills={[
                  "Figma",
                  "Dribble",
                  "HMTL",
                  "CSS",
                  "Bootstrap",
                  "React",
                  "Font Awesome",
                  "MaterialUI",
                  "ChartJS",
                ]}
              />
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
                skills={["Python", "Django", "Django Rest Framework"]}
              />
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
                skills={[
                  "JS",
                  "Cypress",
                  "Cypress Image Snapshot",
                  "Python",
                  "Unittest",
                  "PyTest",
                ]}
              />
            </div>
          </Zoom>
        </div>
      </Container>
    </Box>
  );
};

export default Skills;
