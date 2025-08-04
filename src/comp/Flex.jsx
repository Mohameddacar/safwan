// src/comp/Container.jsx
import React from 'react'

const  Container = ({ children, className }) => {
  return (
    <div className={`flex ${className}`}>
      {children}
    </div>
  )
}

export default Container
