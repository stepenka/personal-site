import React from "react";
import "./ProjectsMenu.css";
import { graph, cable, joystick, art } from "../../assets";

const ProjectsMenu = (props) => {
  return (
    <div className="menuContainerProjects">
      <div className="menuGridProjects">
        <button
          className="sampleButton"
          onClick={() => props.setProject("sample")}
        >
          <img src={graph}></img> MySampleSize
        </button>
        <button
          className="electricButton"
          onClick={() => props.setProject("electric")}
        >
          <img src={cable}></img> ElectricScript
        </button>
        <button
          className="ghostButton"
          onClick={() => props.setProject("ghost")}
        >
          <img src={joystick}></img> GhostBuster
        </button>
        <button
          className="footbleButton"
          onClick={() => props.setProject("footble")}
        >
          <img src={art}></img> Footble
        </button>
      </div>
    </div>
  );
};

export default ProjectsMenu;
