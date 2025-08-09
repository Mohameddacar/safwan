import React from 'react'
import Container from '../comp/Container'
import Flex from '../comp/Flex'
import SubHeading from '../comp/SubHeading'
import Heading from '../comp/Heading'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import ProjectCard from '../comp/ProjectCard'
import { Button } from '../comp/Button'


const BlogLayout = () => {
  return (
    <section className='py-[120px]'>
        <Container>
                <div>
                    <SubHeading text='Latest Blog' />
                    <Heading   text='Blog & Articles'/>
                </div>
            <Flex className='justify-between pt-10 pb-[60px]'>
                <ProjectCard text1='By Eng Mohamed Dacar ' date='Mar 8, 2022' descr="Creative & Interactive Design Campaign For Felix" para="Designed a user-friendly interface and crafted
                    engaging visuals to enhance brand experience." read='Read More Blogs'/>
                <ProjectCard text1='By Eng Ali Abdi' date='Mar 12, 2022' descr="Engaging Mobile Branding Strategy For Maxwell Coffee" para="Developed a sleek mobile experience with a
                focus on branding, usability, and flow." read='Read More Blogs'/>
                <ProjectCard text1='By Eng Fatima' date='Mar 18, 2022' descr="Responsive Web & Video Rollout For Carla’s Bakery" para="Built a responsive website with integrated
                video content to boost online presence." read='Read More Blogs'/>
            </Flex>
            <div className='text-center'><Button text='Read More'/></div>
        </Container>
    </section>
  )
}

export default BlogLayout