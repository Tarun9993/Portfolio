import React from 'react'
import { Link } from 'react-scroll'
import { SparklesPreview } from './Components/SparklesPreview'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
const App = () => {
  return (
    <div>
     <Navbar />
      <SparklesPreview />
      <div id='contact'>
      <Contact />
      </div>
    </div>
  )
}

export default App
