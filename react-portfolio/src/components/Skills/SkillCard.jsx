import React from "react";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";

import "./skillCardStyles.css";

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

export default SkillCard;
