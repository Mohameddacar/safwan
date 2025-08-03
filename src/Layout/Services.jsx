import React from 'react'
import Container from '../comp/Container'
import Flex from '../comp/Flex'
import Card from '../comp/Card'
import Card1 from '../../public/card1.png'
import Card2 from '../../public/card2.png'
import Card3 from '../../public/card3.png'


const Services = () => {
  return (
    <section className='pt-[220px] pb-[120px]'>
        <Container>
                    <h4 className="font-vol font-medium text-center text-[#E5745D] text-lg">
                    MY SERVICES
                    </h4>
                    <h2 className="w-[522px] mx-auto font-vol font-medium text-center  pt-3 text-[50px]">
                    Provide Wide Range of Digital Services
                    </h2>
                <Flex className='justify-between pt-10'>
                    <Card src={Card1} title='UI/UX Designer' text='Crafts user-friendly digital experiences by combining visual design and usability to ensure seamless interaction between users and products.'/>
                    <Card src={Card2} title='Full-Stack Developer' text='Builds both front-end and back-end applications, ensuring smooth functionality, performance, and integration across the entire tech stack.'/>
                    <Card src={Card3} title='Database Analyst' text='Analyzes, organizes, and manages data systems to improve data accuracy, reporting, and decision-making processes within organizations.'/>
                </Flex>
        </Container>
    </section>
  )
}

export default Services