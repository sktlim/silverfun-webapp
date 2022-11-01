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

  const notification1 = () => {
    addNotification({
      title: 'SilverFun',
      message: 'Notifications enabled',
      duration: '4000',
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
          <div className="bg-blue-100 h-min w-full m-auto rounded-2xl drop-shadow-lg flex p-7">
            <div class = "flex-col w-full m-auto">
              <div class = "inline-block align-middle">
          <Button classNames={'w-fit bg-white h-12 border border-black opacity-50 text-lg hover:drop-shadow-lg'} text="Notify Me" onClickHandler={() => notification1()} />
          </div>
          <br/>
          <div><br/>
            <div class="w-full text-black flex items-center justify-between">
              <h2>Alerts</h2>
            </div>
            <br></br>

            <div class="w-full text-black flex items-center justify-between space-x-3">
              <h5>Upcoming healthcare appointment</h5>
              <div>
                <React.Fragment>
                  <ToggleButton label=" " onClick={() => notification1()} />
                </React.Fragment>
              </div>
            </div>

            <br></br>
            <div class="w-full text-black flex items-center justify-between">
              <h5>Upcoming courses and events</h5>
              <div>
                <React.Fragment>
                  <ToggleButton label="  " onClick={() => notification1()} />
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
                  <ToggleButton label="   " onClick={() => notification1()} />
                </React.Fragment>
              </div>
            </div>
            <br></br>

            <div class="w-full text-black flex items-center justify-between">
              <h5>New healthcare statistics</h5>
              <div>
                <React.Fragment>
                  <ToggleButton label="    " onclick={() => notification1()} />
                </React.Fragment>
                <br></br>
              </div>
            </div>
          </div>
          </div>
          </div>
        </p>

      </div>
      
      <br />
      
        <Link to="/Home"><div class = "float-right pr-36">
          <div class = "flex flex-row space-x-4 max-w-max">
            
            <button class="bg-white rounded-lg text-md p-2 hover:bg-yellow drop-shadow-lg" >Save Changes</button>
            <button class="bg-white p-2 rounded-lg drop-shadow-lg hover:bg-red-700 ">Cancel</button>
          </div>
          </div>
        </Link>
        
      <br/>
      <br></br>
      <br></br>
      <Footer />
    </div>
    
    );
}
export default Notifications;