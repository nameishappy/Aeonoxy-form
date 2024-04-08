import React from "react";

const Step3 = () => {
  return (
    <>
      <div className="grid grid-cols-2 justify-evenly h-full">
        <div className=" flex justify-center items-center">
          <img
            className="px-10 h-72"
            src="https://brilliant.org/site_media/version-0/images/nux-animations/reason-1.svg"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-3xl font-bold leading-2 w-full my-4">
            You're in the right place!
          </h1>
          <p>
            You’ll interact with concepts and solve fun problems in math,
            science, and computer science. Brilliant helps you train your
            critical thinking and creative problem solving skills.
          </p>
        </div>
      </div>
    </>
  );
};

export default Step3;
