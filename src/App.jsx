import React from 'react'
import { Link } from 'react-scroll'
import { SparklesPreview } from './Components/SparklesPreview'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import About from "./Components/About";
import TimelineDemo from "./Components/TimelineDemo"
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
const App = () => {
  return (
    <div>
     <Navbar />
      <SparklesPreview />
      <div id="about">
     <About />
     </div>
     <div id="education">
     <TimelineDemo />
     </div>
     <div id="technologies">
     <Skills />
     </div>
     <div id="projects">
        <Projects />
      </div>
      <div id='contact'>
      <Contact />
      </div>
    </div>
  )
}

export default App
