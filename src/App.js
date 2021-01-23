import React, { useState } from 'react'
import './App.css';
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SingIn"
import Navbar from './components/Navbar';
import SuccessPage from './components/SignUp/SuccessPage';

function App() {
  const [Box, setBox] = useState("Register");
  return (
    <>
      <Navbar setBox={setBox} />
      <div className="flex items-center justify-center h-screen ">
        {Box === "Register" && <SignUp setBox={setBox} />}
        {Box === "SignIn" && <SignIn  setBox={setBox} />}
      {Box === "Success" && <SuccessPage  />}
      </div>
    </>
  );
}

export default App;
