import React from 'react'
import Container from '../comp/Container'
import BannerImage from '../assets/BannerImage.png'
import { Button } from '../comp/Button'

const Banner = () => {
  return (
    <section className="relative bg-[#0B3E51] w-full overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between py-20">
          
          {/* Left text side */}
          <div className="max-w-xl text-center md:text-left z-10">
            <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl leading-snug pb-5">
              We build digital product <br className="hidden md:block" /> for your success
            </h1>
            <p className="mt-4 text-white/80 text-base md:text-lg pb-[44px]">
            At Hormariye Technology, we craft cutting-edge digital products that help businesses innovate, grow, and succeed in a fast-changing world.
            </p>
            <Button  text='See More '/>
          </div>

          {/* Right image side */}
          <div className="mt-10 md:mt-0 z-10">
            <img
              src={BannerImage}
              alt="Banner Illustration"
              className="w-[300px] md:w-[400px] lg:w-[480px] object-contain"
            />
          </div>
        </div>
      </Container>

      {/* Curved white bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[100px] md:h-[120px] bg-white rounded-t-[50%] z-0" />
    </section>
  )
}

export default Banner
