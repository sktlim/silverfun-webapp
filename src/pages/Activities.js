import Header from "../components/Header";
import React, { Component, useState } from "react";
import Squats from "../assets/icons/Squats.png";
import Book from "../assets/icons/Book.png";
import Boxes from  "../components/Boxes";
import Food from "../assets/icons/Food.png";
import Footer from "../components/Footer";
import { library } from "../assets/geojson/libraries";
import { hawker } from "../assets/geojson/hawker"
import { gyms } from "../assets/geojson/gyms"
import { render } from "@testing-library/react";


export default class Activities extends Component{

  constructor() {
    super();
    this.state = {
      loading: false,
      lib: {},
      gym: {},
      haw: {}
    }
  }

  componentDidMount(){
    // POST library
    const libraryData = new Blob([JSON.stringify(library, null, 2)], {
    type: "application/json",});
  
    const libform = new FormData();
    libform.append("data", libraryData, "libraries.geojson");
    libform.append("lat","1.3483");
    libform.append("lng","103.6831");

    const librequest = async() => {
    const liboptions = {
      method: "POST",
      body: libform,
    }
    const response = await fetch("https://silverfun-backend.limsui.repl.co", liboptions);
    const librarylocations = await response.json();
    console.log(librarylocations);
    this.setState({
      loading: false,
      lib: librarylocations
    })
    }

    // POST gym 
    const gymsData = new Blob([JSON.stringify(gyms, null, 2)], {
      type: "application/json",});
    
    const gymform = new FormData();
    gymform.append("data", gymsData, "gyms.geojson");
    gymform.append("lat","1.3483");
    gymform.append("lng","103.6831");
    
    const gymrequest = async() => {
      const gymoptions = {
        method: "POST",
        body: gymform,
      }
      const response = await fetch("https://silverfun-backend.limsui.repl.co", gymoptions);
      const gymlocations = await response.json();
      console.log(gymlocations);
      this.setState({
        loading: false,
        gym: gymlocations
      })
    }

    // POST hawker
    const hawkerData = new Blob([JSON.stringify(hawker, null, 2)], {
      type: "application/json",});
    
    const hawform = new FormData();
    hawform.append("data", hawkerData, "hawker.geojson");
    hawform.append("lat","1.3483");
    hawform.append("lng","103.6831");
    
    const hawrequest = async() => {
      const hawoptions = {
        method: "POST",
        body: hawform,
      }
      const response = await fetch("https://silverfun-backend.limsui.repl.co", hawoptions);
      const hawkerlocations = await response.json();
      console.log(hawkerlocations);
      this.setState({
        loading: false,
        haw: hawkerlocations
      })
    }

  librequest();
  gymrequest();
  hawrequest();
  }


render(){
  return(
    <div>
    <Header />

    <div>
      {console.log(this.state.lib[0])}
      {console.log(this.state.gym[0])}
      {console.log(this.state.haw[0])}
    </div>

    <div className = "flex h-min">
        <p className = "text-center m-auto ">
          <h1 className = "mb-2">Activities</h1>
          <body>Find out more about fun and enriching activities around you!</body>

          <br/>
            <iframe width="800" height="400" src="https://data.gov.sg/dataset/libraries/resource/5dc4c609-49e7-4bd4-99b7-f43a95675683/view/624a709d-d700-4e55-abba-e3a79a0aa9af" frameBorder="0"> </iframe>
          <br/>
          
          <div class = "align middle">
              <input
              class = "border-2 border-gray-300 bg-white h-10 px-5 pr-16 w-72 rounded-lg text-sm focus:outline-none shadow"
              type="text"
              id="header-search"
              placeholder="Search for activities near you"
              name="s" />
          </div>
          
          <p class = "text-sm text-gray-400 italic">Alternatively, filter through the activities by pressing one of the buttons below.</p>
          
          <br/>
          <div class = "inline-flex space-x-9">
            <button class = "bg-white h-10 px-5 rounded-lg flex items-center text-center text-md rounded-md  hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg">
              <div class = "flex flex-row space-x-1">
                <img src = {Food} class = "object-scale-down h-25 w-7"/>
                <div>Hawker Centres</div>
              </div>
            </button>

            <button class = "bg-white h-10 px-5 rounded-lg flex items-center text-center text-md rounded-md  hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg">
              <div class = "flex flex-row space-x-1">
                <img src = {Squats} class = "object-scale-down h-25 w-7"/>
                <div>Fitness Facilities</div>
              </div>
            </button>

            <div>
            <button class = "bg-white h-10 px-5 rounded-lg flex items-center text-center text-md rounded-md  hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg">
              <div class = "flex flex-row space-x-1">
                <img src = {Book} class = "object-scale-down h-25 w-7"/>
                <div>Libraries</div>
              </div>
            </button>
            </div>
          </div>
          
          <div>
          <br/>
          <Boxes icon = {Food} text1 = "Jurong West Hawker Centre" text2 = "Jurong West Street 61" time = "20 Min"></Boxes>
          <br/>
          <Boxes icon = {Squats} text1 = "Jurong West ActiveSG Sports Centre " text2 = "Jurong West Street 93" time = "23 Min"></Boxes>
          <br/>
          <Boxes icon = {Book} text1 = "Jurong West Public Library" text2 = "Jurong West Central 3" time = "25 Min"></Boxes>
          <br/>
          <Boxes icon = {Book} text1 = "Jurong West Public Library" text2 = "Jurong West Central 3" time = "25 Min"></Boxes>
          <br/>

          </div>

          <body> 1 of 5 </body> 
          <button class = "text-sm hover:scale-105 "> Next {'>'} </button>
          <br/>

        </p>
      </div>
      <Footer />
      </div>
  );
}}
  