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

  const [topLibraries, setTopLibraries] = React.useState(null);
  const [topHawkers, setTopHawkers] = React.useState(null);
  const [topFitness, setTopFitness] = React.useState(null);
  const [display, setDisplay] = React.useState(null);

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

  //hawker
  const hawkerData = new Blob([JSON.stringify(hawker, null, 2)], {
    type: "application/json",
  });

  const hawkerForm = new FormData();
  hawkerForm.append("data", hawkerData, "libraries.geojson");
  hawkerForm.append("lat", "1.3483");
  hawkerForm.append("lng", "103.6831");

  const hawkeroptions = {
    method: "POST",
    body: hawkerForm,
  }

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

  //library
  useEffect(() => {
    axios.post("https://silverfun-backend.limsui.repl.co", libform, liboptions)
      .then(response => {
        console.log("libraries");
        // console.log(libraryData)
        // console.log(response.data);
        setTopLibraries(
          [[response.data[0].properties.Name, response.data[0].properties.ADDRESSSTREETNAME],
          [response.data[1].properties.Name, response.data[1].properties.ADDRESSSTREETNAME],
          [response.data[2].properties.Name, response.data[2].properties.ADDRESSSTREETNAME],
          [response.data[3].properties.Name, response.data[3].properties.ADDRESSSTREETNAME],
          [response.data[4].properties.Name, response.data[4].properties.ADDRESSSTREETNAME]])
        console.log(topLibraries);
        setLoading(false)
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  //hawker
  // useEffect(() => {
  //   axios.post("https://silverfun-backend.limsui.repl.co", hawkerForm, hawkeroptions)
  //     .then(response => {
  //       console.log("hawker");
  //       console.log(response.data);
  //       setTopHawkers(
  //         [[response.data[0].properties.Name, response.data[0].properties.ADDRESSSTREETNAME],
  //         [response.data[1].properties.Name, response.data[1].properties.ADDRESSSTREETNAME],
  //         [response.data[2].properties.Name, response.data[2].properties.ADDRESSSTREETNAME],
  //         [response.data[3].properties.Name, response.data[3].properties.ADDRESSSTREETNAME],
  //         [response.data[4].properties.Name, response.data[4].properties.ADDRESSSTREETNAME]])
  //       console.log(topHawkers);
  //       setLoading(false)
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
        setTopFitness(
          [[response.data[0].properties.Name, response.data[0].properties.ADDRESSSTREETNAME],
          [response.data[1].properties.Name, response.data[1].properties.ADDRESSSTREETNAME],
          [response.data[2].properties.Name, response.data[2].properties.ADDRESSSTREETNAME],
          [response.data[3].properties.Name, response.data[3].properties.ADDRESSSTREETNAME],
          [response.data[4].properties.Name, response.data[4].properties.ADDRESSSTREETNAME]])
        console.log(topFitness);
        setLoading(false)
      })
      .catch(error => {
        console.log(error);
      });
  }, [])


  // useEffect(() => {
  //   // Should not ever set state during rendering, so do this in useEffect instead.
  //   setTopLibraries(allowedState);
  // }, []);

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
            <button class="bg-white h-10 px-5 rounded-lg flex items-center text-center text-md rounded-md  hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg">
              <div class="flex flex-row space-x-1">
                <img src={Food} class="object-scale-down h-25 w-7" />
                <div>Hawker Centres</div>
              </div>
            </button>

            <button class="bg-white h-10 px-5 rounded-lg flex items-center text-center text-md rounded-md  hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg">
              <div class="flex flex-row space-x-1">
                <img src={Squats} class="object-scale-down h-25 w-7" />
                <div>Fitness Facilities</div>
              </div>
            </button>

            <div>
              <button class="bg-white h-10 px-5 rounded-lg flex items-center text-center text-md rounded-md  hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg">
                <div class="flex flex-row space-x-1">
                  <img src={Book} class="object-scale-down h-25 w-7" />
                  <div>Libraries</div>
                </div>
              </button>
            </div>
          </div>
          {isLoading ? <div>Loading</div> : <div>
            <br />
            <Link to={"/ActivityDetails"}
              state={{ name: topLibraries[0][0], address: topLibraries[0][1] }}
            >
              <Boxes icon={Book} text1={topLibraries[0][0]} text2={topLibraries[0][1]} time="20 Min"></Boxes>
            </Link>
            <br />
            <Link to={"/ActivityDetails"}
              state={{ name: topLibraries[1][0], address: topLibraries[1][1] }}
            >
              <Boxes icon={Book} text1={topLibraries[1][0]} text2={topLibraries[1][1]} time="23 Min"></Boxes></Link>
            <br />
            <Link to={"/ActivityDetails"}
              state={{ name: topLibraries[2][0], address: topLibraries[2][1] }}
            >
              <Boxes icon={Book} text1={topLibraries[2][0]} text2={topLibraries[2][1]} time="25 Min"></Boxes>
            </Link>
            <br />
            <Link to={"/ActivityDetails"}
              state={{ name: topLibraries[3][0], address: topLibraries[3][1] }}
            >
              <Boxes icon={Book} text1={topLibraries[3][0]} text2={topLibraries[3][1]} time="25 Min"></Boxes></Link>
            <br />
            <Link to={"/ActivityDetails"}
              state={{ name: topLibraries[4][0], address: topLibraries[4][1] }}
            >
              <Boxes icon={Book} text1={topLibraries[4][0]} text2={topLibraries[4][1]} time="25 Min"></Boxes>
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
