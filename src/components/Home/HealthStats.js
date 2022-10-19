import React from "react";
import searchIcon from "../../assets/icons/search.svg"
import { Link } from "react-router-dom";
import Cancers from "./Cancers";
import Hypertension from "./Hypertension";
import DALYs from "./DALYs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

const HealthStats = () => {
  const location = useLocation();
  return (
    <div className="bg-blue-100 h-min w-5/6 m-auto my-20 rounded-2xl drop-shadow-lg flex p-1">
      <div className="bg-white w-1/5 rounded-2xl drop-shadow flex flex-col p-3">
        <div className="flex items-center bg-gray-100 h-10 pr-16 w-full rounded-lg mr-1">
          <img src={searchIcon} className="p-3" alt="search" />
          <input
            class="h-full bg-gray-100 text-gray-900 text-sm focus:outline-none font-['Rubik']"
            type="text"
            id="header-search"
            placeholder="Search..."
            name="s" />
        </div>
        <p className="pt-8 px-5 text-gray-600 font-['Rubik']">
          <Link
            to="/DashboardCancers"
            className={`${location.pathname === "/" ? 'underline' : location.pathname === "/DashboardCancers" ? 'underline' : ''}`}>
            Cancers
          </Link>
        </p>
        <p className="pt-8 px-5 text-gray-600 font-['Rubik']">
          <Link
            to="/DashboardHypertension"
            className={`${location.pathname === "/DashboardHypertension" ? 'underline' : ''}`}>
            Hypertension
          </Link>
        </p>
        <p className="pt-8 px-5 text-gray-600 font-['Rubik']">
          <Link
            to="/DashboardDALYs"
            className={`${location.pathname === "/DashboardDALYs" ? 'underline' : ''}`}>
            DALYs
          </Link>
        </p>
      </div>
      <div className="w-full flex flex-col justify-center">
        <h2 className="p-10 text-center text-yellow">Health Statistics</h2>
        <div className="w-full h-min">
          <div>
            <Routes>
              <Route path='/' element={<Cancers />} />
              <Route path='/DashboardCancers' element={<Cancers />} />
              <Route path='/DashboardHypertension' element={<Hypertension />} />
              <Route path='/DashboardDALYs' element={<DALYs />} />
            </Routes>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HealthStats;
