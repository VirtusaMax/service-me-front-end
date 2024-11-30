import React from 'react'
import Services from '../section/service/Services'
import AboutUs from '../section/about/AboutUs'
import StandardLayout from '../components/layout/StandardLayout'




const Home = () => {
  return (
    <div className='flex flex-col bg-white max-w-[1600px]'>
      <StandardLayout>
      <AboutUs/>
      <Services/>
      </StandardLayout>
    
    </div>
  )
}

export default Home