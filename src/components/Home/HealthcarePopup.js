import React from "react";
import Button from "../Button";
import HealthcarePinLarge from "../../assets/icons/HealthcarePinLarge.svg"


const HealthcarePopup = () => {
  return (
    <div className="bg-white w-72 h-72 ml-4 shadow-lg p-5">
      <div className="flex justify-center mt-2 mb-5">
        <img src={HealthcarePinLarge} className="p-2" alt="Healthcare" />
      </div>
      <div className="flex justify-center mb-5">
        <Button classNames="ml-0 py-2 bg-blue-300 drop-shadow-none" text="Healthcare Activities" />
      </div>
      <p className="text-sm text-gray-600 text-center">Click to find out more about healthcare facilities that might suit your needs.</p>
    </div>
  );
};


export default HealthcarePopup;
