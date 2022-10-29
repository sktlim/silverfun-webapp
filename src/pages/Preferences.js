import Header from "../components/Header";
import Footer from "../components/Footer";
import Exercising from "../assets/images/Exercising.png";
import Reading from "../assets/images/Reading.png";
import Sports from "../assets/images/Sports.png";
import Health from "../assets/images/Health.png";
import Eating from "../assets/images/Eating.png";
import Covid from "../assets/images/Covid.png";
import {Link} from "react-router-dom";
import Back from "../assets/icons/Back.png";
import React, {useState} from "react";
import PreferenceButton from "../components/PreferenceButton";
import DoneButton from "../components/DoneButton";
import PreferenceBlock from "../components/PreferenceBlock";



function Preferences(){

    return (
      <div>
        <Header/>
      
      <div className = "flex h-screen">
          <p className = "text-center m-auto">

          <div class = "flex flex-row justify-center">
            <Link to= "/Login"><button><img src = {Back}/></button></Link>
            <h1 class = "text-yellow">Tell us what you are interested in! </h1>    
          </div>
          <body>Pick 1 (or more) to start discovering activities to your preference!</body>
          <br/>
          
          
            
            <PreferenceBlock/>

          <br/>

          
          </p>
        </div>      
      
      
      <div>
        <br/>
        <Footer/>
      </div>
      </div>
      

    );
  }
  export default Preferences;