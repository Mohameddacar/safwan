import React from 'react'
import Navber from './../Layout/Navber'
import Banner from './../Layout/Banner'
import ServicesLayout from './../Layout/ServicesLayout'
import ProgressBar from './../Layout/ProgressBar'
import AboutLayout from '../Layout/AboutLayout'
import ProjectLayout from '../Layout/ProjectLayout'
import Clients from '../Layout/Clients'
import Contact from '../Layout/Contact'
import Footer from '../Layout/Footer'
import Blog from './Blog'


const Home = () => {
  return (
    <>
    <Navber />
    <Banner />
    <ServicesLayout />
    <AboutLayout />
    <ProgressBar />
    <ProjectLayout />
    <Clients />
    <Contact />
    <Blog />
    <Footer />
    
    </>
  )
}

export default Home