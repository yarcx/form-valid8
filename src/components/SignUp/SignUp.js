import React from 'react'
import SignUpHeader from "./SignUpHeader";
import SignUpForms from "./SignUpForms";
import { FaUserPlus } from "react-icons/fa";


function SignUp() {
    return (
      <div className="w-4/12 h-auto ">
        <SignUpHeader
          title="Sign up now"
          pikin={() => {
            <div className="border border-2 border-aqua">
              <FaUserPlus color="lightgray" size="60px" />
            </div>;
          }}
          disc="FIll in the form below to get instant access:"
        />
        <SignUpForms />
      </div>
    );
}

export default SignUp
