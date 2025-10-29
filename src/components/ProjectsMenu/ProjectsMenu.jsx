import React from "react";
import "./ProjectsMenu.css";
import { graph, cable, joystick, art } from "../../assets";

const ProjectsMenu = (props) => {
  return (
    <div className="relative h-full w-full bg-(--retro-blue) span-shadow grid grid-flow-row grid-projects min-h-0 min-w-0 overflow-hidden">
      <div className="relative text-center m-auto">
        <button
          className="game text-xs md:text-lg p-[5px] text-center justify-items-center duration-[0.5s] hover:text-[#001f3f] hover:bg-(--retro-gray) hover:shadow-[10px_10px_#001f3f] min-h-0 min-w-0"
          onClick={() => props.setProject("sample")}
        >
          <img className="h-[70px]" src={graph}></img> MySampleSize
        </button>
      </div>
      <div className="relative text-center m-auto">
        <button
          className="game text-xs md:text-lg p-[5px] text-center justify-items-center duration-[0.5s] hover:text-[#001f3f] hover:bg-(--retro-gray) hover:shadow-[10px_10px_#001f3f] min-h-0 min-w-0"
          onClick={() => props.setProject("electric")}
        >
          <img className="h-[70px]" src={cable}></img> ElectricScript
        </button>
      </div>
      <div className="relative text-center m-auto">
        <button
          className="game text-xs md:text-lg p-[5px] text-center justify-items-center duration-[0.5s] hover:text-[#001f3f] hover:bg-(--retro-gray) hover:shadow-[10px_10px_#001f3f] min-h-0 min-w-0"
          onClick={() => props.setProject("ghost")}
        >
          <img className="h-[70px]" src={joystick}></img> GhostBuster
        </button>
      </div>
      <div className="relative text-center m-auto">
        <button
          className="game text-xs md:text-lg p-[5px] text-center justify-items-center duration-[0.5s] hover:text-[#001f3f] hover:bg-(--retro-gray) hover:shadow-[10px_10px_#001f3f] min-h-0 min-w-0"
          onClick={() => props.setProject("footble")}
        >
          <img className="h-[70px]" src={art}></img> Footble
        </button>
      </div>
    </div>
  );
};

export default ProjectsMenu;
