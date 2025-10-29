import React from "react";
import "./Sample.css";
import { xout, mySampleSize2 } from "../../assets";

const Sample = (props) => {
  return (
    <div className="bg-[#666666] relative h-full w-full grid grid-flow-row grid-rows-[auto_1fr] grid-cols-1 min-h-0 min-w-0 border-4 groove">
      <button
        className="absolute p-[5px] m-[5px] duration-[0.3s] hover:scale-[150%]"
        onClick={() => props.setProject("menu")}
      >
        <img src={xout}></img>
      </button>
      <h2 className="text-(--retro-text) text-lg p-[5px] game text-center min-h-0 min-w-0">
        MySampleSize
      </h2>
      <div className="h-full w-full bg-(--retro-blue) grid grid-flow-row grid-rows-[1fr_auto] grid-cols-1 min-h-0 min-w-0">
        <a
          className="min-h-0 min-w-0 h-full w-full"
          href="https://www.mysamplesize.com/"
          target="_blank"
        >
          <img
            className="h-full w-full object-cover object-left"
            src={mySampleSize2}
          ></img>
        </a>
        <div className="min-h-0 min-w-0">
          <p className="p-[5px]">
            Statistical calculation tool suite and experiment design guide for
            pre-medical researchers.
          </p>
          <div className="flex px-[5px] py-[10px] gap-[10px]">
            <div className="p-[5px] w-min h-auto bg-[#3770a1] text-(--retro-text) span-shadow content-center">
              <p>Python</p>
            </div>
            <div className="p-[5px] w-min h-auto bg-[#a4d1e4] text-(--retro-text) span-shadow content-center">
              <p>Flask</p>
            </div>
            <div className="p-[5px] w-min h-auto bg-[#f7df1e] text-(--retro-text) span-shadow content-center">
              <p>JavaScript</p>
            </div>
            <div className="p-[5px] w-min h-auto bg-[#2268bb] text-(--retro-text) span-shadow content-center">
              <p>R</p>
            </div>
            <div className="p-[5px] w-min h-auto bg-[#df2226] text-(--retro-text) span-shadow content-center">
              <p>AngularJS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;
