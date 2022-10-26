import React from "react";
import ambulance from "../assets/icons/Ambulance.svg"
import police from "../assets/icons/Police.svg"


const AED = () => {
  return (
    <div className="w-44 h-min bg-white rounded border border-2 border-red-700 mr-20 p-5">
            <p className="font-['Rubik'] text-sm text-center">Emergency Contacts</p>
            <div className="flex items-center pt-3 pb-2">
              <img src={ambulance} className="px-5" alt="ambulance" />
              <p className="font-['RubikBold'] text-">995</p>
            </div>
            <div className="flex items-center">
              <img src={police} className="px-5" alt="police" />
              <p className="font-['RubikBold'] text-">999</p>
            </div>
            <button className = "mt-3 mx-3 px-5 py-1 text-xs flex items-center rounded-md hover:scale-105 transition-all duration-150 ease-linear bg-red-300 drop-shadow-lg ">Find AEDs Near Me</button>
          </div>
  );
};

export default AED;
