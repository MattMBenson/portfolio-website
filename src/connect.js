import React, { useState, useRef, useEffect } from "react";
import "./styles/fade.css";
import "./styles/connect.css";
import SvgMatthew from "./svg-components/svg-matthew.js";
import SvgMatthewCopy from "./svg-components/svg-matthew-copy.js";
import SvgBenson from "./svg-components/svg-benson.js";
import { Link } from "react-router-dom";

export default function Connect() {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");
  const rootRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
  };

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 300);
  }, []);

  return (
    <div className="connect-container">
      <div className="dark-side"></div>
      <div className="light-side"></div>
      <div
        ref={rootRef}
        className={`fade-in ${isActive ? "fade-in-active" : ""}`}
      >
        <div className="flex-wrap">
          <div className="info-container">
            <div className="info">
              As a software engineer, I specialize in extracting the most
              important information and giving it form through clean and
              efficient code. My skills in problem-solving and attention to
              detail help me to bring order and clarity to even the most complex
              projects, resulting in effective and high-performing software.
              Let's work.
            </div>
            <form onSubmit={handleSubmit}>
              <div className="connect">
                <input
                  className="emailInput"
                  type="text"
                  placeholder="Your email."
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <button className="submitInput" type="submit">
                  Go
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="matthewContainer">
          <Link to="/">
            <SvgMatthew />
            <SvgMatthewCopy />
          </Link>
        </div>
        <div>
          <SvgBenson className="svg-benson" />
        </div>
      </div>
    </div>
  );
}
