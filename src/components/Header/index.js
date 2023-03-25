import React from "react";
import avatarImage from "../../assets/avatar/ga.webp";

function Header() {
  return (
    <section className="container-fluid">
      <h3 id="about">About Me</h3>
      <img src={avatarImage} style={{ width: "10%" }} alt="author photo" />
      <div>
        <p>
          I'm an engineer with a passion for learning and leaving everything I
          touch better than I found it. My experience includes C++, M and G code
          for programing CNC lathes, and currently working towards a MERN
          Certification from Georgia Tech Websites I have worked on during the
          bootcamp are shown below...
        </p>
      </div>
    </section>
  );
}

export default Header;
