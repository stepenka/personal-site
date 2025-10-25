import React, { useState } from "react";
import "./Projects.css";
import { back } from "../../assets";
import Sample from "../Sample/Sample";
import ProjectsMenu from "../ProjectsMenu/ProjectsMenu";
import Electric from "../Electric/Electric";
import Footble from "../Footble/Footble";
import Ghostbuster from "../Ghostbuster/Ghostbuster";

const Projects = (props) => {
  const [project, setProject] = useState("menu");

  return (
    <div className="container">
      <button
        className="menuButtonProjects menuButton"
        onClick={() => props.setPage("menu")}
      >
        <img src={back}></img> Back
      </button>
      <h1>Projects</h1>
      {project === "menu" && (
        <ProjectsMenu project={project} setProject={setProject} />
      )}
      {project === "sample" && (
        <Sample project={project} setProject={setProject} />
      )}
      {project === "electric" && (
        <Electric project={project} setProject={setProject} />
      )}
      {project === "ghost" && (
        <Ghostbuster project={project} setProject={setProject} />
      )}
      {project === "footble" && (
        <Footble project={project} setProject={setProject} />
      )}
    </div>
  );
};

export default Projects;
