import React from "react";
import fitnessIcon from "../../assets/icons/fitness.svg"
import bookIcon from "../../assets/icons/book.svg"
import busIcon from "../../assets/icons/Bus.svg"
import covidIcon from "../../assets/icons/Coronavirus.svg"
import elderlyIcon from "../../assets/icons/elderly.svg"
import hospitalIcon from "../../assets/icons/hospital.svg"
import informationIcon from "../../assets/icons/Information.svg"

const RecommendedItem = ({ timing, title, description, type, pic, onClickHandler }) => {
  return (
    <div className="relative h-min w-1/5 bg-blue-100 rounded hover:scale-105 transition-all duration-150 ease-linear " onClick={onClickHandler}>
      <div className="absolute h-min w-full flex justify-end">
        <div className="bg-blue-700 w-auto text-white px-3 py-2 flex">
          <img src={busIcon} className="pr-2" alt="bus icon" />
          {timing} min
        </div>
      </div>
      <img src={pic} className="w-full" alt="pic" />
      <div className="flex items-center pt-5 px-3 pb-3">
        {type === "Fitness" ? (
          <img src={fitnessIcon} className="pr-2" alt="fitness" />
        ) : type === "Library" ? (
          <img src={bookIcon} className="pr-3 pl-1" alt="library" />
        ) : type === "Covid" ? (
          <img src={covidIcon} className="pr-2" alt="covid" />
        ) : type === "SilverInfocomm" ? (
          <img src={informationIcon} className="pr-2" alt="silver infocomm" />
        ) : type === "Hospital" ? (
          <img src={hospitalIcon} className="pr-2" alt="hospital" />
        ) : type === "Eldercare" ? (
          <img src={elderlyIcon} className="pr-2" alt="elderly" />
        ) : <img src={elderlyIcon} className="pr-2" alt="no class" />}
        <h4>{title}</h4>
      </div>

      <p className=" px-6 pb-5 italic text-sm font-['Rubik']">{description}</p>


    </div>
  );
};

export default RecommendedItem;
