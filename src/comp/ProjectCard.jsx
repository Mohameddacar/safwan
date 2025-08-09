import React from 'react'
import Image from './Image'
import ProjectImage from '../assets/projectImage.png'
import SubHeading from './SubHeading'
import Heading from './Heading'
import Flex from '../comp/Flex'

import { FaArrowRight } from "react-icons/fa";
const ProjectCard = ({text1,descr,para,date,read}) => {
  return (
    <div className='w-[370px] bg-white shadow-lg'>
        <Image src={ProjectImage}/>
        <div className='p-[30px]'>
            
            <Flex className='justify-between'>
              <h6 className='text-base font-medium text-[#E5745D] font-vol pb-[10px]'>{text1}</h6>
              <p className='text-base font-medium text-[#00413D] font-vol pb-[10px]'>{date}</p>
            </Flex>
            <h5 className='text-[#00413D] text-2xl font-semibold font-vol pb-[10px]'>{descr}</h5>
            <p className='text-[#00413D]  text-[16px]font-normal font-jost pb-6'>{para}</p>
            <div>
                <Flex className='items-center gap-x-2 text-[#00413D]  text-lg font-semibold font-vol'>
                    <h5>{read}</h5>
                <FaArrowRight />
                </Flex>

            </div>
        </div>

    </div>
  )
}

export default ProjectCard