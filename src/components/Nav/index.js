import React, { useEffect } from "react";

function Nav(props) {
  const {
   setSelectedTab
  } = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" id="myName" >Alissa Cohan</a>

        <form class="d-flex">
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#" onClick={() => setSelectedTab('aboutMe')}>
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setSelectedTab('portfolio')}>
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setSelectedTab('contact')}>
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setSelectedTab('resume')}>
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Nav;
