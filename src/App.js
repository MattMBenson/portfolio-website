import React, { useState } from "react";
import "./styles/light-theme.css";
import MainContainer from "./components/main-container/main-container.js";
import CanvasBackground from "./components/svgcanvas/matrix.js";

function App() {
  const [isLight, setIsLight] = useState(true);
  const toggleTheme = () => {
    setIsLight(!isLight);
    console.log("CHANGING THEME!");
  };
  return (
    <div>
      <div className={`${isLight ? "navBar-light" : "navBar-dark"}`}>
        <a className="navHeading" href="#root">
          WORK
        </a>
        <a className="navHeading" href="#root">
          CONTACT
        </a>
      </div>
      <div className={`${isLight ? "App-light" : "App-dark"}`}>
        <CanvasBackground isLight={isLight} />
        <MainContainer isLight={isLight} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default App;
