import React from 'react'
import Services from '../section/service/Services'
import AboutUs from '../section/about/AboutUs'
import Header from '../components/custom-components/Header'

const Home = () => {
  return (
    <div className='flex flex-col bg-white max-w-[1600px]'>
      <Header/>
      <AboutUs/>
      <Services/>
    </div>
  )
}

export default Home
