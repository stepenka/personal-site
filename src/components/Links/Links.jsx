import React from "react";
import "./Links.css";
import { email, github, linkedin } from "../../assets";

const Links = () => {
  return (
    <div className="links">
      <ul>
        <li>
          <a
            className="github-btn link"
            href="https://www.github.com/stepenka/"
            target="_blank"
          >
            <img src={github} className="icon"></img> GitHub
          </a>
        </li>
        <li>
          <a
            className="linkedin-btn link"
            href="https://www.linkedin.com/in/jurgis-stepenka/"
            target="_blank"
          >
            <img src={linkedin} className="icon"></img> LinkedIn
          </a>
        </li>
        <li>
          <a
            className="email-btn link"
            href="mailto:jstepenka@gmail.com"
            target="_blank"
          >
            <img src={email} className="icon"></img> Email
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
