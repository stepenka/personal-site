import React from "react";
import "./Electric.css";
import { xout, electricScript } from "../../assets";

const Electric = (props) => {
  return (
    <div className="bg-[#666666] relative h-full w-full grid grid-flow-row grid-rows-[auto_1fr] grid-cols-1 min-h-0 min-w-0 border-4 groove">
      <button
        className="absolute p-[5px] m-[5px] duration-[0.3s] hover:scale-[150%]"
        onClick={() => props.setProject("menu")}
      >
        <img src={xout}></img>
      </button>
      <h2 className="text-(--retro-text) text-lg p-[5px] game text-center min-h-0 min-w-0">
        ElectricScript
      </h2>
      <div className="h-full w-full bg-(--retro-blue) grid grid-flow-row grid-rows-[1fr_auto] grid-cols-1 min-h-0 min-w-0">
        <a
          className="min-h-0 min-w-0 h-full w-full"
          href="https://github.com/aryamanram/Electric-Script"
          target="_blank"
        >
          <img className="h-full w-full" src={electricScript}></img>
        </a>
        <div className="min-h-0 min-w-0">
          <p className="p-[5px]">
            Compiler for a JavaScript based programming language with electrical
            engineering themed types.
          </p>
          <div className="flex px-[5px] py-[10px] gap-[10px]">
            <div className="p-[5px] w-min h-auto bg-[#f7df1e] text-(--retro-text) span-shadow content-center">
              <p>JavaScript</p>
            </div>
            <div className="p-[5px] w-min h-auto bg-[#893df6] text-(--retro-text) span-shadow content-center">
              <p>Ohm</p>
            </div>
            <div className="p-[5px] w-min h-auto bg-[#3178c6] text-(--retro-text) span-shadow content-center">
              <p>TypeScript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electric;
