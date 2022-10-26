import Header from "../components/Header";
import Bus from "../assets/icons/Bus.png";
import Coronavirus from "../assets/icons/Coronavirus.png";
import Pharmacy from "../assets/icons/Hospital 3.png";
import Elderly from "../assets/icons/Grandfather.svg";
import Boxes from "../components/Boxes";
import GMaps from "../components/GMaps";
import React from "react";

function Healthcare() {
  const url1 = 'https://storage.googleapis.com/swe-silverfun-app.appspot.com/retail-pharmacy-locations-kml.kml';
  const url2 = 'https://storage.googleapis.com/swe-silverfun-app.appspot.com/ELDERCARE.kml';
  const url3 = 'https://storage.googleapis.com/swe-silverfun-app.appspot.com/AED_Locations.kml';

  const [state1, setState1] = React.useState(true);
  const [state2, setState2] = React.useState(false);
  const [state3, setState3] = React.useState(false);


  return (
    <div>
      <Header />
      <div className="flex h-screen">
        <p className="text-center m-auto">
          <h1>Healthcare Services</h1>
          <body>Find out more about healthcare services you might need around <br />you, and other necessary information like details on how to make appointments!</body>

          <br />
          <div class="justify-center">
            <div className="w-max-3xl">
              <GMaps url1={url1} url2={url2} url3={url3} state1={state1} state2={state2} state3={state3} className="w-max-3xl" />
            </div>          
            </div>
          <br />

          {/* <div class="align middle">
            <input
              class="border-2 border-gray-300 bg-white h-10 px-5 w-80 rounded-lg text-sm focus:outline-none shadow"
              type="text"
              id="header-search"
              placeholder="Search for healthcare services near you"
              name="s"
            />
          </div> */}

          {/* <p class="text-sm text-gray-400 italic">Alternatively, filter through the services by pressing one of the buttons below.</p> */}

          <br />
          <div class="inline-flex space-x-9">

            <button class="bg-white h-10 px-5 rounded-lg flex items-center text-center text-md rounded-md  hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg">
              <div class="flex flex-row space-x-1">
                <img src={Pharmacy} class="object-scale-down h-25 w-7" />
                <div>Pharmacies</div>
              </div>
            </button>

            <button class="bg-white h-10 px-5 rounded-lg flex items-center text-center text-md rounded-md  hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg">
              <div class="flex flex-row space-x-1">
                <img src={Elderly} class="object-scale-down h-25 w-7" />
                <div>Eldercare Services</div>
              </div>
            </button>

            <button class="bg-white h-10 px-5 rounded-lg flex items-center text-center text-md rounded-md  hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg">
              <div class="flex flex-row space-x-1">
                <img src={Coronavirus} class="object-scale-down h-25 w-7" />
                <div>COVID-19 Services</div>
              </div>
            </button>

          </div>

          <div>

            <br />
            <Boxes icon={Pharmacy} text1="National Healthcare Group Pharmacy (Pioneer)" text2="648201 Jurong West Street 61" time="20 Min"></Boxes>
            <br />
            <Boxes icon={Pharmacy} text1="Jurong Medical Centre Pharmacy" text2="648346 Jurong West Central 3" time="24 Min"></Boxes>
            <br />
            <Boxes icon={Elderly} text1="Central 24-HR Clinic-Pioneer North" text2="959 Jurong West Street 92, 01-160, Singapore 640959" time="26 Min"></Boxes>
            <br />
            <Boxes icon={Coronavirus} text1="THK SAC @ Boon Lay" text2="Blk 190 Boon Lay Drive #01-242, Singapore 640190" time="26 Min"></Boxes>
            <br />

          </div>

          <body> 1 of 5 </body>
          <button class="text-sm hover:scale-105 "> Next {'>'} </button>
          <br />
        </p>
      </div>
    </div>
  );
}
export default Healthcare;