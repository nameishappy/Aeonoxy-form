import React from "react";
import {
  FcComboChart,
  FcGlobe,
  FcMindMap,
  FcApproval,
  FcBinoculars,
} from "react-icons/fc";
import Option from "../ui/Option";

const steptwodata = [
  {
    description: "Learning specific skills to advance my career",
    icon: <FcComboChart />,
  },
  {
    description: "exploring new topics I'm interested in",
    icon: <FcGlobe />,
  },
  {
    description: "Refreshing my math foundations",
    icon: <FcMindMap />,
  },
  {
    description: "Excersing my brain to stay sharp",
    icon: <FcApproval />,
  },
  {
    description: "Something else",
    icon: <FcBinoculars />,
  },
];

const Step2 = () => {
  return (
    <div className="flex flex-col justify-center gap-4 ">
      <h1 className=" flex justify-center text-3xl font-bold bg-red">
        Which are you most interested in?
      </h1>
      <h4 className=" flex justify-center mb-8 text-gray-500 whitespace-nowrap">
        Choose just one.This will help us to get you started (but won't limit
        your experience )
      </h4>
      <div className="flex flex-col gap-2">
        {steptwodata.map((item) => (
          <Option
            key={item.description}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Step2;
