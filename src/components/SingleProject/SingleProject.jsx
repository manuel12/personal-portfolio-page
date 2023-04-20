import React from "react";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";

import "./styles.css";

const SingleProject = ({
  projectId,
  projectAnimationClass,
  projectAnimation,
  projectName,
  projectImageUrl,
  projectDescription,
  frontendSkills,
  backendSkills,
  automatedTestSkills,
}) => {
  return (
    <div
      id={projectId}
      className={`single-project-container ${projectAnimationClass}`}
    >
      <Grow in={projectAnimation} timeout={700}>
        <Typography className='project-title' variant='h3' textAlign='left'>
          {projectName}
        </Typography>
      </Grow>

      <div className='content'>
        <Grow in={projectAnimation} timeout={800}>
          <img className='project-image' src={projectImageUrl} alt='' />
        </Grow>
        <Grow in={projectAnimation} timeout={900}>
          <Typography className='project-description' textAlign='left'>
            {projectDescription}
          </Typography>
        </Grow>
        <Grow in={projectAnimation} timeout={1000}>
          <Typography textAlign='left'>
            Front-end: {frontendSkills && `${frontendSkills.join(", ")}.`}
          </Typography>
        </Grow>
        <Grow in={projectAnimation} timeout={1000}>
          <Typography textAlign='left'>
            Back-end: {backendSkills && `${backendSkills.join(", ")}.`}
          </Typography>
        </Grow>
        <Grow in={projectAnimation} timeout={1000}>
          <Typography textAlign='left'>
            Automated Tests:{" "}
            {automatedTestSkills && `${automatedTestSkills.join(", ")}.`}
          </Typography>
        </Grow>
      </div>
    </div>
  );
};

export default SingleProject;
