import React from "react";
import ThemeButton from "../toggleTheme/ThemeButton.js";
import "./main-container.css";

const MainContainer = ({ isLight, toggleTheme }) => {
  return (
    <div className="main-container">
      <div className="main-info">
        <h1 className="title">MATTHEW BENSON</h1>
        <p className="subtitle">
          {" "}
          Software Developer & WEB3.0 Enthusiast
        </p>
        <div className="external-buttons">
          <ThemeButton onClick={toggleTheme} isLight={isLight} />
          <div
            className="button"
            id={isLight ? "github-dark" : "github-light"}
            onClick={() => window.open("https://github.com/MattMBenson")}
          ></div>
          <div
            className="button"
            id={isLight ? "linkedin-dark" : "linkedin-light"}
            onClick={() => window.open("https://www.linkedin.com/in/matthew-benson-59b1a31b7/")}
          ></div>
          <div
            className="button"
            id={isLight ? "instagram-dark" : "instagram-light"}
            onClick={() => window.open("https://www.instagram.com/matt.bens/")}
          ></div>
          <div
            className="button"
            id={isLight ? "resume-dark" : "resume-light"}
            onClick={() => window.open("https://drive.google.com/file/d/1WVK5eF3nseDBj1jLfQEi7IKXLiKW6p1d/view?usp=sharing")}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
