import React, { useState } from 'react'

const ProjectCard = ({Titulo, descripcion,detalle}) => {
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
                {detalle}
            </p>
        )}
    </article>
  )
}

export default ProjectCard