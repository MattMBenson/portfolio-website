import React, { useState } from "react";
import "./styles/light-theme.css";
import MainContainer from "./components/main-container/main-container.js";
import CanvasBackground from "./components/svgcanvas/matrix.js";
import Buttons from "./components/external-buttons/Buttons";
import ThemeButton from "./components/toggleTheme/ThemeButton";
import { Link } from "react-router-dom";

function App() {
  const [isLight, setIsLight] = useState(true);
  const toggleTheme = () => {
    setIsLight(!isLight);
    console.log("CHANGING THEME!");
  };
  return (
    <div>
      <div className={`${isLight ? "navBar-light" : "navBar-dark"}`}>
        <div className="navButton">
          <ThemeButton onClick={toggleTheme} isLight={isLight} />
        </div>
        <Link className="navHeading" to="/Work">
          Work,
        </Link>
        <Link className="navHeading" to="/Connect">
          Connect
        </Link>
      </div>
      <div className={`${isLight ? "App-light" : "App-dark"}`}>
        <CanvasBackground isLight={isLight} />
        <MainContainer />
        <Buttons isLight={isLight} />
        <div className="blur"></div>
      </div>
    </div>
  );
}

export default App;
