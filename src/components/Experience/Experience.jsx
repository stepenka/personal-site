import React from "react";
import "./Experience.css";
import { resume, back } from "../../assets";

const Experience = (props) => {
  return (
    <div className="resume">
      <button
        className="menuButtonResume"
        onClick={() => props.setPage("menu")}
      >
        <img src={back}></img> Back
      </button>
      <h1>Resume</h1>
      <div className="resumeContainer">
        <iframe src={resume}></iframe>
      </div>
    </div>
  );
};

export default Experience;
