import React from "react";
import { ping, jurgis, folder } from "../../assets";
import "./Menu.css";

const Menu = (props) => {
  return (
    <div className="menuContainer">
      <div className="menuTop">
        <div className="menuText">
          <h1>Hi, I'm Jurgis</h1>
          <p>I'm a Computer Science graduate from Venezuela and Lithuania.</p>
          <br></br>
          <p>
            I specialize at Java and Python, but also enjoy web development with
            ReactJS and Flask.
          </p>
          <br></br>
          <p>You can navigate my website below to get to know me better.</p>
          <br></br>
          <p>
            <img className="location" src={ping}></img> Tarragona, Spain
          </p>
        </div>
        <div className="imageBox">
          <img src={jurgis} className="jurgis"></img>
        </div>
      </div>
      <div className="menuGrid">
        <button
          className="projectButton"
          onClick={() => props.setPage("projects")}
        >
          <img src={folder}></img> Projects
        </button>
        <button
          className="resumeButton"
          onClick={() => props.setPage("resume")}
        >
          <img src={folder}></img> Resume
        </button>
        <button
          className="educationButton merge"
          onClick={() => props.setPage("education")}
        >
          <img src={folder}></img> Education
        </button>
      </div>
    </div>
  );
};

export default Menu;
