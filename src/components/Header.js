import React from "react";
import Logo from "../assets/silverfunlogo.svg";
import ProfileIcon from "../assets/icons/profileIcon.png"
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className={`w-full text-black flex items-center justify-between`}
    >
      <Link to="/"><img src={Logo} className="h-13 p-5 px-10" /></Link>
      <div className={`flex items-center text-xl font-["Rubik"] px-10`}>
        <Link
          to="/Home"
          className={`p-8 + ${window.location.pathname === "/Home" ? 'underline' : ''}`}>
          HOME
        </Link>
        <Link
          to="/Activities"
          className={`p-8 + ${window.location.pathname === "/Activities" || window.location.pathname === "/ActivityDetails" ? 'underline' : ''}`}>
          ACTIVITIES
        </Link>
        <Link
          to="/Healthcare"
          className={`p-8 + ${window.location.pathname === "/Healthcare" || window.location.pathname === "/HealthcareDetails" ? 'underline' : ''}`}>
          HEALTHCARE
        </Link>
        <Button icon={ProfileIcon} text="PROFILE" classNames={`drop-shadow-none border-2 border-black`} />
      </div>
    </div>
  );
};

export default Header;
