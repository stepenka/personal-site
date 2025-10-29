import React from "react";
import { lmu, ping } from "../../assets";
import "./Education.css";

const Education = (props) => {
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
          Education
        </h1>
        <div className="relative p-[10px] pt-[0px] min-h-0 min-w-0">
          <div className="relative h-full w-full bg-(--retro-blue) span-shadow grid grid-flow-row grid-rows-[1fr_1fr] grid-cols-1">
            <div className="flex justify-evenly py-[10px] min-h-0 min-w-0 m-auto">
              <div className="w-max h-min min-h-0 min-w-0 pl-[5px]">
                <h2 className="text-xl text-[#107fb7] lmu">
                  Loyola Marymount University
                </h2>
                <h3 className="text-base">
                  Bachelor's of Science - Computer Science
                </h3>
                <h4 className="text-sm">Minor - Statistics and Data Science</h4>
                <p className="inline-block text-xs">
                  <img
                    className="h-[12px] w-[12px] inline-block"
                    src={ping}
                  ></img>{" "}
                  Los Angeles, California - May 2024 <br></br>
                  3.38 GPA
                </p>
              </div>
              <div>
                <img className="w-[120px]" src={lmu}></img>
              </div>
            </div>
            <div className="min-h-0 min-w-0 h-full w-full grid grid-flow-row grid-cols-1 grid-rows-[auto_1fr] m-auto">
              <h2 className="text-center text-xl">Relevant Coursework</h2>
              <div className="p-[10px] h-full w-full grid grid-flow-row grid-cols-2 grid-rows-8 text-center">
                <p className="text-xs">Computer Programming</p>
                <p className="text-xs">Logic and Computer Design</p>
                <p className="text-xs">
                  Introduction to Probability and Statistics
                </p>
                <p className="text-xs">Programming Laboratory</p>
                <p className="text-xs">Algorithms</p>
                <p className="text-xs">Computer System Organization</p>
                <p className="text-xs">Data Structures</p>
                <p className="text-xs">Languages and Automata I, II</p>
                <p className="text-xs">Artificial Intelligence</p>
                <p className="text-xs">Interaction Design</p>
                <p className="text-xs">Operating Systems</p>
                <p className="text-xs">Discrete Math</p>
                <p className="text-xs">Game Design</p>
                <p className="text-xs">Calculus I, II</p>
                <p className="text-xs">Mobile Application Development</p>
                <p className="text-xs">Linear Algebra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
