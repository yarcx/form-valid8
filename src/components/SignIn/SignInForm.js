import React from 'react'
import Button from '../Button'
import {FaDoorOpen} from 'react-icons/fa'
import { useForm } from "react-hook-form";

function SignInForm() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="p-5 form">
        <div className="mb-4">
          <input
            type="text"
            name="Username"
            ref={register({ required: true, maxLength: 20 })}
            placeholder="UserName"
            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            name="password"
            ref={register}
            placeholder="Password"
            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />
        </div>
        <div className="flex items-center justify-start mb-4">
          <input
            type="checkbox"
            name="password"
            ref={register}
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
