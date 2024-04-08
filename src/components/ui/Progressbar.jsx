import React from "react";

const Progressbar = ({ progress }) => {
  const pro = (progress / 5) * 100;
  console.log(progress, pro);
  return (
    <div
      className={`bg-gray-200 rounded-full h-2.5 mb-4 ${
        pro > 100 ? "hidden" : ""
      } `}
    >
      <div
        className={`bg-green-700  h-2.5 rounded-ful`}
        style={{ width: `${pro}%` }}
      ></div>
    </div>
  );
};

export default Progressbar;
