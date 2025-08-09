import React from 'react'
import Container from '../comp/Container'
import Flex from '../comp/Flex'
import Image from '../comp/Image'
import footerLogo from './../assets/footerLogo.png'
import FooterList from '../comp/FooterList'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='pt-20 pb-10 bg-[#00413D]'>
        <Container>
                <Image className='m-auto' src={footerLogo}/>
                <ul className='flex gap-x-6 justify-center py-[60px]'>
                    <FooterList text='Home' />
                    <FooterList text='About' />
                    <FooterList text='Services' />
                    <FooterList text='Blog' />
                    <FooterList className='!border-0' text='Contacts' />
                </ul>
                <ul className='flex gap-x-3 justify-center py-[60px] border-b border-[ffffffcc] pb-[60px]'>
                    <li className='w-[40px] h-[40px] rounded-full bg-[#E5745D] flex justify-center items-center'><FaFacebookF className='text-white'/></li>
                    <li className='w-[40px] h-[40px] rounded-full bg-[#E5745D] flex justify-center items-center'><FaInstagram className='text-white'/></li>
                    <li className='w-[40px] h-[40px] rounded-full bg-[#E5745D] flex justify-center items-center'><FaTiktok className='text-white'/></li>
                </ul>
                <p className='pt-10 text-xs text-center text-white font-normal font-jost'>Copyright © 2025 Design By Eng Dacar. All rights reserved.</p>
        </Container>
    </section>
  )
}

export default Footer