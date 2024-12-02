import React from 'react'
import Services from '../section/service/Services'
import AboutUs from '../section/about/AboutUs'
import Navbar from '../components/custom-components/Navbar'
import Footer from '../components/custom-components/Footer'

const Home = () => {
  return (
    <div className='flex flex-col bg-white max-w-[1600px]'>
      <Navbar/>
      <AboutUs/>
      <Services/>
      <Footer />
    </div>
  )
}

export default Home