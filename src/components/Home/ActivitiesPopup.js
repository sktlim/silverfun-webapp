import React from "react";
import Button from "../Button";
import ActivityPinLarge from "../../assets/icons/ActivityPinLarge.svg"


const ActivitiesPopup = () => {
  return (
    <div className="bg-white w-72 h-72 ml-4 shadow-lg p-5">
      <div className="flex justify-center my-5">
        <img src={ActivityPinLarge} className="p-2" alt="activity" />
      </div>
      <div className="flex justify-center mb-5">
        <Button classNames="ml-0 py-2 bg-blue-300 drop-shadow-none w-min text-lg" text="Activities" onClickHandler={event =>  window.location.href='/Activities'}/>
      </div>
      <p className="text-sm text-gray-600 text-center">Click to find out more about fun and enriching activities around you!</p>
    </div>
  );
};


export default ActivitiesPopup;
