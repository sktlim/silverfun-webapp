import Header from "../components/Header";
import React from "react"

// function SliverInfocomm(props){
//   return(
//     <iframe width="600" height="400" src="https://data.gov.sg/dataset/silver-infocomm/resource/ce65eab1-37bd-4803-b3ec-2531b2f106cc/view/653be942-0882-4fd2-b2ce-2150d6d70fbe" frameBorder="0"> </iframe>
//   )
// }

// function FitnessFacilities(props){
//   return(
//     <iframe width="600" height="400" src="https://data.gov.sg/dataset/sportsg-sport-facilities/resource/32a35960-0bf0-4850-a974-638039279510/view/5dc31b56-34e7-4bcb-aa1b-2dfb3eee83e6" frameBorder="0"> </iframe>
//   )
// }

// function Libraries(props){
//   return(
//     <iframe width="700" height="400" src="https://data.gov.sg/dataset/libraries/resource/5dc4c609-49e7-4bd4-99b7-f43a95675683/view/624a709d-d700-4e55-abba-e3a79a0aa9af" frameBorder="0"> </iframe>
//   )
// }

// function Map(props){
//   const smth = props.smth;
//   if (smth){

//   }
// }

function Activities(){
  return (
    <div>
    <Header />
    <div className = "flex h-screen">
        <p className = "text-center m-auto ">
          <h1 className = "mb-2">Activities</h1>
          <body>Find out more about fun and enriching activities around you!</body>

          <br/>
          <iframe width="700" height="400" src="https://data.gov.sg/dataset/libraries/resource/5dc4c609-49e7-4bd4-99b7-f43a95675683/view/624a709d-d700-4e55-abba-e3a79a0aa9af" frameBorder="0"> </iframe>
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
          <div class = "inline-flex space-x-16">
            <button class = "bg-white h-10 px-5 rounded-lg flex items-center text-center text-sm rounded-md  hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg">Sliver Infocomm Activities</button>
            <button class = "bg-white h-10 px-5 rounded-lg flex items-center text-center text-sm rounded-md  hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg">Fitness Facilities</button>
            <button class = "bg-white h-10 px-5 rounded-lg flex items-center text-center text-sm rounded-md  hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg">Libraries</button>
          </div>
          
          <div><br/>

          <button class = "border-2 border-gray-400 bg-white px-5 w-full rounded-lg flex items-center text-left text-sm rounded-md  hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg">
            Jurong West ActiveSG Sports Centre
            <br/>
            Jurong West Street 93
          </button>
          <br/>

          <button class = "border-2 border-gray-400 bg-white px-5 w-full rounded-lg flex items-center text-left text-sm rounded-md  hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg">
            Jurong West Public Library
            <br/>
            648346 Jurong West Central 3
          </button>
          <br/>

          <button class = "border-2 border-gray-400 bg-white px-5 w-full rounded-lg flex items-center text-left text-sm rounded-md  hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg">
            Jurong West ActiveSG Sports Centre
            <br/>
            Jurong West Street 93
          </button>
          <br/>

          <button class = "border-2 border-gray-400 bg-white px-5 w-full rounded-lg flex items-center text-left text-sm rounded-md  hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg">
            Jurong West ActiveSG Sports Centre
            <br/>
            Jurong West Street 93
          </button>
          <br/>

          </div>

          <body>1 of 5 </body> 
          <button class = "text-sm hover:scale-105 "> Next {'>'} </button>
          <br/>



        </p>
      </div>
      </div>
    );

  }
  export default Activities;
  