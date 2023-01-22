import React, { useState, useRef, useEffect } from "react";
import "./styles/fade.css";
import "./styles/connect.css";
import SvgBenson from "./svg-components/svg-benson.js";
import emailjs from "@emailjs/browser";
import Logo from "./svg-components/logo.js";

export default function Connect() {
  const [isActive, setIsActive] = useState(false);
  const rootRef = useRef(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j86lp4a",
        "template_3mp56f5",
        form.current,
        "We2xEWSAWsTIVa-hF"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
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
            <form ref={form} onSubmit={sendEmail}>
              <div className="connect">
                <input
                  className="emailInput"
                  type="text"
                  placeholder="Your email."
                  name="from_email"
                />
                <button className="submitInput" type="submit">
                  Go
                </button>
              </div>
            </form>
          </div>
        </div>
        <Logo />
        <div>
          <SvgBenson className="svg-benson" />
        </div>
      </div>
    </div>
  );
}
