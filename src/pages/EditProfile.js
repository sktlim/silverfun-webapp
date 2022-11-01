import Header from "../components/Header";
import Footer from "../components/Footer";

import React from "react";
import { useState } from "react";
import { TextField } from '@mui/material';
// import { updateEmail, updatePassword, onAuthStateChanged, reauthenticateWithCredential } from "firebase/auth";
// import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

import {useAuth} from "../AuthContext.js"

function EditProfile() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  // const [error, setError] = useState("")
  const { currentUser, updateemail, updatepassword } = useAuth()

  // const [user,setUser] = useState({});
  const navigate = useNavigate();
  console.log(currentUser);
  // const updateemail = async () => {
  //   try {
  //     const user = await updateEmail(
  //       user,
  //       loginEmail,
  //     );
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // const updatepassword = async () => {
  //   try {
  //     const user = await updatePassword(
  //       user,
  //       loginPassword
  //     );
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  function update() {

    const promises = []
    // setLoading(true)
    // setError("")
    if (loginEmail !== currentUser.email) {
      promises.push(updateemail(loginEmail))
    }
    if (loginPassword) {
      promises.push(updatepassword(loginPassword))
    }

    Promise.all(promises)
      .then(() => {
        navigate("/Login");
      })
      .catch((error) => {
        // setError("Failed to update account");
        console.log(error);
      })

  }

  // const update = React.createClass({
  //   onClick: function(event){
  //     updateemail();
  //     updatepassword();
  //   }
  // })

  return (
    <div>
      <Header />
      <div class = "text-center m-auto">
        <h1>Edit Profile</h1>
      </div>
      <div className="bg-blue-100 h-min w-5/6 m-auto my-5 rounded-2xl drop-shadow-lg flex p-4">
      
    {/* <div className="flex h-screen"> */}
      {/* <div className=""> */}
          <div class = "flex mx-auto">
            <div className="flex flex-col w-96 space-y-3">
              
              <div class = "font-bold">Name:</div>
              <TextField fullWidth id="email" label="Please Enter Username" variant="outlined"></TextField>

              <div class = "font-bold">Email:</div>
              <TextField fullWidth id="email" label="Please Enter New Email" variant="outlined" defaultValue={currentUser.email}
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }} />
              
              <div class = "font-bold">Password:</div>
              <TextField fullWidth id="email" label="Please Enter New Password" variant="outlined"
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }} />


              <div class = "font-bold">Phone Number:</div>
              <TextField fullWidth id="email" label="Please Enter Username" variant="outlined"></TextField>
              
              <button class=" mt-10 bg-blue-300 h-15 w-full rounded-lg align-middle items-center justify-center text-xl rounded-md  hover:drop-shadow-lg transition-all duration-150 ease-linear" onClick={update}>Update</button>

            </div>
          </div>
      </div>
      <br/>
      <Footer />
    </div>
  );
}
export default EditProfile;