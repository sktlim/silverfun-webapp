import Header from "../components/Header";
import React, { useEffect } from "react";
import Squats from "../assets/icons/Squats.png";
import Book from "../assets/icons/Book.png";
import Bus from "../assets/icons/Bus.png";
import Boxes from "../components/Boxes";
import Food from "../assets/icons/Food.png";
import GMaps from "../components/GMaps";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { library } from "../assets/geoJSON/libraries";
import { hawker } from "../assets/geoJSON/hawker"
import { gyms } from "../assets/geoJSON/gyms"
import axios from 'axios';
import { displayPartsToString } from "typescript";



function Activities() {
  const url1 = String('https://storage.googleapis.com/swe-silverfun-app.appspot.com/gyms-sg-kml.kml');
  const url2 = "https://storage.googleapis.com/swe-silverfun-app.appspot.com/hawker-centres-kml.kml";
  const url3 = "https://storage.googleapis.com/swe-silverfun-app.appspot.com/libraries.kml";

  const [state1, setState1] = React.useState(true);
  const [state2, setState2] = React.useState(false);
  const [state3, setState3] = React.useState(false);

  const obj = {
    url1: url1,
    url2: url2,
    url3: url3,
    state1: true,
    state2: false,
    state3: true
  }

  const [filter, setFilter] = React.useState("library");
  const [isLoading, setLoading] = React.useState(true)
  const [isRendering, setRendering] = React.useState(true)

  const [topLibraries, setTopLibraries] = React.useState(null);

  const topHawkers = ([
  ["Boon Lay Place Market and Food Village", "221A Boon Lay Pl, Singapore 641221", "deliveroo.com.sg", ""],
  ["Jurong West 505 Market & Food Centre", "505 Jurong West Street 52, Singapore 640505", "deliveroo.com.sg", ""],
  ["Taman Jurong Food Centre", "3 Yung Sheng Rd, Singapore 618499", "foodpanda.sg", ""],
  ["Bukit Batok Street 11 Food", "155 Bukit Batok Street 11, #01-01, Singapore 650155", "foodpanda.sg", ""],
  ["Meng Soon Huat Food Centre", "359 Bukit Batok Street 31, #01-401 Block 359, Singapore 650359", "foodpanda.sg", ""], Food, "hawker"])

  const topFitness = ([
  ["Jurong West ActiveSG Gym", "20 Jurong West Street 93 Singapore 648965", "https://www.myactivesg.com/facilities/jurong-west-activesg-gym", "https://tinyurl.com/yt7w7dkm"],
  ["Amore Fitness @ Jurong Point 2", "63 Jurong West Central 3, #03-17, Singapore 648886", "https://amorefitness.com.sg", "https://tinyurl.com/34bmdjn5"],
  ["Jurong East ActiveSG Gym", "21 Jurong East Street 31 Singapore 609517", "https://www.myactivesg.com/facilities/jurong-east-activesg-gym", "https://www.myactivesg.com/-/media/SSC/Consumer/Images/Facilities/Jurong-East-ActiveSG-Gym/Jurong-East-ActiveSG-Gym1.ashx"],
  ["OMG Yoga", "134 Jurong Gateway Rd, Singapore 600134", "https://www.yogasingapore.net", "https://www.yogasingapore.net/wp-content/uploads/2014/08/privateyoga.jpg"], 
  ["Gold's Gym @ IBP Jurong East", "2 International Business Park, #01-05, Singapore 609930", "http://www.goldsgym.com.sg/ibp-jurong-east", "https://thegrandstand.com.sg/wp-content/uploads/2019/04/DSC01019.jpg"], Squats, "fitness"])

  const loadingOptions = ([
  ["loading", "loading", "loading"],
  ["loading", "loading", "loading"],
  ["loading", "loading", "loading"],
  ["loading", "loading", "loading"],
  ["loading", "loading", "loading"], "loading"])
  const [display, setDisplay] = React.useState(loadingOptions);

  //library
  const libraryData = new Blob([JSON.stringify(library, null, 2)], {
    type: "application/json",
  });

  const libform = new FormData();
  libform.append("data", libraryData, "libraries.geojson");
  libform.append("lat", "1.3483");
  libform.append("lng", "103.6831");

  const liboptions = {
    method: "POST",
    body: libform,
  }

  // //hawker
  // const hawkerData = new Blob([JSON.stringify(hawker, null, 2)], {
  //   type: "application/json",
  // });

  // const hawkerForm = new FormData();
  // hawkerForm.append("data", hawkerData, "libraries.geojson");
  // hawkerForm.append("lat", "1.3483");
  // hawkerForm.append("lng", "103.6831");

  // const hawkeroptions = {
  //   method: "POST",
  //   body: hawkerForm,
  // }

  //fitness
  const fitnessData = new Blob([JSON.stringify(gyms, null, 2)], {
    type: "application/json",
  });

  const fitnessForm = new FormData();
  fitnessForm.append("data", fitnessData, "libraries.geojson");
  fitnessForm.append("lat", "1.3483");
  fitnessForm.append("lng", "103.6831");

  const fitnessoptions = {
    method: "POST",
    body: fitnessForm,
  }

  //response.data[0].properties.Name, response.data[0].properties.ADDRESSBLOCKHOUSENUMBER, response.data[0].properties.ADDRESSSTREETNAME, response.data[0].properties.ADDRESSPOSTALCODE, response.data[0].properties.PHOTOURL
  //library


  useEffect(() => {
    axios.post("https://silverfun-backend.limsui.repl.co", libform, liboptions)
      .then(response => {
        console.log("libraries");
        // console.log(libraryData)
        console.log(response.data);
        setTopLibraries(
          [[response.data[0].properties.Name, response.data[0].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[0].properties.ADDRESSSTREETNAME + " Singapore " + response.data[0].properties.ADDRESSPOSTALCODE, response.data[0].properties.HYPERLINK, response.data[0].properties.PHOTOURL],
          [response.data[1].properties.Name, response.data[1].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[1].properties.ADDRESSSTREETNAME + " Singapore " + response.data[1].properties.ADDRESSPOSTALCODE, response.data[1].properties.HYPERLINK, response.data[1].properties.PHOTOURL],
          [response.data[2].properties.Name, response.data[2].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[2].properties.ADDRESSSTREETNAME + " Singapore " + response.data[2].properties.ADDRESSPOSTALCODE, response.data[2].properties.HYPERLINK, response.data[2].properties.PHOTOURL],
          [response.data[3].properties.Name, response.data[3].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[3].properties.ADDRESSSTREETNAME + " Singapore " + response.data[3].properties.ADDRESSPOSTALCODE, response.data[3].properties.HYPERLINK, response.data[3].properties.PHOTOURL],
          [response.data[4].properties.Name, response.data[4].properties.ADDRESSBLOCKHOUSENUMBER + " "+ response.data[4].properties.ADDRESSSTREETNAME + " Singapore " + response.data[4].properties.ADDRESSPOSTALCODE, response.data[4].properties.HYPERLINK, response.data[4].properties.PHOTOURL], Book, "library"])
        console.log(topLibraries);
        console.log(display);
        setLoading(false)
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  useEffect(() => {
    console.log(filter)
    if(filter === "library" && isLoading === false){
      setDisplay(topLibraries)
      setRendering(false)
    }
    else if(filter === "hawker"){
      setDisplay(topHawkers)
      console.log(display)
    }
    else if(filter === "fitness"){
      setDisplay(topFitness)
      console.log(display)
    }
  }, [filter, isLoading]);

  // //hawker
  // useEffect(() => {
  //   axios.post("https://silverfun-backend.limsui.repl.co", hawkerForm, hawkeroptions)
  //     .then(response => {
  //       console.log("hawker");
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },[])

  //fitness

  useEffect(() => {
    axios.post("https://silverfun-backend.limsui.repl.co", fitnessForm, fitnessoptions)
      .then(response => {
        console.log("fitness");
        console.log(response.data);
        
      })
      .catch(error => {
        console.log(error);
      });
  }, [])




  return (
    <div>

      <Header />
      <div className="flex h-min">
        <p className="text-center m-auto ">
          <h1 className="mb-2">Activities</h1>
          <body>Find out more about fun and enriching activities around you!</body>

          <br />
          <div className="w-max-3xl">
            <GMaps url1={url1} url2={url2} url3={url3} state1={state1} state2={state2} state3={state3} className="w-max-3xl" />
          </div>
          <br />

          {/* <div class="align middle">
            <input
              class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 w-72 rounded-lg text-sm focus:outline-none shadow"
              type="text"
              id="header-search"
              placeholder="Search for activities near you"
              name="s" />
          </div> */}

          <br />
          <div class="inline-flex space-x-9">
            <button class={`bg-white h-10 px-5 rounded-lg flex items-center text-center text-md rounded-md + ${filter === "library" ? 'border-2 border-gray-400 shadow-inner' : 'hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg'}`} onClick={event => setFilter("library")} >
              <div class="flex flex-row space-x-1">
                <img src={Book} class="object-scale-down h-25 w-7" />
                <div>Libraries</div>
              </div>
            </button>
            <button class={`bg-white h-10 px-5 rounded-lg flex items-center text-center text-md rounded-md + ${filter === "hawker" ? 'border-2 border-gray-400 shadow-inner' : 'hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg'}`} onClick={event => setFilter("hawker")} >
              <div class="flex flex-row space-x-1">
                <img src={Food} class="object-scale-down h-25 w-7" />
                <div>Hawker Centres</div>
              </div>
            </button>

            <button class={`bg-white h-10 px-5 rounded-lg flex items-center text-center text-md rounded-md + ${filter === "fitness" ? 'border-2 border-gray-400 shadow-inner' : 'hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg'}`} onClick={event => setFilter("fitness")} >
              <div class="flex flex-row space-x-1">
                <img src={Squats} class="object-scale-down h-25 w-7" />
                <div>Fitness Facilities</div>
              </div>
            </button>

          </div>
          {isRendering ? <div>Loading</div> : <div>
      {console.log('display')}
          {console.log(display)}
            <br />
            <Link to={"/ActivityDetails"}
              state={{ name: display[0][0], address: display[0][1], link: display[0][2], photo: display[0][3], type: display[6]}}
            >
              <Boxes icon={display[5]} text1={display[0][0]} text2={display[0][1]} time="20 Min"></Boxes>
            </Link>
            <br />
            <Link to={"/ActivityDetails"}
              state={{ name: display[1][0], address: display[1][1], link: display[1][2] , photo: display[1][3], type: display[6]}}
            >
              <Boxes icon={display[5]} text1={display[1][0]} text2={display[1][1]} time="23 Min"></Boxes></Link>
            <br />
            <Link to={"/ActivityDetails"}
              state={{ name: display[2][0], address: display[2][1], link: display[2][2] , photo: display[2][3], type: display[6]}}
            >
              <Boxes icon={display[5]} text1={display[2][0]} text2={display[2][1]} time="25 Min"></Boxes>
            </Link>
            <br />
            <Link to={"/ActivityDetails"}
              state={{ name: display[3][0], address: display[3][1], link: display[3][2] , photo: display[3][3], type: display[6]}}
            >
              <Boxes icon={display[5]} text1={display[3][0]} text2={display[3][1]} time="25 Min"></Boxes></Link>
            <br />
            <Link to={"/ActivityDetails"}
              state={{ name: topLibraries[4][0], address: display[4][1], link: display[4][2] , photo: display[4][3], type: display[6]}}
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
export default Activities;
