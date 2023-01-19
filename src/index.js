import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Work from "./work";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/WORK" element={<Work />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
<App id="App" />;
