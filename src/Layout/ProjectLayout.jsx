import React from 'react'
import Container from '../comp/Container'
import Flex from '../comp/Flex'
import SubHeading from '../comp/SubHeading'
import Heading from '../comp/Heading'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import ProjectCard from '../comp/ProjectCard'
import { Button } from '../comp/Button'


const ProjectLayout = () => {
  return (
    <section>
        <Container>
            <Flex className='justify-between items-center'>
                <div>
                    <SubHeading className='!text-left' text='Recent Projects' />
                    <Heading className='!text-left'  text='My Recent Projects'/>
                </div>
                <Flex className='gap-x-5'>                  
                    <div className='group p-4 border border-black hover:bg-[#E5745D] duration-500 hover:border-transparent'><FaArrowRight className='text-black group-hover:text-white' /></div>
                    <div className='group p-4 border border-black hover:bg-[#E5745D] duration-500 hover:border-transparent'><FaArrowLeft className='text-black group-hover:text-white' /></div>
                </Flex>
               
            </Flex>
            <Flex className='justify-between pt-10 pb-[60px]'>
                <ProjectCard text1='Analytics, UI-Ux ' descr="Creative & Interactive Design Campaign For Felix" para="Designed a user-friendly interface and crafted
                    engaging visuals to enhance brand experience." read='View Case Study'/>
                <ProjectCard text1='Mobile App' descr="Engaging Mobile Branding Strategy For Maxwell Coffee" para="Developed a sleek mobile experience with a
                focus on branding, usability, and flow." read='View Case Study'/>
                <ProjectCard text1='Web Development' descr="Responsive Web & Video Rollout For Carla’s Bakery" para="Built a responsive website with integrated
                video content to boost online presence." read='View Case Study'/>

            </Flex>
            <div className='text-center'>
            <Button text='Explore More'/></div>
        </Container>
    </section>
  )
}

export default ProjectLayout