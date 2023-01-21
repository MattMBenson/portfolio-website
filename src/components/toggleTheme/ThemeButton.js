import React from "react";

const ThemeButton = ({ isLight, onClick }) => {
  //1. This component will render a checkbox with a label.
  //2. The checkbox will be checked if the isLight prop is true.
  //3. The onClick prop will be triggered when the checkbox is clicked.
  return (
    <div>
      <label>
        <input
          type="checkbox"
          id={isLight ? "dark-mode" : "light-mode"}
          onClick={onClick}
        ></input>
        <span className="check"></span>
      </label>
    </div>
  );
};

export default ThemeButton;
