import "./buttons.css";
import React from "react";

function Buttons({ isLight }) {
  return (
    <div className="external-buttons">
      <div
        className="button"
        id={isLight ? "github-dark" : "github-light"}
        onClick={() => window.open("https://github.com/MattMBenson")}
      ></div>
      <div
        className="button"
        id={isLight ? "twitter-dark" : "twitter-light"}
        onClick={() => window.open("https://twitter.com/dzylol")}
      ></div>
      <div
        className="button"
        id={isLight ? "linkedin-dark" : "linkedin-light"}
        onClick={() =>
          window.open("https://www.linkedin.com/in/matthew-benson-59b1a31b7/")
        }
      ></div>
    </div>
  );
}

export default Buttons;
