import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ProjectTile from "../ProjectTile/ProjectTile";
import projects from "../../data/projects";

import "./styles.css";

const Projects = () => {
  return (
    <Box class="projects" id="projects">
      <Container className="projects-container" maxWidth="lg">
        <Typography variant="h3" className="projects-heading">
          My Projects
        </Typography>
        <div class="projects-grid">
          {projects.map((project) => {
            return (
              <ProjectTile
                key={project.projectName}
                projectUrl={project.projectUrl}
                projectName={project.projectName}
                projectImgSrc={project.projectImgSrc}
              />
            );
          })}
        </div>
      </Container>
    </Box>
  );
};

export default Projects;
