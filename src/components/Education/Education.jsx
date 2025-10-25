import React from "react";
import { back, lmu, ping } from "../../assets";
import "./Education.css";

const Education = (props) => {
  return (
    <div className="education">
      <button
        className="menuButtonEducation menuButton"
        onClick={() => props.setPage("menu")}
      >
        <img src={back}></img> Back
      </button>
      <h1>Education</h1>
      <div className="educationContainer">
        <div className="educationTop">
          <div className="school">
            <h2>Loyola Marymount University</h2>
            <br></br>
            <h3>Bachelor's of Science - Computer Science</h3>
            <h4>Minor - Statistics and Data Science</h4>
            <p>
              <img src={ping}></img> Los Angeles, California - May 2024
            </p>
            <p>3.38 GPA</p>
          </div>
          <div className="lmu">
            <img src={lmu} className="lmuPic"></img>
          </div>
        </div>
        <div className="coursework">
          <h2>Relevant Coursework</h2>
          <div className="courseworkGrid">
            <p>Computer Programming</p>
            <p>Logic and Computer Design</p>
            <p>Introduction to Probability and Statistics</p>
            <p>Programming Laboratory</p>
            <p>Algorithms</p>
            <p>Computer System Organization</p>
            <p>Data Structures</p>
            <p>Languages and Automata I, II</p>
            <p>Artificial Intelligence</p>
            <p>Interaction Design</p>
            <p>Operating Systems</p>
            <p>Discrete Math</p>
            <p>Game Design</p>
            <p>Calculus I, II</p>
            <p>Mobile Application Development</p>
            <p>Linear Algebra</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
