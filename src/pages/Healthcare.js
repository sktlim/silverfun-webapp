import Header from "../components/Header";
import Bus from "../assets/icons/Bus.png";
import Coronavirus from "../assets/icons/Coronavirus.png";
import Pharmacy from "../assets/icons/Hospital 3.png";
import Elderly from "../assets/icons/Grandfather.svg";
import Boxes from "../components/Boxes";
import GMaps from "../components/GMaps";
import React, {useEffect} from "react";
import Footer from "../components/Footer";
import { eldercareServices } from "../assets/geoJSON/eldercareServices";
import Squats from "../assets/icons/Squats.png";
import Book from "../assets/icons/Book.png";
import Food from "../assets/icons/Food.png";
import { Link } from "react-router-dom";
import { hawker } from "../assets/geoJSON/hawker"
import { gyms } from "../assets/geoJSON/gyms"
import axios from 'axios';


function Healthcare() {
  const url1 = 'https://storage.googleapis.com/swe-silverfun-app.appspot.com/retail-pharmacy-locations-kml.kml';
  const url2 = 'https://storage.googleapis.com/swe-silverfun-app.appspot.com/ELDERCARE.kml';
  const url3 = 'https://storage.googleapis.com/swe-silverfun-app.appspot.com/AED_Locations.kml';

  const [state1, setState1] = React.useState(true);
  const [state2, setState2] = React.useState(false);
  const [state3, setState3] = React.useState(false);

  const [filter, setFilter] = React.useState("eldercare");
  const [isLoading, setLoading] = React.useState(true)
  const [isRendering, setRendering] = React.useState(true)

  const [topEldercare, setTopEldercare] = React.useState(null);

  const topPharmacies = ([
  ["National Healthcare Group Pharmacy (Pioneer)", "26 Jurong West Street 61, Singapore 648201", "https://www.nup.com.sg/Pages/Our%20Clinics/our-clinics-pioneerp.aspx", "https://www.healthcare.com.sg/wp-content/uploads/2020/09/pioneer-polyclinic.jpg"],
  ["Jurong Medical Centre Pharmacy", "60 Jurong West Central 3, Singapore 648346", "https://www.nuhs.edu.sg/Care-in-the-Community/JMC/Pages/default.aspx", "https://www.healthcare.com.sg/wp-content/uploads/cache/images/2022/09/jurong-medical-centre/jurong-medical-centre-3326711444.jpg"],
  ["Guardian Pharmacy (Jurong Point 2)", "63 Jurong West Central 3, JP2, #B1- 27/28, 648331", "https://www.guardian.com.sg/", "https://media.karousell.com/media/photos/products/2020/12/8/guardian_health__beauty_1607396157_de4b2d86"],
  ["UNITY By FairPrice (UHJPT) Hyper Jurong Point", " 63 Jurong West Central 3, #03 - 01 Jurong Point, Singapore 648331", "https://unity.com.sg/", "https://findd.sg/custom/domain_1/image_files/sitemgr_photo_6492.jpg"],
  ["UNITY By FairPrice (JPT)", "1 Jurong West Central 2, #B1-9, Singapore 648886", "https://unity.com.sg/", "https://www.fairprice.com.sg/wp-content/uploads/2020/10/Unity-970x585-1.jpg"], Pharmacy, "pharmacy"])

  const topCovid = ([
    ["FAITH Clinic (Jurong West)", "762 Jurong West Street 75, Gek Poh Shopping Centre #02-256D, Singapore 640762", "https://www.faithmedical.sg/", "https://www.healthcare.com.sg/wp-content/uploads/2020/01/faith%E2%80%8B-clinic-jurong-west.jpg"],
    ["Hisemainn Medical Clinic", "276 Jurong West Street 25 #01-06, 640276", "https://www.healthhub.sg/directory/14/58398/hisemainn-medical-clinic--jurong-west-", "https://www.healthcare.com.sg/wp-content/uploads/cache/images/2022/09/hisemainn-medical-clinic-jurong-west/hisemainn-medical-clinic-jurong-west-3759265268.jpg"],
    ["Acumed Medical Group Jurong Point", "1 Jurong West Central 2, #B1A-19E, Jurong Point Shopping Centre, Singapore 648886", "https://acumed.com.sg/our_clinic/jurong-west/", "https://mcmscd.mercatus.com.sg/en/-/media/377A4E1FADB24F02AEE43D6CB3761D7A.ashx?rev=26dd9227c4354ae6afbcf85b227880ff&w=768&h=576"],
    ["Healthmark Pioneer Mall Clinic", "638 Jurong West Street 61, Pioneer Mall #02-08, Singapore 640638", "https://www.healthmark.com.sg/", "https://nestia-food.obs.ap-southeast-3.myhuaweicloud.com/201609/26/6792c5e6a290dcbe50b73c582c953a66.jpg"],
    ["TC Family Clinic Pte. Ltd.", "526 Jurong West Street 52, #01-325, Singapore 640526", "https://www.tcfamilyclinic.com/", "https://lh5.googleusercontent.com/p/AF1QipP_e0f8AOkxTSxlLfrZK815q6iHKM3U71sCgY6s=w408-h269-k-no"], Coronavirus, "covid"])

  const loadingOptions = ([
  ["loading", "loading", "loading"],
  ["loading", "loading", "loading"],
  ["loading", "loading", "loading"],
  ["loading", "loading", "loading"],
  ["loading", "loading", "loading"], "loading"])
  const [display, setDisplay] = React.useState(loadingOptions);

  //eldercare
  const eldercareData = new Blob([JSON.stringify(eldercareServices, null, 2)], {
    type: "application/json",
  });

  const eldercareform = new FormData();
  eldercareform.append("data", eldercareData, "libraries.geojson");
  eldercareform.append("lat", "1.3483");
  eldercareform.append("lng", "103.6831");

  const eldercareoptions = {
    method: "POST",
    body: eldercareform,
  }

  useEffect(() => {
    axios.post("https://silverfun-backend.limsui.repl.co", eldercareform, eldercareoptions)
      .then(response => {
        console.log("libraries");
        // console.log(libraryData)
        console.log(response.data);
        setTopEldercare(
          [[response.data[0].properties.Name, response.data[0].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[0].properties.ADDRESSSTREETNAME + " Singapore " + response.data[0].properties.ADDRESSPOSTALCODE, response.data[0].properties.HYPERLINK, response.data[0].properties.PHOTOURL],
          [response.data[1].properties.Name, response.data[1].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[1].properties.ADDRESSSTREETNAME + " Singapore " + response.data[1].properties.ADDRESSPOSTALCODE, response.data[1].properties.HYPERLINK, response.data[1].properties.PHOTOURL],
          [response.data[2].properties.Name, response.data[2].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[2].properties.ADDRESSSTREETNAME + " Singapore " + response.data[2].properties.ADDRESSPOSTALCODE, response.data[2].properties.HYPERLINK, response.data[2].properties.PHOTOURL],
          [response.data[3].properties.Name, response.data[3].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[3].properties.ADDRESSSTREETNAME + " Singapore " + response.data[3].properties.ADDRESSPOSTALCODE, response.data[3].properties.HYPERLINK, response.data[3].properties.PHOTOURL],
          [response.data[4].properties.Name, response.data[4].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[4].properties.ADDRESSSTREETNAME + " Singapore " + response.data[4].properties.ADDRESSPOSTALCODE, response.data[4].properties.HYPERLINK, response.data[4].properties.PHOTOURL], Elderly, "eldercare"])
        console.log(topEldercare);
        console.log(display);
        setLoading(false)
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  useEffect(() => {
    console.log(filter)
    if(filter === "eldercare" && isLoading === false){
      setDisplay(topEldercare)
      setRendering(false)
    }
    else if(filter === "pharmacy"){
      setDisplay(topPharmacies)
      console.log(display)
    }
    else if(filter === "covid"){
      setDisplay(topCovid)
      console.log(display)
    }
  }, [filter, isLoading]);


  return (
    <div>

    <Header />
    <div className = "flex h-min">
        <p className = "text-center m-auto">
          <h1>Healthcare Services</h1>
          <body>Find out more about healthcare services you might need around you, and other necessary information like details on <br/> how to make appointments!</body>

          <br />
          <div class="justify-center">
            <div className="w-max-3xl">
              <GMaps url1={url1} url2={url2} url3={url3} state1={state1} state2={state2} state3={state3} className="w-max-3xl" />
            </div>          
            </div>
          <br />

          <div class="inline-flex space-x-9">
            <button class={`bg-white h-10 px-5 rounded-lg flex items-center text-center text-md rounded-md + ${filter === "eldercare" ? 'border-2 border-gray-400 shadow-inner' : 'hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg'}`} onClick={event => setFilter("eldercare")} >
              <div class="flex flex-row space-x-1">
                <img src={Elderly} class="object-scale-down h-25 w-7" />
                <div>Eldercare Services</div>
              </div>
            </button>
            <button class={`bg-white h-10 px-5 rounded-lg flex items-center text-center text-md rounded-md + ${filter === "pharmacy" ? 'border-2 border-gray-400 shadow-inner' : 'hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg'}`} onClick={event => setFilter("pharmacy")} >
              <div class="flex flex-row space-x-1">
                <img src={Pharmacy} class="object-scale-down h-25 w-7" />
                <div>Pharmacies</div>
              </div>
            </button>

            <button class={`bg-white h-10 px-5 rounded-lg flex items-center text-center text-md rounded-md + ${filter === "covid" ? 'border-2 border-gray-400 shadow-inner' : 'hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg'}`} onClick={event => setFilter("covid")} >
              <div class="flex flex-row space-x-1">
                <img src={Coronavirus} class="object-scale-down h-25 w-7" />
                <div>COVID-19 Services</div>
              </div>
            </button>

          </div>

          {isRendering ? <div>Loading</div> : <div>
      {console.log('display')}
          {console.log(display)}
            <br />
            <Link to={"/HealthcareDetails"}
              state={{ name: display[0][0], address: display[0][1], link: display[0][2], photo: display[0][3], type: display[6]}}
            >
              <Boxes icon={display[5]} text1={display[0][0]} text2={display[0][1]} time="20 Min"></Boxes>
            </Link>
            <br />
            <Link to={"/HealthcareDetails"}
              state={{ name: display[1][0], address: display[1][1], link: display[1][2] , photo: display[1][3], type: display[6]}}
            >
              <Boxes icon={display[5]} text1={display[1][0]} text2={display[1][1]} time="23 Min"></Boxes></Link>
            <br />
            <Link to={"/HealthcareDetails"}
              state={{ name: display[2][0], address: display[2][1], link: display[2][2] , photo: display[2][3], type: display[6]}}
            >
              <Boxes icon={display[5]} text1={display[2][0]} text2={display[2][1]} time="25 Min"></Boxes>
            </Link>
            <br />
            <Link to={"/HealthcareDetails"}
              state={{ name: display[3][0], address: display[3][1], link: display[3][2] , photo: display[3][3], type: display[6]}}
            >
              <Boxes icon={display[5]} text1={display[3][0]} text2={display[3][1]} time="25 Min"></Boxes></Link>
            <br />
            <Link to={"/HealthcareDetails"}
              state={{ name: display[4][0], address: display[4][1], link: display[4][2] , photo: display[4][3], type: display[6]}}
            >
              <Boxes icon={display[5]} text1={display[4][0]} text2={display[4][1]} time="25 Min"></Boxes>
            </Link>
            <br />

          </div>}

          <body> 1 of 5 </body>
          <button class="text-sm hover:scale-105 "> Next {'>'} </button>
          <br />
        </p>
      </div>

      <Footer />
      </div>
    );
  }
  export default Healthcare;
