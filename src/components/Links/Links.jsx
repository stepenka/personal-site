import React from "react";
import "./Links.css";
import { email, github, linkedin } from "../../assets";

const Links = () => {
  return (
    <div className="relative w-[100%] h-[100%] bg-(--retro-gray) border-t-0 border-r-4 border-l-4 border-b-4 border-[#bbb] groove p-[5px]">
      <ul className="grid grid-flow-col grid-rows-1 grid-col-3 h-full w-full justify-evenly align-middle bg-[#666666] span-shadow">
        <li className="text-center content-center">
          <a
            className="group text-xs lg:text-base"
            href="https://www.github.com/stepenka/"
            target="_blank"
          >
            <img
              src={github}
              className="h-[40px] lg:h-[50px] w-[40px] lg:w-[50px] align-middle justify-self-center duration-[0.5s] group-hover:[transform:rotateY(180deg)]"
            ></img>{" "}
            GitHub
          </a>
        </li>
        <li className="text-center content-center">
          <a
            className="group text-xs lg:text-base"
            href="https://www.linkedin.com/in/jurgis-stepenka/"
            target="_blank"
          >
            <img
              src={linkedin}
              className="h-[40px] lg:h-[50px] w-[40px] lg:w-[50px] align-middle justify-self-center duration-[0.5s] group-hover:[transform:rotateY(180deg)]"
            ></img>{" "}
            LinkedIn
          </a>
        </li>
        <li className="text-center content-center">
          <a
            className="group text-xs lg:text-base"
            href="mailto:jstepenka@gmail.com"
            target="_blank"
          >
            <img
              src={email}
              className="h-[40px] lg:h-[50px] w-[40px] lg:w-[50px] align-middle justify-self-center duration-[0.5s] group-hover:[transform:rotateY(180deg)]"
            ></img>{" "}
            Email
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
