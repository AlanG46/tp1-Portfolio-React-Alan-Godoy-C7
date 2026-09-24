import React from 'react'

const ProjectCard = ({Titulo, descripcion}) => {
  return (
    <article>
        <h3>{Titulo}</h3>
        <p>{descripcion}</p>
    </article>
  )
}

export default ProjectCard