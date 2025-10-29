import React from "react";
import "./Experience.css";
import { resume } from "../../assets";

const Experience = (props) => {
  return (
    <div className="relative h-full w-full min-h-0 bg-(--retro-gray) border-4 border-(--retro-gray) groove">
      <button
        className="text-lg absolute p-[5px] border-[5px] border-[#bbb] groove my-[5px] z-1 duration-[0.3s] bg-(--retro-gray) text-[#000] hover:scale-[80%] hover:shadow-[5px_5px_#666666]"
        onClick={() => props.setPage("menu")}
      >
        Back
      </button>
      <div className="relative h-full w-full grid grid-flow-row grid-rows-[auto_1fr] grid-cols-1">
        <h1 className="text-3xl text-center game m-auto bg-[#666666] span-shadow">
          Resume
        </h1>
        <div className="relative p-[10px] pt-[0px] min-h-0 min-w-0">
          <iframe className="h-full w-full span-shadow" src={resume}></iframe>
        </div>
      </div>
    </div>
  );
};

export default Experience;
