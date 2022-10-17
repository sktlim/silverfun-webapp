import React, { useState } from "react";
import Logo from "../assets/silverfunlogo.svg";
import ProfileIcon from "../assets/icons/profile.svg"
import Button from "./Button";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div
      className={`w-full h-min relative text-black flex items-center justify-between mb-3`}
    >
      {showProfile ? <div className='absolute w-full h-full z-10 flex justify-end pr-10 mt-36'>
        <ProfileMenu />
      </div> : <></>}
      <Link to="/"><img src={Logo} className="h-13 p-5 px-10" alt="silver fun logo" /></Link>
      <div className={`flex items-center text-lg font-["Rubik"] px-10 z-0`}>
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
        <button
          className={`border-2 border-black text-lg ml-4 px-5 pr-6 py-3 text-black flex items-center rounded-md  hover:scale-105 transition-all duration-150 ease-linear bg-white drop-shadow-lg + ${showProfile ? 'border-white drop-shadow-xl rounded-br-none rounded-bl-none hover:scale-100' : ''}`}
          onClick={event => setShowProfile(!showProfile)}
        >
          <img src={ProfileIcon} />
          <text className="ml-2">
            PROFILE
          </text>
        </button>      </div>
    </div>
  );
};

export default Header;
