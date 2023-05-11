import React from "react";
import Typography from "@mui/material/Typography";
import { Grow } from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

import technologies from "../../data/technologies";
import "./styles.css";

const SingleProject = ({
  projectId,
  projectAnimationClass,
  projectAnimation,
  projectName,
  projectTechnologies,
  projectImageUrl,
  projectDescription,
  frontend,
  backend,
  automatedTest,
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
            <img
              className='project-image desktop-image'
              src={projectImageUrl}
              alt=''
            />
            <img
              className='project-image mobile-image'
              src={
                "https://user-images.githubusercontent.com/4129325/221216763-897b1481-2626-4b24-ab2c-ce424d24a51f.png"
              }
              alt=''
            />
          </div>
        </Grow>
        <Grow in={projectAnimation} timeout={900}>
          <Typography className='project-description' textAlign='left'>
            {projectDescription}
          </Typography>
        </Grow>
        <table>
          <tr>
            <td>
              <Typography textAlign='left'>Front-end:</Typography>
            </td>
            <td>
              {frontend ? (
                <CheckIcon className='checkbox-icon' />
              ) : (
                <HorizontalRuleIcon className='not-present-icon' />
              )}
            </td>
          </tr>
          <tr>
            <td>
              <Typography textAlign='left'>Back-end:</Typography>
            </td>
            <td>
              {backend ? (
                <CheckIcon className='checkbox-icon' />
              ) : (
                <HorizontalRuleIcon className='not-present-icon' />
              )}
            </td>
          </tr>
          <tr>
            <td>
              <Typography textAlign='left'>Automated Tests: </Typography>
            </td>
            <td>
              {automatedTest ? (
                <CheckIcon className='checkbox-icon' />
              ) : (
                <HorizontalRuleIcon className='not-present-icon' />
              )}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default SingleProject;
