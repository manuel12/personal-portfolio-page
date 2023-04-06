import React, { useState } from "react";
import Typography from "@mui/material/Typography";

import "./styles.css";

const SingleProject = ({
  textOnTheRight,
  projectTitle,
  projectImageUrl,
  projectDescription,
}) => {
  return (
    <div>
      <Typography className="project-title" variant="h3">
        {projectTitle}
      </Typography>
      <div className="single-project-container">
        <div className="left-side">
          <div className="image-container">
            <img className="project-image" src={projectImageUrl} alt="" />
          </div>
        </div>
        <div className="right-side">
          <Typography className="project-description" textAlign="left">
            {projectDescription}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
