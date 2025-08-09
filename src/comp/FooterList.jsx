import React from 'react'

const FooterList = ({text,className}) => {
  return (
    <div>
        <li className={`text-lg text-white font-jost text-medium border-r border-[#fff] pr-[30px] ${className}`} >{text}</li>
    </div>
  )
}

export default FooterList