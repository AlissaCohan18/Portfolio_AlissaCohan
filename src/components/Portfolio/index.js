import React from "react";
import Project from "../Project";

const projectList = [
  {
    name: "Create a Meme",
    url: "https://daily-howl-app.herokuapp.com/",
  },
  {
    name: "Blog Site",
    url: "https://github.com/AlissaCohan18/Tech_Blog",
  },
  {
    name: "Coffee Butler",
    url: "https://github.com/AlissaCohan18/CoffeeButler",
  },
  {
    name: "WeatherMann",
    url: "https://montinesproul.github.io/the-a-team/",
  },
  {
    name: "SQL Demo",
    url: "https://github.com/AlissaCohan18/Employee_Tracker",
  },

  {
    name: "Weather Forecast",
    url: "https://alissacohan18.github.io/Weather-Dashboard/",
  },
  {
    name: "Day Planner",
    url: "https://alissacohan18.github.io/DayCalendar/",
  },

  {
    name: "Timed Quizzes",
    url: "https://alissacohan18.github.io/JavaScript_Quizzer/",
  },
  {
    name: "Password Generator",
    url: "https://alissacohan18.github.io/passwordGenerator/",
  },
];

function Portfolio() {
  return (
    <section className="container-fluid">
      <h4>Sample list of my Projects</h4>
      <a>
        Note: due to the change in heroku's pricing, some of the projects below
        are no longer being hosted.<br></br>
        Where that is the case, clicking on the project you will bring you to
        the Github Repo rather than the deployed site for that work
      </a>
      <div className="flex-row projectStart">
        {projectList.map((details, i) => (
          <Project project={details} index={i} />
        ))}
      </div>
    </section>
  );
}
export default Portfolio;
