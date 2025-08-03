import React from 'react'
import Image from './Image'
//import card1 from '../../public/card1.png'
import { FaArrowRight } from "react-icons/fa";

const Card = ({text,title,src}) => {
  return (
    <div className='group w-[370px] shadow-2xl py-[50px] pl-[30px]'>
        <Image src={src} />
        <h5 className='text-[#00413D] font-vol font-extrabold pt-[26px] pb-[15px] '>{title}</h5>
        <p  className='text-[#00413D] font-jost font-normal pt-3 w-[250px] pb-[30px] '>{text}</p>

        <FaArrowRight  className='group-hover:text-red-500 text-2xl' />
    </div>

  )
}

export default Card