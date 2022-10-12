import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { Component } from "react";
import ToggleButton from "../components/ToggleButton";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Notifications() {
    return (
    <div>
    <Header />
    <div className = "flex h-screen">
        <p className = "text-center m-auto">
          <h1>Alerts and Notifications</h1>
          <br></br>
          <br></br>

          <div>
          <div class="w-full text-black flex items-center justify-between">
            <h2>Alerts</h2>
          </div>
          <br></br>

          <div class="w-full text-black flex items-center justify-between">
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
        </p>
    </div>
    <Stack direction="row" spacing={4}>
    <Button style={{ marginLeft: 1050 }} variant="outlined" color="error">Cancel</Button>
    <Button variant="contained" color="success">Save Changes</Button>
    </Stack>
    <br></br>
    <br></br>
    <Footer />
    </div>
    );
}
export default Notifications;