import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInbox} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin} from "@fortawesome/fontawesome-free-brands";

function Footer() {
  return (
    <footer className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <FontAwesomeIcon icon={faLinkedin} className="iconPict" />
            <FontAwesomeIcon icon={faGithub} className="iconPict" />
            <FontAwesomeIcon icon={faInbox} className="iconPict" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
