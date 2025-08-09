import React from 'react'
import Container from '../comp/Container'
import Flex from '../comp/Flex'
import Image from '../comp/Image'
import contacts from './../assets/contacts.png'
import SubHeading from '../comp/SubHeading'
import Heading from '../comp/Heading'
import Input from '../comp/Input'
import { Button } from '../comp/Button'
const Contact = () => {
  return (
    <section className='py-[120px]'>
        <Container>
            <Flex className='items-center'>
                <div className='w-5/12'>
                    <Image src={contacts} />
                </div>
                <div className='w-7/12'>
                <SubHeading className='!text-left ' text='Get In Touch'/>
                <Heading className='!text-left w-auto' text='Feel Free To Contact'/>
                {/* Form Fields */}
                <Flex className="flex-wrap justify-between mt-6">
                    <Input placeholder="Enter Name" />
                    <Input placeholder="Enter Email" />
                    <Input placeholder="Phone" />
                    <Input placeholder="Address" />
                    <Input placeholder="Subject" full />
                </Flex>
                <Button text='Contact Us'/>                 
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Contact