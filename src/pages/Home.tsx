import React from 'react'
import Services from '../section/service/Services'
import AboutUs from '../section/about/AboutUs'
import Navbar from '../components/custom-components/Navbar'
import HowItWorks from '../components/custom-components/HowItWorks'
import HeroSection from '../components/custom-components/HeroSection'
import Footer from '../components/custom-components/Footer'
import Register from '../section/register_section/Register'
import FAQPage from './faq_page/FaqPage'


const Home = () => {
  return (
    <div className='flex flex-col bg-white max-w-[1600px]'>
      
      <Navbar/>
      <HeroSection/>
      <AboutUs/>
      <Services/>
      <Register/>
      <HowItWorks/>
      <Footer />
      <FAQPage/>
 
    </div>
  )
}

export default Home;