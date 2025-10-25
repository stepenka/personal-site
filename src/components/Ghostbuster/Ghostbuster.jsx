import React from "react";
import "./Ghostbuster.css";
import { xout, ghost2 } from "../../assets";

const Ghostbuster = (props) => {
  return (
    <div className="ghost">
      <div className="ghostContainer">
        <button
          className="menuButtonGhost"
          onClick={() => props.setProject("menu")}
        >
          <img src={xout}></img>
        </button>
        <div className="ghostScreen">
          <a
            className="ghostTop"
            href="https://www.figma.com/design/eyNV3DrwO4WFlMcNg4R86b/Footble?m=auto&t=7YX6HG5woLGdp9KS-6"
            target="_blank"
          >
            <h2>Ghost Buster</h2>
            <img className="ghostDisplay" src={ghost2}></img>
          </a>
          <p className="ghostBlurb">
            Pacman AI agent that hunts ghosts utilizing inference and particle
            filter techniques.
          </p>
          <div className="ghostTypes">
            <div className="ghostPython">
              <p>Python</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ghostbuster;
