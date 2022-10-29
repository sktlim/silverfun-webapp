import DoneButton from "./DoneButton";
import PreferenceButton from "./PreferenceButton";
import Exercising from "../assets/images/Exercising.png";
import Reading from "../assets/images/Reading.png";
import Sports from "../assets/images/Sports.png";
import Health from "../assets/images/Health.png";
import Eating from "../assets/images/Eating.png";
import Covid from "../assets/images/Covid.png";
import React, {useState} from "react";

const PreferenceBlock = () => {
  const [isShown, setShown] = useState(false);
  const handleClick = event => {
    setShown(current => !current);
  };

  return(
    <div>
    <div class = "flex flex-row justify-center justify-between">

      <div><PreferenceButton image = {Exercising} text = "Exercising" /></div>
      <div><PreferenceButton image = {Reading} text = "Reading"/></div>
      <div><PreferenceButton image = {Sports} text = "Sports"/></div>

    </div>

    <div class = "flex flex-row justify-center justify-between">

      <PreferenceButton image = {Health} text = "Heath"/>
      <PreferenceButton image = {Eating} text = "Eating"/>
      <PreferenceButton image = {Covid} text = "Covid-19 Information"/>

  </div>
   <DoneButton/>
  </div>
    
  );
   
}
export default PreferenceBlock