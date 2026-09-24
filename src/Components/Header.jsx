import React from 'react'

const Header = ({ nombre,Profesion}) => {
  return (
    <header>
        <h1>{nombre}</h1>
        <p>{Profesion}</p>
    </header>
  )
}

export default Header