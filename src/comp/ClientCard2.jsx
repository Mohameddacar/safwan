import React from 'react'
import Image from './Image'
import ClientImage from './../assets/clients.png'
import Flex from './Flex'
import { FaStar } from 'react-icons/fa'

const ClientCard2 = () => {
  return (
    <Flex className='pt-10 items-center gap-x-[20px]'>
        <Image src={ClientImage}/>
        <div>
            <h3 className='text-[#00413D font-vol font-semibold text-xl'>Mohamed Dacar</h3>
            <p className='text-[#00413D font-jost font-normal text-sm pt-[5px] pb-3'>Software Engineer</p>
            <ul className='flex'>
                <li><FaStar className='text-[#E5745D] text-xs'/></li>
                <li><FaStar className='text-[#E5745D] text-xs'/></li>
                <li><FaStar className='text-[#E5745D] text-xs'/></li>
                <li><FaStar className='text-[#E5745D] text-xs'/></li>
                <li><FaStar className='text-[#E5745D] text-xs'/></li>
            </ul>
        </div>
    </Flex>
  )
}

export default ClientCard2