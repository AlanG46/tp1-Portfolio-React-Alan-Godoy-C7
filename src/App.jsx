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
    nombre="Alan Godoy"
    Profesion="Estudiante de programcion"
    />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <footer />
    </>
  )
}

export default App
