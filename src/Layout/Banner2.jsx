import React from 'react'
import Container from '../comp/Container'
import bannerImage from '../assets/bannerImage.png'

const Banner = () => {
  return (
    <section className="relative bg-[#0B3E51] w-full flex items-center justify-center min-h-[500px] overflow-hidden pb-0">
      <Container className="flex flex-col md:flex-row items-center justify-between w-full py-16 md:py-24">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
          <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6 max-w-xl">
            We build digital product for your success
          </h1>
        </div>
        <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0 z-10">
          <img src={bannerImage} alt="Banner Illustration" className="max-w-full h-auto w-[320px] md:w-[400px] lg:w-[480px]" />
        </div>
      </Container>
      {/* White curved bottom */}
      <div className="absolute left-0 right-0 bottom-0 h-32 md:h-40 bg-white rounded-t-[50%] z-0" style={{}}></div>
    </section>
  )
}

export default Banner