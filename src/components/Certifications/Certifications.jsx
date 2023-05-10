import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import CertificationCard from "../CertificationCard/CertificationCard";
import { createObserver, observeElements } from "../../helpers/helpers";
import "./styles.css";

const certifications = [
  {
    name: "Data Visualization",
    "issue-date": "May, 2023",
    url: "https://freecodecamp.org/certification/ManuelPineda/data-visualization",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    "issue-date": "Dec, 2022",
    url: "https://freecodecamp.org/certification/ManuelPineda/javascript-algorithms-and-data-structures",
  },
  {
    name: "Front End Development Libraries",
    "issue-date": "Oct, 2023",
    url: "https://freecodecamp.org/certification/ManuelPineda/front-end-development-libraries",
  },

  {
    name: "Responsive Web Design",
    "issue-date": "Oct, 2022",
    url: "https://freecodecamp.org/certification/ManuelPineda/responsive-web-design",
  },
];

const Certifications = () => {
  const [certificationAnimation, setCertificationAnimation] = useState(false);

  const animationFunctions = {
    certification: setCertificationAnimation,
  };

  const observer = createObserver(animationFunctions);

  useEffect(() => {
    observeElements(".certitications-animation", observer);
  }, [certificationAnimation]);

  return (
    <>
      <section className='certification-section' id='certifications'>
        <Container className='certification-container'>
          <Typography
            variant='h3'
            id='heading'
            className='certifications-heading'
          >
            Certifications
          </Typography>
          <div className='certifications-container'>
            {certifications.map((cert, i) => {
              return (
                <CertificationCard
                  key={`cert-${i}`}
                  name={cert.name}
                  issueDate={cert["issue-date"]}
                  url={cert.url}
                  certificationAnimationClass={"certitications-animation"}
                  certificationAnimation={certificationAnimation}
                  animationTimeout={(i + 1) * 200 + 400}
                />
              );
            })}
          </div>
          <a
            className='medal-icon-attribution'
            href='https://www.flaticon.com/free-icons/gold'
            title='gold icons'
          >
            Gold icons created by Handicon - Flaticon
          </a>
        </Container>
      </section>
    </>
  );
};

export default Certifications;
