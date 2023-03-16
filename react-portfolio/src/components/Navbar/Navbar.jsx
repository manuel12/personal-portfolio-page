import React from "react";
import "./styles.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar" id="navbar">
        <button class="hamburger-btn" id="hamburger-btn">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
        <ul class="navbar-list">
          <a class="navbar-link" href="#welcome-section">
            ABOUT
          </a>
          <a class="navbar-link" href="#skills">
            SKILLS
          </a>
          <a class="navbar-link" href="#projects">
            PROJECTS
          </a>
          <a class="navbar-link" href="#contact">
            CONTACT
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
