import React from "react";
import { FaKey } from "react-icons/fa";

function SignInHeader({ title, disc }) {
  return (
    <>
      <div className="flex items-center justify-between w-full p-5 header ">
        <div className="flex flex-col items-start justify-between w-5/6 h-full ">
          <h2 className="text-xl font-semibold text-black">{title}</h2>
          <p className="text-base font-normal text-black">{disc}</p>
        </div>
        <div className="w-1/6 h-full">
          {" "}
          <FaKey color="lightgray" size="60px" />
        </div>
      </div>
    </>
  );
}

export default SignInHeader;
