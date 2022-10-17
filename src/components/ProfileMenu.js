import React from "react";
import Logo from "../assets/silverfunlogo.svg";
import ProfileIcon from "../assets/icons/profile.svg"
import Button from "./Button";
import { Link } from "react-router-dom";
import profilePlaceholder from "../assets/images/profilePlaceholder.png"
import HomeIcon from "../assets/icons/Home.svg"
import EditIcon from "../assets/icons/Edit.svg"
import NotificationIcon from "../assets/icons/Notification.svg"
import PreferenceIcon from "../assets/icons/Preferences.svg"


const ProfileMenu = () => {
  return (
    <div className="bg-white drop-shadow-lg w-72 h-min rounded">
      <div className=" w-full flex justify-center mt-5">
        <img src={profilePlaceholder} className="w-fit py-3 px-10" alt="profile" />
      </div>
      <div className="flex flex-col items-center ">
        <text className={`font-["RubikBold"] text-lg text-center`}>
          Sam Tan
        </text>
        <text className={`text-sm text-gray-600 text-center italic`}>
          sam123@gmail.com
        </text>
        <div className="flex w-4/6 py-3 border-b-2 border-black justify-center">
          <img src={HomeIcon} />
          <div className="flex-col ml-4" >
            <p className="text-sm text-gray-600 italic">123 Silver Road</p>
            <p className="text-sm text-gray-600 italic">#01-23, S123456</p>
          </div>
        </div>
        <div className="flex items-center py-4 w-4/6 border-b border-gray-700">
          <img src={EditIcon} />
          <Link
            to="/EditProfile"
            className={`pl-8 text-xl text-bold`}>
            Edit Profile
          </Link>
        </div>
        <div className="flex items-center py-4 w-4/6 border-b border-gray-700">
          <img src={PreferenceIcon} />
          <Link
            to="/Preferences"
            className={`pl-8 text-xl text-bold`}>
            Preferences
          </Link>
        </div>
        <div className="flex items-center py-4 w-4/6 mb-4">
          <img src={NotificationIcon} />
          <Link
            to="/Notifications"
            className={`pl-8 text-xl text-bold`}>
            Notifications
          </Link>
        </div>
        <button className=" mb-7 px-10 py-3 text-xl flex items-center rounded-md  hover:scale-105 transition-all duration-150 ease-linear bg-red-300 drop-shadow-lg ">Logout</button>
      </div>

    </div>

  );
};

export default ProfileMenu;
