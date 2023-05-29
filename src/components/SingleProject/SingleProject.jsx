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
  const projectSlug = projectData.projectSlug;
  const projectRepoUrl = projectData.projectRepoUrl;
  const projectLiveDemoUrl = projectData.projectLiveDemoUrl;
  const projectTechnologies = projectData.projectTechnologies;
  const frontend = projectData.frontend;
  const backend = projectData.backend;
  const automatedTest = projectData.automatedTest;
  const projectImageUrl = projectData.projectImgSrc;
  const projectMobileImageUrl = projectData.projectMobileImgSrc;
  const projectDescription = projectData.projectDesc;
  const projectDescriptionContinued = projectData.projectDescContinued;
  const projectFeatures = projectData.projectFeatures;
  const projectScreenshots = projectData.projectScreenshots;

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
        <div className='technologies-container'>
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
                src={
                  process.env.PUBLIC_URL +
                  `/images/${projectSlug}/${projectImageUrl}.png`
                }
                alt=''
              />
            </div>
            <div className='mobile-image-container'>
              <span>Mobile</span>
              <img
                className='project-image mobile-image'
                src={
                  process.env.PUBLIC_URL +
                  `/images/${projectSlug}/${projectMobileImageUrl}.png`
                }
                alt=''
              />
            </div>
          </div>
        </Grow>
        <div className='app-stack-and-urls-section'>
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
        </div>

        {/* <Grow in={projectAnimation} timeout={900}> */}
        <>
          <div className='description-section'>
            <Typography
              textAlign='left'
              variant='h5'
              className='description-heading'
            >
              Description
            </Typography>
            <Typography className='project-description' textAlign='left'>
              {projectDescription}
            </Typography>

            {projectDescriptionContinued.split("<br>").map((descSection) => {
              return (
                <Typography className='project-description' textAlign='left'>
                  {descSection.trim()}
                </Typography>
              );
            })}
          </div>

          {projectFeatures.length ? (
            <div className='features-section'>
              <Typography
                textAlign='left'
                variant='h5'
                className='features-heading'
              >
                Features
              </Typography>
              <ul className='project-features'>
                {projectFeatures.map((features) => {
                  return <li>{features}</li>;
                })}
              </ul>
            </div>
          ) : null}

          {projectScreenshots.length ? (
            <div className='screenshots-section'>
              <Typography
                textAlign='left'
                variant='h5'
                className='features-heading'
              >
                Screenshots
              </Typography>
              <div className='screenshots-container'>
                {projectScreenshots.map((screenshot) => {
                  return (
                    <div className='screenshot'>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          `/images/${projectSlug}/${screenshot}.png`
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </>
        {/* </Grow> */}
      </div>
    </div>
  );
};

export default SingleProject;
