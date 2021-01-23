import React from 'react'
import SignUpHeader from "./SignUpHeader";
import SignUpForms from "./SignUpForms";
import { FaUserPlus } from "react-icons/fa";


function SignUp({ setBox } ) {
  return (
    <div className="w-5/6 h-auto md:w-6/12 lg:w-4/12">
      <SignUpHeader
        title="Sign up now"
        pikin={() => {
          <div className="border border-2 border-aqua">
            <FaUserPlus color="lightgray" size="60px" />
          </div>;
        }}
        disc="FIll in the form below to get instant access:"
      />
      <SignUpForms setBox={setBox} />
    </div>
  );
}

export default SignUp
