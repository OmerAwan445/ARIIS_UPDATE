import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";

const ToggleButton = () => {
  return (
    <button
      className="toggle-button"
      type="button"
      //   onClick={handleOffcanvasShow}
    >
      <FaArrowCircleDown className="navbar-toggler-icon" />
    </button>
  );
};

export default ToggleButton;
