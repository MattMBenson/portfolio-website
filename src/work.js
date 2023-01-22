import React, { useState, useRef, useEffect } from "react";
import "./styles/fade.css";
import Logo from "./svg-components/logo.js";
import "./styles/work.css";
import chevronRight from "./cursors/chevron-black.cur";
import chevronLeft from "./cursors/chevron-white.cur";

export default function Work() {
  const cursorWrapperRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [coords, setCoords] = useState({});
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const rootRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 300);
  }, []);

  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();
    setCoords({
      top: rect.top,
      left: rect.left,
      right: rect.right,
      bottom: rect.bottom,
    });
    if (event.clientX < coords.left + (coords.right - coords.left) / 2) {
      event.target.style.cursor = `url(${chevronLeft}), auto`;
    } else {
      event.target.style.cursor = `url(${chevronRight}), auto`;
    }
  };

  const handleMouseMoveOutter = (event) => {
    const rect = event.target.getBoundingClientRect();
    setCoords({
      top: rect.top,
      left: rect.left,
      right: rect.right,
      bottom: rect.bottom,
    });
    setMouseCoords({ x: event.clientX, y: event.clientY });
    if (event.clientX < coords.left + (coords.right - coords.left) / 2) {
      cursorWrapperRef.current.visibility = "visible";
      cursorWrapperRef.current.textContent = "Cursor on the left side";
    } else {
      cursorWrapperRef.current.style.visibility = "visible";
      cursorWrapperRef.current.textContent = "Cursor on the right side";
    }
  };

  return (
    <div
      ref={rootRef}
      className={`fade-in ${isActive ? "fade-in-active" : ""}`}
    >
      <Logo />

      <div
        className="work-container"
        id="0"
        onMouseMove={handleMouseMove}
      ></div>
      <div
        className="data-cursor-tracker"
        onMouseMove={handleMouseMoveOutter}
      ></div>

      <div className="light-side"></div>
      <div className="dark-side"></div>
      <p
        className="cursor-wrapper"
        style={{ top: mouseCoords.y, left: mouseCoords.x }}
        ref={cursorWrapperRef}
      ></p>
    </div>
  );
}
