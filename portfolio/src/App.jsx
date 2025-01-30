import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from "./components/Hero"
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AboutMe from './components/About'

function App() {

  return (
      <div className="wrapper">
        <Header/>
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
  )
}

export default App
