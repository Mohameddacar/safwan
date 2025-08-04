import React from 'react'
import Container from '../comp/Container'
import Flex from '../comp/Flex'
import Image from '../comp/Image'
import AboutOne from '../assets/about1.png'
import AboutTwo from '../assets/about2.png'
import SubHeading from '../comp/SubHeading'
import Heading from '../comp/Heading'
import Paragraph from '../comp/Paragraph'
import { Button } from '../comp/Button'

const About = () => {
  return (
        <section className='px-[80px]'>
            <Container>
                <Flex>
                    <div className='w-1/2'>
                       <Flex className='justify-between'>
                         <Image src={AboutOne} />
                        <div>
                            <Image className='pb-[30px]' src={AboutTwo} />
                            <Image src={AboutTwo} />
                        </div>
                       </Flex>
                    </div>
                    <div className='w-1/2'>
                      <div className='pl-[30px] '>
                        <SubHeading className='!text-left' text='About Me'/>
                      <Heading className='!text-left w-[660px]' text='I Enjoy Solving Problems With Scalable Solutions' />
                      <Paragraph className='!pt-1' text='Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur aeci velit, sed quia non numquam eius modi tempora incidunt lao magnam aliquam quaerat voluptatem reprehenderit.'/>
                      <Paragraph className=' pt-[16px] !pb-[50px]' text='Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur aeci velit, sed quia non numquam eius modi tempora incidunt lao magnam aliquam quaerat voluptatem reprehenderit.'/>
                      <Button className=' ' text='Download CV' />
                      </div>
                    </div>
                </Flex>
            </Container>
        </section>
  )
}

export default About