import React from "react";
import Card from "../ui/Card";

const data = [
  {
    topic: "Arithmatic",
    type: "Introductory",
  },
  {
    topic: "Basic Algebra",
    type: "Foundational",
  },
  {
    topic: "Intermediate Algebra",
    type: "Intermediate",
  },
  {
    topic: "Calculus",
    type: "Advanced",
  },
];

const Step4 = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h1 className=" flex justify-center text-3xl font-bold bg-red mb-3">
          What is your math comfort level?
        </h1>
        <h4 className=" flex justify-center mb-8 text-gray-500 whitespace-nowrap">
          Choose the highest level you are comfortable with. You can always
          change this later.
        </h4>
      </div>
      <div className="flex flex-wrap gap-3 mb-4 md:flex-nowrap mx-auto">
        <div className="mx-auto md:mx-0 flex flex-wrap gap-3 mb-4">
          {data.map((item) => (
            <Card key={item.topic} topic={item.topic} type={item.type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step4;
