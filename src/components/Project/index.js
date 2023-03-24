import React from "react";

const projectList = [
  {
    name: "MAC",
    photoName: "0",
  },
  {
    name: "KNIGHTRO",
    photoName: "1",
  },
];

function Projects() {
  return (
    <section>
      <h3>Projects</h3>
      <div className="flex-row">
        {projectList.map((image, i) => (
          <div>
            <img
              src={require(`../../assets/projectPhotos/${i}.jpg`).default}
              //for accessibility
              alt={image.name}
              className="projectImage"
              key={image.name}
            />
            <a>{image.name}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
