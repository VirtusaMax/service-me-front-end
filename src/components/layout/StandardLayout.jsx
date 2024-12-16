import React from 'react'
import Navbar from '../custom-components/Navbar'
import Footer from '../custom-components/Footer'




function StandardLayout({children}) {
  return (
    <div>
      <Navbar/>
      {children}
  
    </div>
  
  )
}

export default StandardLayout
