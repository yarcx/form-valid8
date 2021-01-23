import React from 'react'
import { FaUserPlus } from "react-icons/fa";
import Button from '../Button'
import { useForm } from "react-hook-form";

let data=[]

function SignUpForms( { setBox }) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (values, e) => {
    data.push(values)
    localStorage.setItem("user", JSON.stringify(data));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-5 form">
      <div className="mb-4">
        <input
          type="text"
          name="yourname"
          ref={register({ required: "required", maxLength: 10 })}
          placeholder="Your Name"
          className={`w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors 
            duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none ${
              errors.yourname
                ? "focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "focus:border-green-500 focus:ring-2 focus:ring-green-200"
            } 
            `}
        />
        <p className="text-red-600">
          {errors.yourname && "The Your Name field is required"}
        </p>
      </div>

      <div className="mb-4">
        <input
          type="text"
          name="username"
          ref={register({ required: true, maxLength: 10 })}
          placeholder="UserName"
          className={`w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors 
            duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none ${
              errors.username
                ? "focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "focus:border-green-500 focus:ring-2 focus:ring-green-200"
            } 
            `}
        />
        <p className="text-red-600">
          {errors.username && "The Username field is required"}
        </p>
      </div>

      <div className="mb-4">
        <input
          type="email"
          name="email"
          ref={register({ required: "required" })}
          placeholder="E-Mail Address"
          className={`w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors 
            duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none ${
              errors.email
                ? "focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "focus:border-green-500 focus:ring-2 focus:ring-green-200"
            } 
            `}
        />

        {errors.email && (
          <p className="text-red-600"> The Email field is required </p>
        )}
      </div>

      <div className="mb-4">
        <input
          type="password"
          name="password"
          ref={register({
            required: "required",
            minLength: {
              value: 4,
              message: "password must not be less than 8 character",
            },
          })}
          placeholder="Password"
          className={`w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors 
            duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none ${
              errors.password
                ? "focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "focus:border-green-500 focus:ring-2 focus:ring-green-200"
            } 
            `}
        />

        {errors.password && (
          <p className="text-red-600"> The Password field is required </p>
        )}
      </div>

      <div className="mb-4">
        <input
          type="password"
          name="password2"
          ref={register({
            required: true,
            minLength: {
              value: 4,
              message: "password must be greater than 8 characters",
            },
            validate: (value) => value.password === value.password2,
          })}
          placeholder="Confirm Password"
          className={`w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors 
            duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none ${
              errors.password2
                ? "focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "focus:border-green-500 focus:ring-2 focus:ring-green-200"
            } 
            `}
        />

        {errors.password2 && (
          <p className="text-red-600">The Second password field is required</p>
        )}

        {/* {errors.password2.register.validate &&  <p className="text-red-600"> "your password doessnt match"} </p> */}
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
