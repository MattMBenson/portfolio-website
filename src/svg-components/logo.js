import React from "react";
import "../styles/fade.css";
import "../styles/connect.css";
import { Link } from "react-router-dom";
import SvgMatthew from "../svg-components/svg-matthew.js";
import SvgMatthewCopy from "../svg-components/svg-matthew-copy.js";

export default function Logo() {
  return (
    <div className="matthewContainer">
      <Link to="/">
        <SvgMatthew />
        <SvgMatthewCopy />
      </Link>
    </div>
  );
}
