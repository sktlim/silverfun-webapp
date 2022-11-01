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
      <div className="flex h-screen">
        <div className="">
          <div></div>
          <div className="flex-col m-4">
            <h1 className="m-4">Edit Profile</h1>
            <h2 className="m-4">Name</h2>
            <TextField fullWidth id="name" label="Name" variant="outlined" />

            <h2 className="m-4">Email</h2>
            <TextField fullWidth id="email" label="Please Enter New Email" variant="outlined" defaultValue={currentUser.email}
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }} />
            <h2 className="m-4">Password</h2>
            <TextField fullWidth id="email" label="Please Enter New Password" variant="outlined"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }} />
            <button class=" mt-10 bg-white h-15 w-full rounded-lg align-middle items-center justify-center text-2xl rounded-md  hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg" onClick={update}>Update</button>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default EditProfile;