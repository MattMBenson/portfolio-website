import React, { useState, useRef, useEffect } from "react";
import "./styles/fade.css";

export default function Work() {
  const [isActive, setIsActive] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 300);
  }, []);

  return (
    <div
      ref={rootRef}
      className={`fade-in ${isActive ? "fade-in-active" : ""}`}
    >
      <div>Work</div>
    </div>
  );
}
