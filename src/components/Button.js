import React from 'react'

function Button({ children, bgColor, hovCol }) {
  return (
      <button
          type='submit'
      className={`flex items-center justify-center w-full px-6 py-2 text-lg text-white ${bgColor} 
      border-0 rounded transition-colors duration-200 ease-in-out focus:outline-none hover:${hovCol} hover:opacity-80`}
    >
      {children}
    </button>
  );
}

export default Button
