import React from "react";
import {
  FcBusinesswoman,
  FcPortraitMode,
  FcManager,
  FcCustomerSupport,
  FcConferenceCall,
  FcSelfie,
} from "react-icons/fc";
import Option from "../ui/Option";

const data = [
  {
    name: "student",
    description: "or soon to be enrolled",
    icon: <FcPortraitMode />,
  },
  {
    name: "professional",
    description: "pusruing a career",
    icon: <FcManager />,
  },
  {
    name: "parent",
    description: "of a school aged-child",
    icon: <FcBusinesswoman />,
  },
  {
    name: "Lifelong learner",
    description: "",
    icon: <FcCustomerSupport />,
  },
  {
    name: "Taecher",
    description: "",
    icon: <FcConferenceCall />,
  },
  {
    name: "other",
    description: "",
    icon: <FcSelfie />,
  },
];

const Step1 = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="text-3xl text-center font-bold bg-red">
        Which describes you best?
      </h1>
      <h4 className="text-center mb-8 text-gray-500">
        This will help us personalize your experience
      </h4>
      <div className="flex flex-col gap-2">
        {data.map((item) => (
          <Option
            key={item.name}
            icon={item.icon}
            text={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Step1;
