import React from 'react'
import Container from './../comp/Container'
import Flex from './../comp/Flex'
import Image from '../comp/Image'
import logo from '../assets/hormariyelogo.png'
import Cv from '../assets/DacarCv.pdf'

import List from '../comp/List'
import { Button } from '../comp/Button'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <div>
        <section className='py-[18px]'>
            <Container>
               <Flex className='items-center'>
                <div className='w-3/12'>
                    <Image src={logo} />
                </div>
                <div className='w-6/12 '>
                    <ul className='flex gap-x-12 justify-center items-center'>
                        <Link to='/'><List text='Home' /></Link>
                        <Link to='/about'><List text='About' /></Link>
                        <Link to='/services'><List text='Services' /></Link>
                        <Link to='/project'><List text='Projects' /></Link>
                        <Link to='/contact'><List text='Contact' /></Link>
                    </ul>
                </div>
                <div className='w-3/12 text-end'>
                    <a href={Cv}><Button  text='Explore More ' /></a>
                </div>
               </Flex>
            </Container>
        </section>
    </div>
  )
}

export default Navber