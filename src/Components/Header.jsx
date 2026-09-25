import React from 'react'

const Header = ({ nombre,Profesion}) => {
  return (
    <header>
        <h1>{nombre}</h1>
        <p>{Profesion}</p>

        <nav>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
        </nav>
    </header>
  )
}

export default Header