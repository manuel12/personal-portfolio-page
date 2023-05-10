import React from "react";
import Zoom from "@mui/material/Zoom";

import "./styles.css";

import medal from "./medal.png";
const CertificationCard = ({
  name,
  issueDate,
  url,
  certificationAnimationClass,
  certificationAnimation,
  animationTimeout,
}) => {
  console.log(`certificationAnimation: ${certificationAnimation}`);

  return (
    <a className='certification-anchor' href={url} target='_blank'>
      <Zoom in={certificationAnimation} timeout={animationTimeout}>
        <div
          id='certification'
          className={`certification-card ${certificationAnimationClass}`}
        >
          <div className='image-container'>
            <img src={medal}></img>
          </div>
          <div className='name-container'>{name}</div>
          <div className='issue-date-container'>Issued: {issueDate}</div>
        </div>
      </Zoom>
    </a>
  );
};

export default CertificationCard;
