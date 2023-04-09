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

const Skills = () => {
  const [skillCardAnimation, setSkillCardAnimation] = useState(false);
  const [skillIconAnimation, setSkillIconAnimation] = useState(false);

  const animationFunctions = {
    skillCard: setSkillCardAnimation,
    skillIcon: setSkillIconAnimation,
  };

  const observer = createObserver(animationFunctions);

  useEffect(() => {
    observeElements(".skills-animation", observer);
  });

  return (
    <Box className="skills" id="skills">
      <Container className="skills-container">
        <Typography id="skillsHeading" className="skills-heading" variant="h3">
          Skills
        </Typography>

        <div className="skill-card-container">
          <Zoom in={skillCardAnimation} timeout={400}>
            <div
              id="skillCard"
              className="skill-card-animation-wrapper skills-animation"
            >
              <SkillCard
                iconElement={<LaptopMacIcon />}
                headingText="Front-end"
                animationFunction={skillIconAnimation}
                animationTimeout={500}
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

          <Zoom in={skillCardAnimation} timeout={600}>
            <div
              id="skillCard"
              className="skill-card-animation-wrapper skills-animation"
            >
              <SkillCard
                iconElement={<SettingsIcon />}
                headingText="Back-end"
                animationFunction={skillIconAnimation}
                animationTimeout={700}
                skills={["Python", "Django", "Django Rest Framework"]}
              />
            </div>
          </Zoom>

          <Zoom in={skillCardAnimation} timeout={800}>
            <div
              id="skillCard"
              className="skill-card-animation-wrapper skills-animation"
            >
              <SkillCard
                iconElement={<BugReportIcon />}
                headingText="Tests"
                animationFunction={skillIconAnimation}
                animationTimeout={900}
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
