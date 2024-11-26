import React from 'react'
import Services from '../section/service/Services'
import AboutUs from '../section/about/AboutUs'

const Home = () => {
  return (
    <div className='flex flex-col bg-white'>
      <AboutUs/>
      <Services/>
    </div>
  )
}

export default Home
