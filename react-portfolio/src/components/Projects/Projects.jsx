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
  const [projectTilesAnimation, setProjectTilesAnimation] = useState(false);

  const animationFunctions = {
    projectTiles: setProjectTilesAnimation,
  };

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

        <SingleProject
          projectTitle="Expense Tracker"
          projectImageUrl="https://user-images.githubusercontent.com/4129325/221216267-0067eb7d-3be7-4771-a621-92907c10105a.png"
          projectDescription="An Expense Tracker application that can help you track and list expenses, and analyze charts and statistics about them."
        />

        <SingleProject
          projectTitle="Motivation Vault"
          projectImageUrl="https://user-images.githubusercontent.com/4129325/221205796-109b3a7a-a102-46f0-b4f2-3711a883b5fe.png"
          projectDescription="Motivation Vault is an application that hosts optimistic, inspiring, motivational and educational content. It allows user to create, update read and delete such content, along adding comments and ratings for such content."
        />

        <SingleProject
          projectTitle="Media Ratings"
          projectImageUrl="https://user-images.githubusercontent.com/4129325/221217865-d51a9f01-a1d1-438b-86b0-d85acd3d4351.png"
          projectDescription="A Media Ratings application where you can search for the IMDb & Rotten Tomatoes ratings for your favorite series."
        />

        {/* <div id="projectTiles" className="projects-grid projects-animation">
          {projects.map((project, i) => {
            const animTimeout = (i + 1) * 100;
            console.log(animTimeout);
            return (
              <Zoom key={i} in={projectTilesAnimation} timeout={animTimeout}>
                <Box key={i}>
                  <ProjectTile
                    key={i}
                    projectUrl={project.projectUrl}
                    projectName={project.projectName}
                    projectImgSrc={project.projectImgSrc}
                  />
                </Box>
              </Zoom>
            );
          })}
        </div> */}
      </Container>
    </Box>
  );
};

export default Projects;
