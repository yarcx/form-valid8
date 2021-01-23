import React from 'react'
import SignInHeader from "./SignInHeader";
import SignInForm from './SignInForm'
function SingIn({setBox}) {
  
  
  return (
    <div className="w-5/6 h-auto md:w-6/12 lg:w-4/12">
      <SignInHeader
        title="Login to our site"
        disc="Enter username and password to log on"
      />
      <SignInForm setBox={setBox} />
    </div>
  );
}

export default SingIn 
