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
          
          
            
            <div class = "flex flex-row justify-center justify-between">

              <PreferenceButton image = {Exercising} text = "Exercising"/>
              <PreferenceButton image = {Reading} text = "Reading"/>
              <PreferenceButton image = {Sports} text = "Sports"/>

            </div>

            <div class = "flex flex-row justify-center justify-between">

              <PreferenceButton image = {Health} text = "Heath"/>
              <PreferenceButton image = {Eating} text = "Eating"/>
              <PreferenceButton image = {Covid} text = "Covid-19 Information"/>
            </div>

          <br/>
          
          <Link to="/Login">
            <button class = "align-middle bg-yellow w-full text-3xl hover:scale-105 rounded-md "> Done </button>
          </Link>
          

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