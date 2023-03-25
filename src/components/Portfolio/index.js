import React from "react";
import Project from "../Project";


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

function Portfolio() {
  return (
    <section className="container-fluid">
      <h3>Projects</h3>
      <div className="flex-row">
        {projectList.map((details, i) => (
         <Project project ={details} index ={i}/>
        ))}
      </div>
    </section>
  );
}
export default Portfolio;
