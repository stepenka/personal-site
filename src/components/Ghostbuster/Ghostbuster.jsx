import React from "react";
import "./Ghostbuster.css";
import { xout, ghost } from "../../assets";

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
            href="https://github.com/stepenka/ghost-buster"
            target="_blank"
          >
            <h2>Ghost Buster</h2>
            <img className="ghostDisplay" src={ghost}></img>
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
