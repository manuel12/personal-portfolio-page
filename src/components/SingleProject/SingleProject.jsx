import React from "react";
import Typography from "@mui/material/Typography";
import { Grow } from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

import technologies from "../../data/technologies";
import "./styles.css";

const SingleProject = ({
  projectId,
  projectAnimation,
  projectAnimationClass,
  projectData,
}) => {
  const projectName = projectData.projectName;
  const projectRepoUrl = projectData.projectRepoUrl;
  const projectLiveDemoUrl = projectData.projectLiveDemoUrl;
  const projectTechnologies = projectData.projectTechnologies;
  const projectImageUrl = projectData.projectImgSrc;
  const projectMobileImageUrl = projectData.projectMobileImgSrc;
  const projectDescription = projectData.projectDesc;
  const frontend = projectData.frontend;
  const backend = projectData.backend;
  const automatedTest = projectData.automatedTest;

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
        <div class='technologies-container'>
          {projectTechnologies.map((technology, i) => {
            const timeout = 500 + (i + 1) * 100;
            return (
              <Grow in={projectAnimation} timeout={timeout}>
                <img
                  src={technologies[technology]}
                  title={technology}
                  alt={technology}
                  width='40'
                  height='40'
                />
              </Grow>
            );
          })}
        </div>
        <Grow in={projectAnimation} timeout={800}>
          <div className='images-container'>
            <div className='desktop-image-container'>
              <span>Desktop</span>
              <img
                className='project-image desktop-image'
                src={projectImageUrl}
                alt=''
              />
            </div>
            <div className='mobile-image-container'>
              <span>Mobile</span>
              <img
                className='project-image mobile-image'
                src={projectMobileImageUrl}
                alt=''
              />
            </div>
          </div>
        </Grow>
        <Grow in={projectAnimation} timeout={800}>
          <div className='app-stack'>
            <span>
              <Typography textAlign='left'>Front-end:</Typography>{" "}
              {frontend ? (
                <CheckIcon className='checkbox-icon' />
              ) : (
                <HorizontalRuleIcon className='not-present-icon' />
              )}
            </span>
            <span>|</span>
            <span>
              {" "}
              <Typography textAlign='left'> Back-end:</Typography>{" "}
              {backend ? (
                <CheckIcon className='checkbox-icon' />
              ) : (
                <HorizontalRuleIcon className='not-present-icon' />
              )}
            </span>
            <span>|</span>
            <span>
              {" "}
              <Typography textAlign='left'>Automated Tests: </Typography>{" "}
              {automatedTest ? (
                <CheckIcon className='checkbox-icon' />
              ) : (
                <HorizontalRuleIcon className='not-present-icon' />
              )}
            </span>
          </div>
        </Grow>
        <Grow in={projectAnimation} timeout={1000}>
          <div className='project-urls'>
            <a href={projectRepoUrl}>Github Repository</a>
            {projectLiveDemoUrl && <span className='separator'> | </span>}
            {projectLiveDemoUrl && <a href={projectLiveDemoUrl}>Live Demo</a>}
          </div>
        </Grow>
        <Grow in={projectAnimation} timeout={900}>
          <Typography className='project-description' textAlign='left'>
            {projectDescription}
          </Typography>
        </Grow>
      </div>
    </div>
  );
};

export default SingleProject;
