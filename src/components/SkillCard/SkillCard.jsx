import React from "react";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";

import "./styles.css";

const SkillCard = ({
  iconElement,
  headingText,
  animationFunction,
  animationTimeout,
  skills,
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

        <ul className="skill-list">
          {skills.map((skill) => {
            return (
              <Typography className="skill-text-section-content" key={skill}>
                <li className="single-skill">
                  {skill}
                </li>
              </Typography>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;
