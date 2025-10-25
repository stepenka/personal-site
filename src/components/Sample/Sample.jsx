import React from "react";
import "./Sample.css";
import { xout, mySampleSize2 } from "../../assets";

const Sample = (props) => {
  return (
    <div className="sample">
      <div className="sampleContainer">
        <button
          className="menuButtonSample"
          onClick={() => props.setProject("menu")}
        >
          <img src={xout}></img>
        </button>
        <div className="mysample">
          <a
            className="sampleTop"
            href="https://www.mysamplesize.com/"
            target="_blank"
          >
            <h2>MySampleSize</h2>
            <img className="sampleDisplay" src={mySampleSize2}></img>
          </a>
          <p className="sampleBlurb">
            Statistical calculation tool suite and experiment design guide for
            pre-medical researchers.
          </p>
          <div className="sampleTypes">
            <div className="samplePython">
              <p>Python</p>
            </div>
            <div className="flask">
              <p>Flask</p>
            </div>
            <div className="sampleJS">
              <p>JavaScript</p>
            </div>
            <div className="r">
              <p>R</p>
            </div>
            <div className="angular">
              <p>AngularJS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;
