import React, {useState} from 'react'
import './App.css';
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SingIn"
import Navbar from './components/Navbar';

function App() {
  
    const [Box, setBox] = useState("Register");
    console.log(Box);
  return (
    <>
      <Navbar setBox={setBox} />
      <div className="flex items-center justify-center h-screen ">
        {Box === "Register" && <SignUp />}
        {Box === "SignIn" && <SignIn />}
      </div>
    </>
  );
}

export default App;
