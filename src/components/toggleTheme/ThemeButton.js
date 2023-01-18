import React from "react";

const ThemeButton = ({ isLight, onClick }) => {
  return (
    <div>
      <div
        className="theme-button"
        id={isLight ? "dark-mode" : "light-mode"}
        onClick={onClick}
      ></div>
    </div>
  );
};

export default ThemeButton;
