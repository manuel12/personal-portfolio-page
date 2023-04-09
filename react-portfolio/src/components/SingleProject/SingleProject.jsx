import React from "react";
import Typography from "@mui/material/Typography";

import "./styles.css";

const SingleProject = ({
  projectName,
  projectImageUrl,
  projectDescription,
  frontendSkills,
  backendSkills,
  automatedTestSkills,
}) => { 
  return (
    <div className="single-project-container">
      <Typography className="project-title" variant="h3" textAlign="left">
        {projectName}
      </Typography>
      <div className="content">
        <img className="project-image" src={projectImageUrl} alt="" />

        <Typography className="project-description" textAlign="left">
          {projectDescription}
        </Typography>

        <Typography textAlign="left">
          Front-end: {frontendSkills && `${frontendSkills.join(", ")}.`}
        </Typography>
        <Typography textAlign="left">
          Back-end: {backendSkills && `${backendSkills.join(", ")}.`}
        </Typography>
        <Typography textAlign="left">
          Automated Tests:{" "}
          {automatedTestSkills && `${automatedTestSkills.join(", ")}.`}
        </Typography>
      </div>
    </div>
  );
};

export default SingleProject;
