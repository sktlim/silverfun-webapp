import React from "react";
import Logo from "../assets/silverfunlogo.svg";
import ProfileIcon from "../assets/icons/profileIcon.png"
import Button from "./Button";

const Header = () => {
  return (
    <div
      className={`w-full text-black bg-white flex items-center justify-between`}
    >
      <img src={Logo} className="h-13 p-5 px-10" />
      <div className={`flex items-center text-xl font-["Rubik"] px-10`}>
        <nav className={`p-8`}>
          HOME
        </nav>
        <nav className={`p-8`}>
          ACTIVITIES
        </nav>
        <nav className={`p-8`}>
          HEALTHCARE
        </nav>
        <Button icon={ProfileIcon} text="PROFILE" classNames={`drop-shadow-none border-2 border-black`} />
      </div>
    </div>
  );
};

export default Header;
