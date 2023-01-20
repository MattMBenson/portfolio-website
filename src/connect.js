import React, { useState, useRef, useEffect } from "react";
import "./styles/fade.css";
import "./styles/connect.css";
import SvgMatthew from "./svg-components/svg-matthew.js";
import SvgBenson from "./svg-components/svg-benson.js";

export default function Connect() {
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
      <div className="flex-wrap">
        <div className="info-container">
          <div className="info">
            As a computer science student and a software developer, I work with
            cutting-edge technologies in the field of AI and machine learning.
            My passion in these areas have driven me to delve deeper into the
            subject and understand how to apply these technologies to real-world
            applications. Additionally, my interest in web3 elements keeps me at
            the forefront of technology.
          </div>
          <div className="connect">
            <input
              className="emailInput"
              type="email"
              placeholder="Your email."
            />
            <button className="submitInput" type="submit">
              Go
            </button>
          </div>
        </div>
      </div>
      <div svg-matthew>
        <SvgMatthew />
      </div>
      <div svg-benson>
        <SvgBenson />
      </div>
    </div>
  );
}
