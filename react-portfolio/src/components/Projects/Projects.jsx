import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";

import SingleProject from "../SingleProject/SingleProject";
import projects from "../../data/projects";
import { createObserver, observeElements } from "../../helpers/helpers";

import "./styles.css";

const Projects = () => {
  const animationFunctions = {};

  const observer = createObserver(animationFunctions);

  useEffect(() => {
    observeElements(".projects-animation", observer);
  });

  return (
    <Box className="projects" id="projects">
      <Container className="projects-container">
        <Typography
          variant="h3"
          id="projectsHeading"
          className="projects-heading"
        >
          My Projects
        </Typography>

        {projects.map((project) => {
          return (
            <SingleProject
              projectName={project.projectName}
              projectImageUrl={project.projectImgSrc}
              projectDescription={project.projectName}
              frontendSkills={project.frontendSkills}
              backendSkills={project.backendSkills}
              automatedTestSkills={project.automatedTestSkills}
            />
          );
        })}
      </Container>
    </Box>
  );
};

export default Projects;
