import React, { useState, useRef, useEffect } from "react";
import "./styles/fade.css";
import Logo from "./svg-components/logo.js";
import "./styles/work.css";

export default function Work() {
  const cursorWrapperRef = useRef(null);
  const workContainerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [coords, setCoords] = useState({});
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const rootRef = useRef(null);
  const [slideShowIndex, setSlideShowIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

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
    setMouseCoords({ x: event.clientX, y: event.clientY });
    if (event.clientX < coords.left + (coords.right - coords.left) / 2) {
      cursorWrapperRef.current.textContent = "PREVIOUS";
      cursorWrapperRef.current.style.color = "#fff";
      cursorWrapperRef.current.style.opacity = "1";
      cursorWrapperRef.current.style.visibility = "visible";
    } else {
      cursorWrapperRef.current.textContent = "NEXT";
      cursorWrapperRef.current.style.color = "#000";
      cursorWrapperRef.current.style.opacity = "1";
      cursorWrapperRef.current.style.visibility = "visible";
    }
  };

  const handleMouseLeave = () => {
    cursorWrapperRef.current.style.visibility = "hidden";
    cursorWrapperRef.current.textContent = "";
    cursorWrapperRef.current.style.opacity = "0";
  };

  let project0 = [
    "url('https://picsum.photos/200/300')",
    "url('https://picsum.photos/201/300')",
    "url('https://picsum.photos/202/300')",
  ];

  useEffect(() => {
    let intervalId = null;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSlideShowIndex((slideShowIndex + 1) % 3);
        console.log(slideShowIndex);
        workContainerRef.current.style.backgroundImage =
          project0[slideShowIndex];
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, slideShowIndex, workContainerRef]);

  const pauseSlideShow = () => {
    setIsRunning(false);
    console.log("pause slide show");
    workContainerRef.current.textContent = "PROJECT A";
  };

  const resumeSlideShow = () => {
    setIsRunning(true);
    console.log("resume slide show");
    workContainerRef.current.textContent = "";
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
        ref={workContainerRef}
        onMouseEnter={pauseSlideShow}
        onMouseLeave={resumeSlideShow}
      ></div>
      <div
        className="data-cursor-tracker-x"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      ></div>

      <div className="light-side"></div>
      <div className="dark-side"></div>
      <p
        className="cursor-wrapper"
        style={{ top: mouseCoords.y - 24, left: mouseCoords.x - 30 }}
        ref={cursorWrapperRef}
      ></p>
    </div>
  );
}
