import React from 'react'

const SubHeading = ({text,className}) => {
  return (
    <div>
        <h4 className={`font-vol font-medium text-center text-[#E5745D] text-lg ${className}`}>
            {text}
         </h4>
    </div>
  )
}

export default SubHeading