import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { Component } from "react";
import ToggleButton from "../components/ToggleButton";
import Stack from '@mui/material/Stack';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import addNotification from "react-push-notification";
import Button from "../components/Button"
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function Notifications() {
  const [notificationState, setNotificationState] = React.useState("")

  const notification1 = ()=>{
    addNotification({
      title: 'SilverFun',
      message: 'Notifications enabled',
      duration:'4000',
      native: 'true'
    })

    Store.addNotification({
      title: "SilverFun",
      message: "Notifications enabled",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 4000,
        onScreen: true
      }
    });
    
    setNotificationState(true)
  }

  return (
      <div>
        <Header />
        <ReactNotifications />
        <div className="flex h-screen">
          <p className="text-center m-auto">
            <h1>Alerts and Notifications</h1>
            <br></br>
            <br></br>
            <Button classNames={'w-fit bg-white mb-6 drop-shadow-none border border-black opacity-50 text-lg'}  text="Notify" onClickHandler={() => notification1()}/>
            <div>
              <div class="w-full text-black flex items-center justify-between">
                <h2>Alerts</h2>
              </div>
              <br></br>

              <div class="w-full text-black flex items-center justify-between space-x-3">
                <h5>Upcoming healthcare appointment</h5>
                <div>
                  <React.Fragment>
                    <ToggleButton label=" " onClick={()=> notification1()}/>
                  </React.Fragment>
                </div>
              </div>

              <br></br>
              <div class="w-full text-black flex items-center justify-between">
                <h5>Upcoming courses and events</h5>
                <div>
                  <React.Fragment>
                    <ToggleButton label="  " onClick={()=>notification1()}/>
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
                    <ToggleButton label="   " onClick={()=> notification1()}/>
                  </React.Fragment>
                </div>
              </div>
              <br></br>

              <div class="w-full text-black flex items-center justify-between">
                <h5>New healthcare statistics</h5>
                <div>
                  <React.Fragment>
                    <ToggleButton label="    " onclick={()=>notification1()}/>
                  </React.Fragment>
                  <br></br>
                </div>
              </div>
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