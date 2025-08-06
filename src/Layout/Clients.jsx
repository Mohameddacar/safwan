import React from 'react'
import Container from '../comp/Container'
import SubHeading from '../comp/SubHeading'
import Heading from '../comp/Heading'
import Flex from '../comp/Flex'
import ClientCard from '../comp/ClientCard'

const Clients = () => {
  return (
    <section className='py-[120px] bg-[#F9F4F1]'>
        <Container>
            <SubHeading text='Client Testimonial'/>
            <Heading text='Feedback From Client'/>
            <Flex className='justify-between'>
                <ClientCard />
                <ClientCard />
            </Flex>
        </Container>
    </section>
  )
}

export default Clients