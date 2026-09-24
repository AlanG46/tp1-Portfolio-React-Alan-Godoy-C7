import React from 'react'
import ProjectCard from './projectcard'

const Projects = () => {
    const proyectos = [
        {
        id: 1,
        titulo: 'Sistema de gestion de stock',
        descripcion: 'Desarrollo de sistema de gestion de stock en C# winforms',
        detalle: 'Este proyecto lo hice para poder defender mi parcial de programación 2'
        },
        
        {
            id: 2,
            titulo: 'Calculadora en C#',
            descripcion: 'Desarrollo de calculadora basica en c# de consola',
            detalle: 'Fue uno de mis primeros proyectos realizados en la carrera'
            }

    ]
  return (
    <section>

        <h2>Proyectos</h2>
        <div>
            {proyectos.map((proyecto)=>(
                <ProjectCard
                key={proyecto.id}
                Titulo={proyecto.titulo}
                descripcion={proyecto.descripcion}
                detalle={proyecto.detalle}
                />
            ))}
        </div>
    </section>
  )
}

export default Projects