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
      <div className={`App-light ${isLight ? "App-light" : "App-dark"}`}>
        <div className="canvas-container">
          <CanvasBackground isLight={isLight} />
        </div>
        <MainContainer isLight={isLight} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default App;
