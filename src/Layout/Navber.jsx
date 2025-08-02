import React from 'react'
import Container from './../comp/Container'
import Flex from './../comp/Flex'
import Image from '../comp/Image'
import Logo from '../assets/logo.png'

import List from '../comp/List'
import { Button } from '../comp/Button'

const Navber = () => {
  return (
    <div>
        <section className='py-[18px]'>
            <Container>
               <Flex className='items-center'>
                <div className='w-3/12'>
                    <Image src={Logo} />
                </div>
                <div className='w-6/12 '>
                    <ul className='flex gap-x-12 justify-center'>
                        <List text='Home' />
                        <List text='About' />
                        <List text='Services' />
                        <List text='Blog' />
                        <List text='Contact' />
                    </ul>
                </div>
                <div className='w-3/12 text-end'>
                    <Button className='' text='Download CV' />
                </div>
               </Flex>
            </Container>
        </section>
    </div>
  )
}

export default Navber