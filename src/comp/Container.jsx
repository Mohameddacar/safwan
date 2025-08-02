import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`mx-w-container w-[1170px]  mx-auto ${className}`}>{children}</div>
  )
}

export default Container