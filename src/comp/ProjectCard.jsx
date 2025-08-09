import React from 'react'
import Image from './Image'
import ProjectImage from '../assets/projectImage.png'
import SubHeading from './SubHeading'
import Heading from './Heading'
import Flex from '../comp/Flex'

import { FaArrowRight } from "react-icons/fa";
<<<<<<< HEAD
const ProjectCard = ({text1,descr,para,date,read}) => {
=======
const ProjectCard = ({text1,descr,para}) => {
>>>>>>> 67d1157df4e0185bdb36876f7b350c2bc79e4068
  return (
    <div className='w-[370px] bg-white shadow-lg'>
        <Image src={ProjectImage}/>
        <div className='p-[30px]'>
<<<<<<< HEAD
            
            <Flex className='justify-between'>
              <h6 className='text-base font-medium text-[#E5745D] font-vol pb-[10px]'>{text1}</h6>
              <p className='text-base font-medium text-[#00413D] font-vol pb-[10px]'>{date}</p>
            </Flex>
=======
            <h6 className='text-base font-medium text-[#E5745D] font-vol pb-[10px]'>{text1}</h6>
>>>>>>> 67d1157df4e0185bdb36876f7b350c2bc79e4068
            <h5 className='text-[#00413D] text-2xl font-semibold font-vol pb-[10px]'>{descr}</h5>
            <p className='text-[#00413D]  text-[16px]font-normal font-jost pb-6'>{para}</p>
            <div>
                <Flex className='items-center gap-x-2 text-[#00413D]  text-lg font-semibold font-vol'>
<<<<<<< HEAD
                    <h5>{read}</h5>
=======
                    <h5>View Case Studies</h5>
>>>>>>> 67d1157df4e0185bdb36876f7b350c2bc79e4068
                <FaArrowRight />
                </Flex>

            </div>
        </div>

    </div>
  )
}

export default ProjectCard