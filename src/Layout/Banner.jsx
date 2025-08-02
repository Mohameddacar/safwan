import React from 'react'
import Container from '../comp/Container'
import { Button } from '../comp/Button'

const Banner = () => {
  return (
    <div>
        <section className='group overflow-hidden  z-20 relative bg-[#00413D] bg-no-repeat bg-cover bg-center w-full py-[221px]'>
            <div className='group-hover:right-0 -z-10 absolute top-0 right-full w-5/12 h-full bg-banner bg-no-repeat bg-cover bg-center '></div>
            <Container>
                <h1 className='text-white font-bold font-voll text-[100px]'>Hello! <span className='block'>I’m Mohamed  Dacar</span></h1> 
                <p className='pt-4 pb-10 leading-8 w-[670px] text-xl text-[#ffffff80] font-jost'>I’am freelancer <span className='text-white'>UI/UX Desogner</span> based in Somalia who loves to craft attractive design experiences for the web.</p>
                <Button text='Contact Me'/>
            </Container>
        </section>
    </div>
  )
}

export default Banner