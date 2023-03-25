import React from "react";
import avatarImage from "../../assets/avatar/avatar.png";

function Header() {
  return (
    <section className="container-fluid">
      <h3 id="about">About Me</h3>
      <img src={avatarImage} style={{ width: "10%" }} alt="author photo" />
      <div>
        <p>
          I'm an engineer with a passion for learning and leaving everything I
          touch better than I found it. My computer programming experience
          includes: working towards a MERN Stack Certification from Georgia Tech
          which will be achieved in April 2023, M and G code used to program CNC
          lathes for Lockheed Martin, and C++ fundamentals. On the portfolio
          tab, you will find details about the websites I have built during my
          time at Georgia Tech.
        </p>
      </div>
    </section>
  );
}

export default Header;
