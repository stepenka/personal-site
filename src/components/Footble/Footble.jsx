import React from "react";
import "./Footble.css";
import { xout, footble2 } from "../../assets";

const Footble = (props) => {
  return (
    <div className="footble">
      <div className="footbleContainer">
        <button
          className="menuButtonFootble"
          onClick={() => props.setProject("menu")}
        >
          <img src={xout}></img>
        </button>
        <div className="footbleScreen">
          <a
            className="footbleTop"
            href="https://www.figma.com/design/eyNV3DrwO4WFlMcNg4R86b/Footble?m=auto&t=7YX6HG5woLGdp9KS-6"
            target="_blank"
          >
            <h2>Footble</h2>
            <img className="footbleDisplay" src={footble2}></img>
          </a>
          <p className="footbleBlurb">
            Front-end UI design for a Wordle style football game created using
            Figma.
          </p>
          <div className="footbleTypes">
            <div className="figma">
              <p>Figma</p>
            </div>
            <div className="css">
              <p>CSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footble;
