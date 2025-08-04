import React from 'react'
import List from './comp/List'
import { Button } from './comp/Button'
import Container from './comp/Container'
import Flex from './comp/Flex'
import Image from './comp/Image'
import ImageBanner from './assets/banner1.png'
import Navber from './Layout/Navber'
import Banner from './Layout/Banner'
import Services from './Layout/Services'
import About from './Layout/About'
import ProgressBar from './Layout/ProgressBar'

const App = () => {
 

  return (
    <>
    <Navber />
    <Banner />
    <Services />
    <About />
    <ProgressBar />

</>
  )
}

export default App