import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";

import ProjectTile from "../ProjectTile/ProjectTile";
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

        <div id="projectTiles" className="projects-grid projects-animation">
          {projects.map((project, i) => {
            const animTimeout = (i + 1) * 200;
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
        </div>
      </Container>
    </Box>
  );
};

export default Projects;
