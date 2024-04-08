import React, { useState } from "react";
import Step1 from "./components/FormSteps/Step1";
import Progressbar from "./components/ui/Progressbar";
import Step2 from "./components/FormSteps/Step2";
import Step3 from "./components/FormSteps/Step3";
import Step4 from "./components/FormSteps/Step4";
import Step5 from "./components/FormSteps/Step5";
import Step6 from "./components/FormSteps/Step6";
import Step7 from "./components/FormSteps/Step7";
import Button from "./components/ui/Button";

const FormLayout = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleClick = () => {
    console.log("currentStep", currentStep);
    setCurrentStep((prevStep) => prevStep + 1);
  };
  setTimeout(() => {
    if (currentStep === 6) {
      setCurrentStep(7);
    }
  }, 2000);
  // Function to render the appropriate step component based on the current step state
  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
      case 6:
        return <Step6 />;
      case 7:
        return <Step7 />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col mx-auto min-h-screen h-screen p-8  my-auto lg:w-[1200px]">
      <Progressbar progress={currentStep} />
      <div className="mx-auto p-4 h-screen flex flex-col gap-3 ">
        {renderStepComponent()}
        <div className="text-center">
          <Button handleClick={handleClick} currentStep={currentStep} />
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
