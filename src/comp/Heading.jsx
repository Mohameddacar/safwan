import React from 'react'

const Heading = ({text,className}) => {
  return (
    <div>
        <h2 className={`w-[522px] mx-auto font-vol font-medium text-center  pt-3 text-[50px] ${className}`}>
            {text}
        </h2>
    </div>
  )
}

export default Heading