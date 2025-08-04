import React from 'react'

const Paragraph = ({text,className}) => {
  return (
    <div>
        <p className={`font-jost font-normal text-base text-[#00413D] ${className}`}>
            {text}
         </p>
    </div>
  )
}

export default Paragraph