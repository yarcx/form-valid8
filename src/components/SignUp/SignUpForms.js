import React from 'react'
import { FaUserPlus } from "react-icons/fa";
import Button from '../Button'
import { useForm } from "react-hook-form";

function SignUpForms() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    
    console.log(data)
  };
   
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="p-5 form">
        <div className="mb-4">
          <input
            type="text"
            name="YourName"
            ref={register({ required: true, maxLength: 20 })}
            placeholder="Your Name"
            className={`w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors 
            duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none ${
              errors.YourName
                ? "focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "focus:border-green-500 focus:ring-2 focus:ring-green-200"
            } 
            `}
          />
          <p className="text-red-600">
            {errors.YourName && "The Your Name field is required"}
          </p>
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="Username"
            ref={register({ required: true, maxLength: 20 })}
            placeholder="UserName"
            className={`w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors 
            duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none ${
              errors.Username
                ? "focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "focus:border-green-500 focus:ring-2 focus:ring-green-200"
            } 
            `}
          />
          <p className="text-red-600">
            {errors.Username && "The Username field is required"}
          </p>
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="Email"
            ref={register({ required: true })}
            placeholder="E-Mail Address"
            className={`w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors 
            duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none ${
              errors.Email
                ? "focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "focus:border-green-500 focus:ring-2 focus:ring-green-200"
            } 
            `}
          />
          <p className="text-red-600">
            {errors.Email  && "The Email field is required"}
          </p>
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            ref={register({ required: true })}
            placeholder="Password"
            className={`w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors 
            duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none ${
              errors.password
                ? "focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "focus:border-green-500 focus:ring-2 focus:ring-green-200"
            } 
            `}
          />
          <p className="text-red-600">
            {errors.password && "The Password field is required"}
          </p>
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password2"
            ref={register({ required: true })}
            placeholder="Confirm Password"
            className={`w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors 
            duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none ${
              errors.password2
                ? "focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "focus:border-green-500 focus:ring-2 focus:ring-green-200"
            } 
            `}
          />
          <p className="text-red-600">
            {errors.password2 && "The Second password field is required"}
          </p>
        </div>
        <div className="mb-4">
          <Button bgColor="bg-green-500" hovCol="bg-green-600">
            <FaUserPlus /> Register
          </Button>
        </div>
      </form>
    );
}

export default SignUpForms;
