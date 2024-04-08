import React from "react";

const Option = (props) => {
  return (
    <div className="flex w-[600px] p-3 items-center gap-2 border-[1px] border-gray-200 hover:border-yellow-300 rounded-md cursor-pointer">
      <div className="text-4xl">{props.icon}</div>
      <div className="flex gap-2">
        <span className="font-semibold ">{props.text}</span>
        <p className="text-gray-500">{props.description}</p>
      </div>
    </div>
  );
};

export default Option;
