import React, { useState, useEffect } from "react";
import PersonalInfo from "./components/PersionalInfo";
import AddressInfo from "./components/AddressInfo";
import Confirmation from "./components/Confirmation";
import StepperComponent from "./components/Stepper";

const App = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  //Get data from local storage 
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  //Itrate through diffrent steps
  const nextStep = () => setActiveStep((prev) => prev + 1);
  const prevStep = () => setActiveStep((prev) => prev - 1);

  //Submit form
  const handleSubmit = () => {
    alert("Form sucessfully submitted");
    // console.log('Form submitted:', formData);
    localStorage.removeItem("formData");
    setFormData({
      name: "",
      email: "",
      phone: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
    });
    setActiveStep(0);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <PersonalInfo
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        );
      case 1:
        return (
          <AddressInfo
            formData={formData}
            setFormData={setFormData}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <Confirmation
            formData={formData}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return <div>Not Found</div>;
    }
  };

  return (
    <div className="main">
      <StepperComponent activeStep={activeStep} />
      {renderStepContent(activeStep)}
    </div>
  );
};

export default App;
