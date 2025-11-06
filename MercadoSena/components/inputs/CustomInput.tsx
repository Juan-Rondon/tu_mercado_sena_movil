import React from 'react';

interface Props {
    type: "text" | "password" | "email" | "number";
    className?: string;
    placeholder?: string;
    required?: "true" | "false";

}

const CustomInput = ({type, className, placeholder, required}: Props) => {
 
 if (required === 'true') {
   return (
    <input
      type={type}
      className={`font-Opensans-bold mt-16 mx-10 text-2xl text-primary-950 text-center border-spacing-52 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${className}`}
      placeholder={placeholder} required
    />
  ) 
 }
 
    return (
    <input
      type={type}
      className={`font-Opensans-bold mt-16 mx-10 text-2xl text-primary-950 text-center border-spacing-52 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${className}`}
      placeholder={placeholder}
    />
  )
}

export default CustomInput