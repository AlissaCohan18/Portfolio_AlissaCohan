import React from "react";
import cohanResume from "../../assets/resume/cohanResume.docx";

const Resume = () => {
  return (
    <div className="container-fluid">
      <h4 className="reusmeIntro">
        {" "}
        Strategic, creative problem solver with over 15 years' experience in
        manufacturing and process improvements. Energetic learner. Excellent
        team building skills and capability to lead through stressful and
        challenging obstacles. Demonstrated ability to build effective
        relationships and deliver results.
      </h4>{" "}
      <br></br>
      <h3>SKILLS</h3>
      <ul className="resumelist">
        <li>React</li>
        <li>JavaScript</li>
        <li>API Calls</li>
        <li>Node.js</li>
        <li>MySQL & Sequelize</li>
        <li>NoSQL Databases (mongo) </li>
        <li>CSS & Bootstrap </li>
        <li>HTML</li>
        <li>C++</li>
        <li>G & M Code for CNCs</li>
        <li>GIT Repositories</li>
        <li>Refactoring Code & PWA</li>
        <li>Agile Framework</li>
        <li>PM, PO, and Scrum</li>
        <li> JIRA</li>
        <li> Mural</li>
        <li>Box</li>
        <li>Slack</li>
        <li>SAP & Microsoft Apps</li>
        <li>Team Building</li>
        <li>Process Improvements</li>
      </ul>{" "}
      <br></br>
      <h3>CERTIFICATIONS</h3>
      <ul>
        <a>
          SOFTWARE DEVELOPMENT CERTIFICATE, GEORGIA TECH <br></br>
          BLACK BELT CERTIFIED, LEAN SIX SIGMA<br></br>
          FUNDAMENTALS OF ENGINEERING (FE), STATE OF FLORIDA BOARD OF
          PROFESSIONAL ENGINEERS
        </a>
      </ul>
      <br></br>
      <a className="resumeDL" href={cohanResume} download>
        {" "}
        Download full Resume
      </a>
    </div>
  );
};

export default Resume;
