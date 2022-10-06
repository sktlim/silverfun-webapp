import React from "react";
import profilePlaceholder from "../assets/images/profilePlaceholder.png"


const FooterProfile = () => {
  return (
        <div className={`border border-black w-44 h-min flex flex-col items-center`}>
        <img src={profilePlaceholder} className="h-13 py-3 px-10" alt="profile"/>
        <text className={`font-["RubikBold"] text-lg`}>
          Sam Tan
        </text>
        <text className={`text-sm`}>
          sam123@gmail.com
        </text>
        <button className = "m-2 mb-4 px-5 py-1 text-sm flex items-center rounded-md  hover:scale-105 transition-all duration-150 ease-linear bg-red-300 drop-shadow-lg ">Logout</button>
        </div>
  );
};

export default FooterProfile;
