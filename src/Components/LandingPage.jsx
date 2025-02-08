import React from 'react'
import Navbar from './Navbar'
import { SparklesPreview } from './SparklesPreview'
import About from './About'
import Contact from './Contact'


const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <SparklesPreview />
      {/* <About /> */}
      <Contact />
   
    </div>
  )
}

export default LandingPage
