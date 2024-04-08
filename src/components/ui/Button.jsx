import React from "react";

const Button = ({ handleClick, currentStep }) => {
  return (
    <button
      onClick={handleClick}
      className={`bg-black p-4 w-40 rounded-md text-white ${
        currentStep > 5 ? "hidden" : ""
      }`}
    >
      Continue
    </button>
  );
};

export default Button;
