import React from "react";
import Bus from "../assets/icons/Bus.png";

const Boxes = ({ icon, text1 = "first line", text2 = "second line", time = "X Min"}) => {
    return (
        <button class = "border-2 border-gray-400 bg-white px-5 w-full rounded-lg flex items-center text-left text-sm rounded-md  hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg">
        <div class = "flex flex-row space-x-2 w-full">
            <img src = {icon}/>
            <div class = "flex-col w-full"> 
                <div class = "text-lg ">{text1}</div>
                <div class = "flex flex-row justify-between">
                    <div class = "text-gray-500 text-sm">{text2}</div>
                    <div class = "flex flex-row space-x-1">
                    <img src = {Bus}/>
                    <div class = "text-gray-500 text-sm">{time}</div>
                    </div>
                </div>
                </div>
            </div>
        </button>
    );

};
export default Boxes;

