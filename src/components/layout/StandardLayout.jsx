import React from 'react'
import Navbar from '../custom-components/Navbar'




function StandardLayout({children}) {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  
  )
}

export default StandardLayout
