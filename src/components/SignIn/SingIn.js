import React from 'react'
import SignInHeader from "./SignInHeader";
import SignInForm from './SignInForm'
function SingIn() {
    return (
      <div className="w-4/12 h-auto ">
        <SignInHeader
          title="Login to our site"
          disc="Enter username and password to log on"
        />
        <SignInForm />
      </div>
    );
}

export default SingIn
