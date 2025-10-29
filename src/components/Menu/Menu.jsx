import React from "react";
import { ping, jurgis, folder } from "../../assets";
import "./Menu.css";

const Menu = (props) => {
  return (
    <div className="relative h-full w-full min-h-0 bg-(--retro-gray) border-4 border-[#bbb] groove grid grid-flow-col grid-cols-1 grid-rows-[auto_1fr] lg:grid-rows-[35%_auto]">
      <div className="relative grid grid-flow-col grid-cols-[60%_auto] grid-rows-1">
        <div className="relative p-[10px]">
          <div className="h-full w-full bg-[#666666] span-shadow">
            <h1 className="roboto lg:text-2xl text-xl leading-none text-center">
              Hi, I'm Jurgis
            </h1>
            <p className="lg:text-base text-xs inline-block p-[5px]">
              I'm a Computer Science graduate from Venezuela and Lithuania.
              <br></br>I specialize at Java and Python, but also enjoy web
              development with ReactJS and Flask.
              <br></br>You can navigate my website below to get to know me
              better.
              <br></br>
              <img
                className="h-[12px] w-[12]px inline-block"
                src={ping}
              ></img>{" "}
              Tarragona, Spain
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src={jurgis}
            className="h-auto w-full lg:h-full lg:w-auto clip-circle block m-auto"
          ></img>
        </div>
      </div>
      <div className="relative h-full p-[10px] pt-[0px]">
        <div className="relative h-full w-full bg-(--retro-blue) span-shadow grid grid-flow-row lg:grid-flow-row grid-projects min-h-0 min-w-0 overflow-hidden">
          <div className="relative text-center m-auto">
            <button
              className="game text-xs md:text-lg p-[5px] text-center justify-items-center duration-[0.5s] rounded-[4px] hover:text-[#001f3f] hover:bg-(--retro-gray) min-h-0 min-w-0"
              onClick={() => props.setPage("projects")}
            >
              <img className="h-[70px]" src={folder}></img> Projects
            </button>
          </div>
          <div className="relative text-center m-auto">
            <button
              className="game text-xs md:text-lg p-[5px] text-center justify-items-center duration-[0.5s] rounded-[4px] hover:text-[#001f3f] hover:bg-(--retro-gray) min-h-0 min-w-0"
              onClick={() => props.setPage("resume")}
            >
              <img className="h-[70px]" src={folder}></img> Resume
            </button>
          </div>
          <div className="relative text-center m-auto col-span-2">
            <button
              className="game text-xs md:text-lg p-[5px] text-center justify-items-center duration-[0.5s] rounded-[4px] hover:text-[#001f3f] hover:bg-(--retro-gray) min-h-0 min-w-0"
              onClick={() => props.setPage("education")}
            >
              <img className="h-[70px]" src={folder}></img> Education
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
