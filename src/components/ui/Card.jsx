import React from "react";

const Card = ({ topic, type }) => {
  return (
    <div className="p-10 flex flex-col w-56 gap-2 border-2 rounded-md hover:border-yellow-300 hover:cursor-pointer ">
      <p className="text-gray-600 text-xl p-2">3x+5 = 4</p>
      <p className="text-gray-900 font-semibold">{topic}</p>
      <p className="text-gray-500">{type}</p>
    </div>
  );
};

export default Card;
