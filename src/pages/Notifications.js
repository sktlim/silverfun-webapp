import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUs from "./AboutUs";
import Home from "./Home";
import Login from "./Login";
import React, { Component } from "react";
import ToggleButton from "../components/ToggleButton";
import { render } from "@testing-library/react";

function Notifications() {
    return (
    <div>
    <Header />
    <div className = "flex h-screen">
        <p className = "text-center m-auto">
          <h2>Alerts and Notifications</h2>
          <br></br>
          <br></br>
          <br></br>

          <div>
          <div class="w-full text-black flex items-center justify-between">
            <h3>Alerts</h3>
          </div>

          <div class="w-full text-black flex items-center justify-between">
            <body>Upcoming healthcare appointment</body>
            <div>
            <React.Fragment>
              <ToggleButton label="" />
            </React.Fragment>
            </div>
          </div>

          <br></br>
          <div class="w-full text-black flex items-center justify-between">
            <body>Upcoming courses and events</body>
            <div>
            <React.Fragment>
              <ToggleButton label=""/>
            </React.Fragment>
            </div>
          </div>

          <br></br>
          <br></br>
          <div class="w-full text-black flex items-center justify-between">
          <h3>Notifications</h3>
          </div>

          <div class="w-full text-black flex items-center justify-between">
          <body>Latest courses and events</body>
          <div>
            <React.Fragment>
              <ToggleButton label=""/>
            </React.Fragment>
            </div>
          </div>
          <br></br>

          <div class="w-full text-black flex items-center justify-between">
          <body>New healthcare statistics</body>
          <div>
            <React.Fragment>
              <ToggleButton label=""/>
            </React.Fragment>
            </div>
          </div>
          </div>
        </p>
    </div>
    </div>
    );
}
export default Notifications;