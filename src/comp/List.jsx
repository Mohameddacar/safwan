import React from 'react'

const List = ({text,className}) => {
  return (
    <div>

        <li className={`text-lg text-primary font-normal font-jost list-none hover:text-[#E5745D] duration-300 cursor-pointer ${className}`}>{text}</li>

    </div>
  )
}

export default List