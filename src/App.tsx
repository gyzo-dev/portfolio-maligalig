import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './components/pages/about/About'
import Projects from './components/pages/projects/Projects'
import Contact from './components/pages/contact/Contact'
import Hero from './components/pages/hero/Hero'
import './App.css'


function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />

    </div>
  )
}

export default App
