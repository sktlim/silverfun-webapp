import React from "react";

const Button = ({ icon, text = "Button", onClickHandler, classNames }) => {
  return (
    <button
      className={`${classNames} ml-4 px-5 pr-6 py-3 text-black flex items-center rounded-md  hover:scale-105 transition-all duration-150 ease-linear bg-white drop-shadow-lg `}
      onClick={onClickHandler}
    >
        <img src={icon}/>
        <text className = "ml-2">
        {text}
        </text>
    </button>
  );
};

export default Button;
