import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import SingleProject from "../SingleProject/SingleProject";
import projects from "../../data/projects";
import { createObserver, observeElements } from "../../helpers/helpers";

import "./styles.css";

const Projects = () => {
  const [projectAnimation1, setProjectAnimation1] = useState(false);
  const [projectAnimation2, setProjectAnimation2] = useState(false);
  const [projectAnimation3, setProjectAnimation3] = useState(false);
  const [projectAnimation4, setProjectAnimation4] = useState(false);
  const [projectAnimation5, setProjectAnimation5] = useState(false);
  const [projectAnimation6, setProjectAnimation6] = useState(false);
  const [projectAnimation7, setProjectAnimation7] = useState(false);

  const projectAnimations = {
    projectAnimation1,
    projectAnimation2,
    projectAnimation3,
    projectAnimation4,
    projectAnimation5,
    projectAnimation6,
    projectAnimation7
  };

  const animationFunctions = {
    project1: setProjectAnimation1,
    project2: setProjectAnimation2,
    project3: setProjectAnimation3,
    project4: setProjectAnimation4,
    project5: setProjectAnimation5,
    project6: setProjectAnimation6,
    project7: setProjectAnimation7,
  };

  const observer = createObserver(animationFunctions);

  useEffect(() => {
    observeElements(".projects-animation", observer);
  }, [projectAnimation1]);

  return (
    <section className='projects' id='projects'>
      <Container className='projects-container'>
        <Typography
          variant='h3'
          id='projectsHeading'
          className='projects-heading'
        >
          My Projects
        </Typography>

        {projects.map((project, i) => {
          return (
            <SingleProject
              key={project}
              projectId={`project${i + 1}`}
              projectAnimation={projectAnimations[`projectAnimation${i + 1}`]}
              projectAnimationClass={"projects-animation"}
              projectData={project}
            />
          );
        })}
      </Container>
    </section>
  );
};

export default Projects;
