import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";

const ToggleButton = ({handleClick}) => {
  return (
    <button
      className="toggle-button d-lg-none"
      type="button"
        onClick={handleClick}
    >
      <FaArrowCircleDown className="navbar-toggler-icon" />
    </button>
  );
};

export default ToggleButton;
