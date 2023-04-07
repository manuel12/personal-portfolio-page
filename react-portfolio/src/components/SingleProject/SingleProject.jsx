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
    <div className="single-project-container">
      <Typography className="project-title" variant="h3" textAlign="left">
        {projectTitle}
      </Typography>
      <div className="content">
        <img className="project-image" src={projectImageUrl} alt="" />

        <Typography className="project-description" textAlign="left">
          {projectDescription}
        </Typography>

        <Typography textAlign="left">
          Front-end: HMTL, CSS, JS, Bootstrap.
        </Typography>
        <Typography textAlign="left">Back-end: Python, Django.</Typography>
        <Typography textAlign="left">
          Automated Tests: JS, Cypress, Cypress Image Snapshot.
        </Typography>
      </div>
    </div>
  );
};

export default SingleProject;
