import React, { useState, useRef, useEffect } from "react";
import "./styles/fade.css";
import Logo from "./svg-components/logo.js";
import "./styles/work.css";

export default function Work() {
  const cursorWrapperRef = useRef(null);
  const workContainerRef = useRef(null);
  const footerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [coords, setCoords] = useState({});
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const rootRef = useRef(null);
  const [slideShowIndex, setSlideShowIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);
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

  useEffect(() => {
    let intervalId = null;
    if (isRunning) {
      let projects = [
        [
          "url('https://picsum.photos/200/300')",
          "url('https://picsum.photos/201/300')",
          "url('https://picsum.photos/202/300')",
        ],
        [
          "url('https://picsum.photos/203/300')",
          "url('https://picsum.photos/204/300')",
          "url('https://picsum.photos/205/300')",
        ],
        [
          "url('https://picsum.photos/206/300')",
          "url('https://picsum.photos/207/300')",
          "url('https://picsum.photos/208/300')",
        ],
      ];

      intervalId = setInterval(() => {
        setSlideShowIndex((slideShowIndex + 1) % 3);
        //console.log(slideShowIndex);
        workContainerRef.current.style.backgroundImage =
          projects[projectIndex][slideShowIndex];
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, slideShowIndex, workContainerRef, projectIndex]);

  const pauseSlideShow = () => {
    setIsRunning(false);
    //console.log("pause slide show");
    if (projectIndex === 0) {
      workContainerRef.current.textContent = "PROJECT A";
    }
    if (projectIndex === 1) {
      workContainerRef.current.textContent = "PROJECT B";
    }
    if (projectIndex === 2) {
      workContainerRef.current.textContent = "PROJECT C";
    }
  };

  const resumeSlideShow = () => {
    setIsRunning(true);
    //console.log("resume slide show");
    workContainerRef.current.textContent = "";
  };

  const changeProject = () => {
    if (cursorWrapperRef && cursorWrapperRef.current) {
      if (cursorWrapperRef.current.textContent === "PREVIOUS") {
        setProjectIndex(projectIndex - 1 < 0 ? 2 : projectIndex - 1);
        console.log(projectIndex);
      } else if (cursorWrapperRef.current.textContent === "NEXT") {
        setProjectIndex(projectIndex + 1 > 2 ? 0 : projectIndex + 1);
        console.log(projectIndex);
      }
    }
  };

  useEffect(() => {
    const intervalId2 = setInterval(() => {
      const footerX = footerRef.current.getBoundingClientRect().x;
      if (footerX < window.innerWidth / 2) {
        footerRef.current.style.color = "white";
      } else {
        footerRef.current.style.color = "black";
      }
    }, 500);
    return () => clearInterval(intervalId2);
  }, [footerRef]);

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
        onClick={changeProject}
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
      <div className="footer">
        <a
          className="content"
          href="https://github.com/MattMBenson"
          ref={footerRef}
          target="_blank"
          rel="noopener noreferrer"
        >
          what i'm working on...
        </a>
      </div>
    </div>
  );
}
