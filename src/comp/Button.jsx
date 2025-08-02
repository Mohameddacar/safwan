import React from 'react'

export const Button = ({text,className}) => {
  return (
    <div>
        <button className={`relative after:absolute after:top-[5px] after:left-[5px] after:w-[95%] after:h-[87%] after:content-[""] after:border-2 py-6 px-11  text-lg text-white font-jost bg-secondary ${className}`}>{text}</button>
    </div>
  )
}
