import React from "react";
import Logo from "../assets/silverfunlogo.svg";
import FooterProfile from "./FooterProfile";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className={`w-full bg-blue-100 h-min`}>
      <div
        className={`text-black flex items-center justify-around `}
      >
        <div className={`flex flex-col items-center p-5`}>
          <Link to="/"><img src={Logo} className=" p-5 px-10" alt="logo" /></Link>
          <FooterProfile />
        </div>
        <div className={`flex p-5 justify-around text-gray-600 font-["Rubik"] w-4/6`}>
          <div className={`flex flex-col items-left px-5`}>
            <div className={`text-lg font-["RubikBold"] pb-3 text-black`}>
              HOME
            </div>
            <div className={`flex flex-col text lg`}>
              <Link to="/Home" className={`pb-2`}>Home</Link>
              <Link to="/Home" className={`pb-2`}>Health Statistics</Link>
            </div>
          </div>
          <div className={`flex flex-col items-left px-5`}>
            <div className={`text-xl pb-3 font-["RubikBold"] text-black`}>
              ACTIVITIES
            </div>
            <div className={`flex flex-col`}>
              <Link to="/Activities" className={`pb-2`}>Silver Infocomm Centers</Link>
              <Link to="/Activities" className={`pb-2`}>Fitness Facilities</Link>
              <Link to="/Activities" className={`pb-2`}>Reading Activities</Link>
            </div>
          </div>
          <div className={`flex flex-col items-left px-5 `}>
            <div className={`text-xl pb-3 font-["RubikBold"] text-black`}>
              HEALTHCARE SERVICES
            </div>
            <div className={`flex flex-col`}>
              <Link to="/Healthcare" className={`pb-2`}>Eldercare Services</Link>
              <Link to="/Healthcare" className={`pb-2`}>Hospital/Clinics</Link>
              <Link to="/Healthcare" className={`pb-2`}>COVID-19</Link>
            </div>
          </div>
          <div className={`flex flex-col items-left px-5`}>
            <div className={`text-xl pb-3 font-["RubikBold"] text-black`}>
              ABOUT US
            </div>
            <div className={`flex flex-col`}>
              <Link to="/AboutUs" className={`pb-2`}>Our Vision</Link>
              <Link to="/AboutUs" className={`pb-2`}>Our Mission</Link>
              <Link to="/AboutUs" className={`pb-2`}>Our Team</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full flex justify-center `}>
        <text className={`text-center text-xs pb-3`}>
          Copyright © 2022 SilverFun. All rights reserved.
        </text>
      </div>

    </div>
  );
};

export default Footer;
