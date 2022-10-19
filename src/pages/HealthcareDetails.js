import Header from "../components/Header";
import React from "react"
import { Link } from "react-router-dom";

function HealthcareDetails() {
  return (
    <div>
    <Header />
    <div className = "flex h-1/3 justify-start">
      <Link to = "/Healthcare">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2889/2889708.png"
        class="mt-2 mx-8 w-10 h-10"
        alt="back icon"
      /></Link>
      <h1 className = "text-left mb-5">
        <text className="text-blue-700">Jurong Medical Centre Pharmacy</text>
      </h1>
    </div>

    <div className = "flex justify-center">

      {/* left */}
      <div>
        {/* photo */}
        <img
        src="https://www.healthcare.com.sg/wp-content/uploads/2016/07/jurong-medical-centre.jpg"
        class="py-10 px-10 max-w-2xl h-auto w-full"
        alt="Jurong Medical Centre Pharmacy"
        />
        {/* location icon */}
        <div className = "flex px-10 justify-start">
          <img
          src="https://cdn-icons-png.flaticon.com/128/450/450016.png"
          class="w-4 h-4 mt-2"
          alt="Location icon"
          />
          <h3 class = "ml-2">Location</h3>
        </div>

        {/* location */}
        <div>
          <p class = "py-5 px-10">
          60 Jurong West Central 3, #1-8, Singapore 648346
          </p>
        </div>

        {/* JWL location */}
        <div>
          <img
          src="https://github.com/sktlim/silverfun-webapp/blob/hanyu/src/assets/images/Jurong%20Medical%20Center%20Location.png?raw=true"
          class="px-10 py-5 max-w-2xl h-auto w-full"
          alt="Jurong Medical Center Google Maps"
          />
        </div>

      </div>

      {/* right */}
      <div class = "py-10 px-10 w-1/2">
        {/* box */}
        <div className = "border-2 bg-white px-5 w-full rounded-lg drop-shadow-lg shadow shadow-gray-500/40">
          {/* line 1 */}
          <div class = "py-2 px-2 text-left underline">
            <h4>Website</h4>
          </div>
          {/* line 2 */}
          <div class = "flex px-2">
            {/* globe icon */}
            <img
            src="https://cdn-icons-png.flaticon.com/512/52/52349.png"
            class="w-4 h-4 mt-2"
            alt="Globe icon"
            />
            {/* website url */}
            <p class = "mt-1 px-2">http://www.jmc.com.sg</p>
            {/* exit icon */}
            <img
            src="https://cdn-icons-png.flaticon.com/512/3580/3580189.png"
            class="w-4 h-4 mt-2 ml-28"
            alt="Exit icon"
            />
          </div>
          {/* Contact number */}
          <div class = "py-2 px-2 text-left underline">
            <h4>Contact Number</h4>
          </div>
          <div class = "flex px-2">
            {/* telephone icon */}
            <img
            src="https://cdn-icons-png.flaticon.com/128/483/483947.png"
            class="w-4 h-4 mt-2"
            alt="telephone icon"
            />
            {/* telephone number */}
            <p class = "mt-1 px-2">6716 2000</p>
            
          </div>
          {/* line 3 */}
          <div class="py-2 px-2 text-left underline">
            <h4>Opening Hours</h4>
          </div>
          {/* line 4 */}
          <div class = "text-left px-2 py-2">
            <p>Monday, 8am-5:30pm
            <br/>
            Tuesday, 8am-5:30pm
            <br/>
            Wednesday, 8am-5:30pm
            <br/>
            Thursday, 8am-5:30pm
            <br/>
            Friday, 8am-5:30pm
            <br/>
            Saturday, CLOSED
            <br/>
            Sunday, CLOSED
            <br/>
            </p>
          </div>
        </div>

        <div className = "flex flex-col justify-center items-center mt-16 h-1/2 border-2 bg-white px-5 w-full rounded-lg drop-shadow-lg shadow shadow-gray-500/40">
          <img
          src="https://cdn-icons-png.flaticon.com/128/2592/2592898.png"
          class="w-20 h-20"
          alt="first aid kit"
          />  
          <button class = "mt-16 subpixel-antialiased p-4 text-gray-800 rounded-lg transition ease-in-out delay-150 bg-blue-300 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-md duration-200">
            Schedule Appointment
          </button>
          <p class = "w-48 mt-4 text-center text-gray-500 text-xs font-thin">
          Click to schedule an appointment with Jurong Medical Centre
          </p>
        </div>
      </div>

    </div>

    </div>
  );
  }
  export default HealthcareDetails;
