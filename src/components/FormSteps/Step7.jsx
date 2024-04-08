import React from "react";
import PathCard from "../ui/PathCard";

const Step7 = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className=" flex justify-center text-3xl font-bold bg-red mb-3">
          Learning Path based on your answers
        </h1>
        <h4 className=" flex justify-center mb-8 text-gray-500 whitespace-nowrap">
          Choose one to get started. You can always change this later.
        </h4>
      </div>
      <div className="flex gap-3">
        <PathCard isPopular={true} title={"Foundational Math"} />
        <PathCard title={"Matheatical thinking"} />
      </div>
    </>
  );
};

export default Step7;
