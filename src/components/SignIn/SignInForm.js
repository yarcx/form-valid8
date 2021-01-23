import React from 'react'
import Button from '../Button'
import {FaDoorOpen} from 'react-icons/fa'
import { useForm } from "react-hook-form";

function SignInForm( {setBox} ) {
  const { register, handleSubmit, errors } = useForm();
  const userValue = JSON.parse(localStorage.getItem("user"))
  const onSubmit = (value, e) => {
    userValue.map(user => {
      if (!value.username && !value.password) {
        errors.username = true
      }
      if (user.username === value.username) {
        setBox('Success')
        e.target.reset()
      } else {
        errors.username = true
      }
    })
  }

    
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="p-5 form">
        <div className="mb-4">
          <input
            type="text"
            name="username"
            ref={register({ required: true, maxLength: 10 })}
            placeholder="UserName"
            className={`w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors 
            duration-200 ease-in-out bg-white  rounded outline-none  
            ${
              errors.username
                ? "focus:border-red-600 focus:ring-2 focus:ring-red-600 border border-red-600"
                : "focus:border-green-500 focus:ring-2 focus:ring-green-200 border border-gray-300"
            } 
            `}
          />
          {errors.username && (
            <p className="text-red-600">The username field is required</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="password"
            name="password"
            ref={register({ required: "required", maxLength: 4 })}
            placeholder="Password"
            className={`w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors 
            duration-200 ease-in-out bg-white  rounded outline-none  
            ${
              errors.username
                ? "focus:border-red-600 focus:ring-2 focus:ring-red-600 border border-red-600"
                : "focus:border-green-500 focus:ring-2 focus:ring-green-200 border border-gray-300"
            } 
            `}
          />
          {errors.password && (
            <p className="text-red-600">The password field is required</p>
          )}
        </div>

        <div className="flex items-center justify-start mb-4">
          <input
            type="checkbox"
            name="checkbox"
            placeholder="Password"
            className="mr-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />
          <p>Remember Me</p>
        </div>

        <div className="mb-4">
          <Button bgColor="bg-blue-500" hovCol="bg-blue-700">
            <FaDoorOpen /> Sign in!
          </Button>
        </div>
        <div className="flex items-center justify-end mb-4 text-blue-600">
          <a href="/">Forgot your password?</a>
        </div>
      </form>
    );
}

export default SignInForm
