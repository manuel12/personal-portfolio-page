import React from "react";

import "./styles.css";

const ProjectTile = ({ projectUrl, projectName, projectImgSrc }) => {
  // const image = require(projectImgSrc);

  return (
    <div class="project-tile">
      <a href={projectUrl} target="_blank">
        {/* <span>{projectName}</span> */}
        <img src={projectImgSrc} />
      </a>
    </div>
  );
};

export default ProjectTile;
