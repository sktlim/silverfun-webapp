import { useState } from "react";


import Header from "../components/Header";
import { TextField } from '@mui/material';

import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";


function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div>
      <Header />

      <div className="flex-vertical h-30 align-middle mb-5">
        <h1 className="text-center m-auto text-yellow">
          <span>Welcome To Silver</span>
          <span className="text-black">Fun</span>
        </h1>
        <h3 className="text-center m-auto text-grey">
          Please enter your details
        </h3>
      </div>

      <div className="flex justify-evenly ">
        <div className="max-w-4xl mx-10 ">
          <img src={require('../assets/signup-page-art.png')} alt="Elderly exercising"/>
        </div>
        <div className="flex w-1/3">
          <div className="container mx-20 bg-blue-100 w-full rounded-xl shadow p-8 m-10">
            <div className="my-5">
              <h3>E-mail</h3>
              <TextField fullWidth id="outlined-basic" label="Please Enter Email" variant="outlined" 
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}/>
            </div>
            <div>
              <h3>Password</h3>
              <TextField fullWidth id="outlined-basic" label="Please Enter Password" variant="outlined" 
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}/>
            </div>
            <button class=" mt-10 bg-white h-15 w-full rounded-lg align-middle items-center justify-center text-2xl rounded-md  hover:scale-105 transition-all duration-150 ease-linear drop-shadow-lg" onClick={login}>Log in</button>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Login;