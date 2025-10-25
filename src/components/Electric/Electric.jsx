import React from "react";
import "./Electric.css";
import { xout, electricScript } from "../../assets";

const Electric = (props) => {
  return (
    <div className="electricScript">
      <div className="electricContainer">
        <button
          className="menuButtonElectric"
          onClick={() => props.setProject("menu")}
        >
          <img src={xout}></img>
        </button>
        <div className="electric">
          <a
            className="electricTop"
            href="https://github.com/aryamanram/Electric-Script"
            target="_blank"
          >
            <h2>ElectricScript</h2>
            <img className="electricDisplay" src={electricScript}></img>
          </a>
          <p className="electricBlurb">
            Compiler for a JavaScript based programming language with electrical
            engineering themed types.
          </p>
          <div className="electricTypes">
            <div className="electricJS">
              <p>JavaScript</p>
            </div>
            <div className="ohm">
              <p>Ohm</p>
            </div>
            <div className="electricTS">
              <p>TypeScript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electric;
