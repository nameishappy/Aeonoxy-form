import React from "react";

const PathCard = ({ isPopular, title }) => {
  return (
    <div className="relative border-2 border-gray-200 rounded-md hover:cursor-pointer hover:border-yellow-300">
      <div
        className={`${
          isPopular ? "flex" : "hidden"
        } absolute bg-yellow-500 top-0 left-1/2 transform -translate-x-1/2 -mt-3 h-6  justify-center p-2 items-center rounded-xl z-10`}
      >
        Most Popular
      </div>
      <div className="flex p-5">
        <div className="w-60 flex flex-col justify-center items-center pt-10">
          <h3 className="font-bold w-full">{title}</h3>
          <p>
            Build your foundational skills in algebra geometry and probability
          </p>
        </div>
        <img
          className="h-36 w-36"
          src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Pre-Algebra_puzzles-A75iXn.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default PathCard;
