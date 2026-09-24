import React, { useState } from 'react'

const ProjectCard = ({Titulo, descripcion}) => {
    const [mostrarMas, setMostrarMas] = useState(false)
  return (
    <article>
        <h3>{Titulo}</h3>
        <p>{descripcion}</p>

        <button onClick={() => setMostrarMas(!mostrarMas)}>
            {mostrarMas ? 'ver menos' : 'Ver más'}
        </button>
        {mostrarMas && (
            <p>
                Este proyecto me ayudo a entender fundamentos de programación en c#,
                Permitiendome Avanzar mas en mi experiencia como desarrollador
            </p>
        )}
    </article>
  )
}

export default ProjectCard