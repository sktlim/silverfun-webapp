import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { Component } from "react";
import ToggleButton from "../components/ToggleButton";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {BrowserRouter as Router, Link} from 'react-router-dom';

function Notifications() {
    return (
    <router>
    <div>
    <Header />
    
    <div className = "flex h-screen">
        <p className = "text-center m-auto">
          <h1>Alerts and Notifications</h1>
          <br></br>
          <br></br>

          <div className="bg-blue-100 h-min w-full m-auto rounded-2xl drop-shadow-lg flex p-7">
          <div class="flex-col space-y-2 mx-48">
          <div class="text-black flex items-center justify-between">
            <h2>Alerts</h2>
          </div>
          <br></br>

          <div class="w-full text-black flex items-center justify-between space-x-3">
            <h5>Upcoming healthcare appointment</h5>
            <div>
            <React.Fragment>
              <ToggleButton label=" " />
            </React.Fragment>
            </div>
          </div>

          <br></br>
          <div class="w-full text-black flex items-center justify-between">
            <h5>Upcoming courses and events</h5>
            <div>
            <React.Fragment>
              <ToggleButton label="  "/>
            </React.Fragment>
            </div>
          </div>

          <br></br>
          <br></br>
          <div class="w-full text-black flex items-center justify-between">
          <h2>Notifications</h2>
          </div>
          <br></br>

          <div class="w-full text-black flex items-center justify-between">
          <h5>Latest courses and events</h5>
            <div>
            <React.Fragment>
              <ToggleButton label="   "/>
            </React.Fragment>
            </div>
          </div>
          <br></br>

          <div class="w-full text-black flex items-center justify-between">
          <h5>New healthcare statistics</h5>
            <div>
            <React.Fragment>
              <ToggleButton label="    "/>
            </React.Fragment>

            </div>
          </div>
          </div>
          <br></br>
        </div>
        
        </p>
        

    </div>
    <br/>
    <Link to="/Home">
      <Stack direction="row" spacing={4}>
        <Button style={{ marginLeft: 1050 }} variant="outlined" class = "bg-white hover:drop-shadow-lg p-2 rounded-lg">Cancel</Button>
        <Button variant="contained" class = "bg-yellow rounded-lg text-md p-2 hover:drop-shadow-lg" >Save Changes</Button>
      </Stack>
    </Link>
    <br></br>
    <br></br>
    <Footer />
    </div>
    
    </router>
    );
}
export default Notifications;