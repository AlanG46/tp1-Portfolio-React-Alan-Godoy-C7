import React from 'react'

const Skills = () => {

        const habilidades =[
            'C#',
            'SQL',
            'HTML',
            'CSS',
            'JavaScript',
            'React'
        ]
    
  return (
    <section>
        <h2> Habilidades</h2>

        <ul>
            {habilidades.map((habilidad) => (
            <li key={habilidad}>{habilidad}</li>
            ))}
        </ul>
        </section>
  )
}

export default Skills