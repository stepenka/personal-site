import React from "react";
import "./Footble.css";
import { xout, footble2 } from "../../assets";

const Footble = (props) => {
  return (
    <div className="bg-[#666666] relative h-full w-full grid grid-flow-row grid-rows-[auto_1fr] grid-cols-1 min-h-0 min-w-0 border-4 groove">
      <button
        className="absolute p-[5px] m-[5px] duration-[0.3s] hover:scale-[150%]"
        onClick={() => props.setProject("menu")}
      >
        <img src={xout}></img>
      </button>
      <h2 className="text-(--retro-text) text-lg p-[5px] game text-center min-h-0 min-w-0">
        Footble
      </h2>
      <div className="h-full w-full bg-(--retro-blue) grid grid-flow-row grid-rows-[1fr_auto] grid-cols-1 min-h-0 min-w-0">
        <a
          className="min-h-0 min-w-0 h-full w-full"
          href="https://www.figma.com/design/eyNV3DrwO4WFlMcNg4R86b/Footble?m=auto&t=7YX6HG5woLGdp9KS-6"
          target="_blank"
        >
          <img
            className="h-full w-full object-cover object-left"
            src={footble2}
          ></img>
        </a>
        <div className="min-h-0 min-w-0">
          <p className="p-[5px]">
            Front-end UI design for a Wordle style football game created using
            Figma.
          </p>
          <div className="flex px-[5px] py-[10px] gap-[10px]">
            <div className="p-[5px] w-min h-auto bg-[#23cc71] text-(--retro-text) span-shadow content-center">
              <p>Figma</p>
            </div>
            <div className="p-[5px] w-min h-auto bg-[#264de4] text-(--retro-text) span-shadow content-center">
              <p>CSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footble;
