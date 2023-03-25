import React from 'react'

const Project = (props) => {
    const { project, index
    } = props;

  return (
    <div>
       <div>
            <img
              src={require(`../../assets/projectPhotos/${index}.png`).default}
              //for accessibility
              alt={project.name}
              className="projectImage"
              key={project.name}
            />
            <a>{project.name}</a>
          </div>
    </div>
  )
}

export default Project
