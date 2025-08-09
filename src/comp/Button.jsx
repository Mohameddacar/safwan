import React from 'react'

export const Button = ({text,className}) => {
  return (
    <div>
        <button className={`relative after:absolute after:top-[5px] after:left-[5px] after:w-[92%] after:h-[79%] after:content-[""] after:border-2 py-3 px-5  text-lg text-white font-jost bg-[#94AF3C] ${className}`}>{text}</button>
    </div>
  )
}
