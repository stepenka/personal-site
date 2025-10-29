import React from "react";
import "./Ghostbuster.css";
import { xout, ghost } from "../../assets";

const Ghostbuster = (props) => {
  return (
    <div className="bg-[#666666] relative h-full w-full grid grid-flow-row grid-rows-[auto_1fr] grid-cols-1 min-h-0 min-w-0 border-4 groove">
      <button
        className="absolute p-[5px] m-[5px] duration-[0.3s] hover:scale-[150%]"
        onClick={() => props.setProject("menu")}
      >
        <img src={xout}></img>
      </button>
      <h2 className="text-(--retro-text) text-lg p-[5px] game text-center min-h-0 min-w-0">
        Ghost Buster
      </h2>
      <div className="h-full w-full bg-(--retro-blue) grid grid-flow-row grid-rows-[1fr_auto] grid-cols-1 min-h-0 min-w-0">
        <a
          className="min-h-0 min-w-0 h-full w-full"
          href="https://github.com/stepenka/ghost-buster"
          target="_blank"
        >
          <img className="h-full w-full" src={ghost}></img>
        </a>
        <div className="min-h-0 min-w-0">
          <p className="p-[5px]">
            Pacman AI agent that hunts ghosts utilizing inference and particle
            filter techniques.
          </p>
          <div className="flex px-[5px] py-[10px] gap-[10px]">
            <div className="p-[5px] w-min h-auto bg-[#3770a1] text-(--retro-text) span-shadow content-center">
              <p>Python</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ghostbuster;
