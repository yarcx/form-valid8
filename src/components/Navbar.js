import React from 'react'

function Navbar({setBox}) {
    return (
      <header className="text-gray-600 bg-blue-300 body-font">
        <div className="container flex flex-wrap items-center justify-center w-full p-5 mx-auto md:flex-row">
          <nav className="flex flex-wrap items-center justify-between w-4/6 text-base md:2/6">
            
              <p
                onClick={() => setBox("SignIn")}
                className="cursor-pointer hover:text-gray-900"
              >
                SignIn
              </p>
            <p
              onClick={() => setBox("Register")}
              className="cursor-pointer hover:text-gray-900"
            >
              Sign Up
            </p>
          </nav>
        </div>
      </header>
    );
}

export default Navbar
