import Header from "../components/Header";
import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import covidPic from "../assets/images/covidPic.jpg"
import pharmacyPic from "../assets/images/pharmacyPic.png"
import eldercarePic from "../assets/images/eldercarePic.jpg"

function HealthcareDetails() {

  const location = useLocation();
  let navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="h-min">
      <div className="flex h-1/3 justify-start">
        <button className = "m-0 p-0"  onClick={() => navigate(-1)}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2889/2889708.png"
            class="mx-8 w-10 h-10"
            alt=""
          /></button>
        <h1 className="text-left mt-3 mb-5">
          <text className="text-blue-700">{location.state.name}</text>
        </h1>
      </div>

        <div className="h-min flex justify-center">

          {/* left */}
          <div>
            {/* photo */}
            <img
              src={location.state.type == "covid" ? covidPic : location.state.type == "pharmacy" ? pharmacyPic: location.state.type == "eldercare"? eldercarePic: <div></div>}
              class="py-10 px-10 max-w-2xl h-auto w-full"
              alt="Jurong Medical Centre Pharmacy"
            />
            {/* location icon */}
            <div className="flex px-10 justify-start">
              <img
                src="https://cdn-icons-png.flaticon.com/128/450/450016.png"
                class="w-4 h-4 mt-2"
                alt="Location icon"
              />
              <h3 class="ml-2">Location</h3>
            </div>

            {/* location */}
            <div>
              <p class="py-5 px-10 w-fit">
                {location.state.address}
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
          <div class="py-10 mx-10 w-1/2 h-min">
            {/* box */}
            <div className="border-2 bg-white px-5 w-full rounded-lg drop-shadow-lg shadow shadow-gray-500/40">
            {/* line 1 */}
            <div class="pb-2 pt-5 px-2 text-left">
              <h4>Website</h4>
            </div>
            {/* line 2 */}
            <div class="flex px-2 item-center">
              {/* globe icon */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/52/52349.png"
                class="w-6 h-6 mt-2 mr-2"
                alt="Globe icon"
              />
              {/* website url */}
              
              <button class="mt-1 px-2 underline text-lg font-normal font-['Roboto'] py-0 my-0 text-left" onClick = {event => {window.open(location.state.link === ""? "https://www.google.com": location.state.link)}}>{location.state.link === ""? "https://www.google.com": location.state.link}</button>
              {/* exit icon */}
              {/* <img
                src="https://cdn-icons-png.flaticon.com/512/3580/3580189.png"
                class="w-4 h-4 mt-2 ml-28"
                alt="Exit icon"
              /> */}
            </div>
            {/* line 3 */}
            <div class=" pt-5 px-2 text-left ">
              <h4>Opening Hours</h4>
            </div>
            {/* line 4 */}
            <div class="flex mb-5">
            <div class="text-left pl-2 py-2 pr-10">
              <p>Monday, 10am-9pm
                <br />
                Tuesday, 10am-9pm
                <br />
                Wednesday, 10am-9pm
                <br />
                Thursday, 10am-9pm
                <br />
              </p>
            </div>
            <div class="text-left px-2 py-2">
              <p>
                Friday, 10am-9pm
                <br />
                Saturday, 10am-9pm
                <br />
                Sunday, 10am-9pm
                <br />
              </p>
            </div>
            </div>
          </div>

            <div className="flex flex-col justify-center items-center mt-16 h-1/2 border-2 bg-white px-5 w-full rounded-lg drop-shadow-lg shadow shadow-gray-500/40 py-12">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2592/2592898.png"
                class="w-20 h-20"
                alt="first aid kit"
              />
              <button class="mt-12 subpixel-antialiased p-4 text-gray-800 rounded-lg transition ease-in-out delay-150 bg-blue-300 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-md duration-200" onClick={(event) =>  window.open(location.state.link)}>
                Schedule Appointment
              </button>
              <p class="w-56 mt-4 text-center text-gray-500 text-xs font-thin">
                Click to schedule an appointment with {location.state.name}
              </p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>);
}
export default HealthcareDetails;
