import { useState } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Footer from './Components/Footer'


function App() {

  return (
    <>
    <Header 
    nombre="Alan Tobias Godoy"
    Profesion="Estudiante de programación"
    />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Footer />
    </>
  )
}

export default App
