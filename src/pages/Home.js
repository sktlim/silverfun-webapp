import Header from "../components/Header";
import Footer from "../components/Footer";
import recommendationPic from "../assets/images/recommendationPic.png"
import RecommendedItem from "../components/Home/RecommendedItem";
import AED from "../components/AED";
import HealthStats from "../components/Home/HealthStats";
import Button from "../components/Button";
import ActivitiesPopup from "../components/Home/ActivitiesPopup";
import HealthcarePopup from "../components/Home/HealthcarePopup";
import EmptyPopup from "../components/Home/EmptyPopup";
import ActivityPin from "../assets/icons/ActivityPin.svg"
import HealthcarePin from "../assets/icons/HealthcarePin.svg";
import GMaps from "../components/GMaps";
import PlaceholderMap from "../assets/images/SGmap.svg"
import ActivityFlags from "../assets/images/ActivitesIcons.svg"
import HealthcareFlags from "../assets/images/HealthcareIcons.svg"
import React, { useState } from 'react'
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function Home() {
  const url1 = 'https://storage.googleapis.com/swe-silverfun-app.appspot.com/gyms-sg-kml.kml';
  const url2 = 'https://storage.googleapis.com/swe-silverfun-app.appspot.com/ELDERCARE.kml';
  const url3 = 'https://storage.googleapis.com/swe-silverfun-app.appspot.com/AED_Locations.kml';

  const [state1, setState1] = React.useState(true);
  const [state2, setState2] = React.useState(false);
  const [state3, setState3] = React.useState(false);

  const [mapFilter, setMapFilter] = useState("none");
  const ActivityFilter = true;
  const HealthcareFilter = false;
  return (
    <div>
      <div className="relative bg-blue-100 h-min pb-20">
        <Header />
        <ReactNotifications />
        <div className="absolute w-full flex justify-end">
          <AED />
        </div>
        <div className="flex w-full justify-center">
          <div >
            <h1 className="text-center mb-2">
              <text className="text-yellow">Silver</text>
              Fun
            </h1>
            <h4 className="text-center mb-5">Your one-stop platform for eldercare services</h4>
            <div className="flex justify-center">
              <p className="text-center text-gray-600 w-8/12">Click the filters on the right of the map to see what activities or healthcare facilities are around you!</p>
            </div>
          </div>
        </div>
        <div className="mt-20 flex justify-evenly w-full mx-10">
          <div className="relative flex justify-center item-center text-center bg-white px-10 m-auto overflow-auto">
            <GMaps url1={url1} url2={url2} url3={url3} state1={state1} state2={state2} state3={state3} className="w-max"/>
          </div>
          <div className="w-2/6 flex justify-center">
            <div className="flex flex-col justify-right">
            <Button classNames={`w-fit bg-white mb-6 drop-shadow-none border border-black opacity-50 text-lg + ${mapFilter === "Activities" ? 'opacity-100 ' : ''}`} icon={ActivityPin} text="  Activities" onClickHandler={() => setMapFilter(mapFilter === "Activities" ? "none" : "Activities")} />
            <Button classNames={`w-fit mb-16 bg-white mb-9 drop-shadow-none border border-black opacity-50 text-lg + ${mapFilter === "Healthcare" ? 'opacity-100 ' : ''}`} icon={HealthcarePin} text=" Healthcare Services" onClickHandler={() => setMapFilter(mapFilter === "Healthcare" ? "none" : "Healthcare")} />
            
            {mapFilter === "Activities" ? <ActivitiesPopup /> : mapFilter === "Healthcare" ? <HealthcarePopup /> : <EmptyPopup />}
            </div>
          </div>
        </div>
      </div>
      <div className="h-min w-full mt-15">
        <h2 className="p-10 text-center italic">Recommended For <text className="text-yellow">You</text>
        </h2>
        <div className="flex justify-evenly">

          <RecommendedItem
            timing="3"
            title="Neighbourhood Fitness Corner"
            description="Clock in some exercises with the equipments available!"
            type="Fitness"
            pic={recommendationPic}
            onClickHandler={event => window.location.href = '/ActivityDetails'}
          />
          <RecommendedItem
            timing="10"
            title="National University Hospital"
            description="Book an appointment for your regular health checkup."
            type="Hospital"
            pic={recommendationPic}
            onClickHandler={event => window.location.href = '/HealthcareDetails'}
          />
          <RecommendedItem
            timing="15"
            title="Clementi Public Library"
            description="Browse and enjoy the extensive collection of books here! "
            type="Library"
            pic={recommendationPic}
            onClickHandler={event => window.location.href = '/ActivityDetails'}
          />
        </div>
        <HealthStats />
      </div>
      <Footer />
    </div>
  );
}
export default Home;