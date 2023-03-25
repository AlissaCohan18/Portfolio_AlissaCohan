import React from "react";

const projectList = [
  {
    name: "Blog Site",
    url: ""
  },
  {
    name: "Coffee Butler",
    url: ""
  },
  {
    name: "WeatherMann",
    url: ""
  },
  {
    name: "SQL Demo",
    url: ""
  },

  {
    name: "Weather Forecast",
    url: ""
  },
  {
    name: "Day Planner",
    url: ""
  },

  {
    name: "Timed Quizzes",
    url: ""
  },
  {
    name: "Password Generator",
    url: ""
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
              src={require(`../../assets/projectPhotos/${i}.png`).default}
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
