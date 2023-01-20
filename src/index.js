import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Work from "./work";
import Connect from "./connect";
import "./styles/fade.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <TransitionGroup>
        <CSSTransition classNames="fade" timeout={300}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/WORK" element={<Work />} />
            <Route path="/CONNECT" element={<Connect />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Router>
  </React.StrictMode>
);
<App id="App" />;
