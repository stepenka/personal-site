import React, { useState } from "react";
import "./Header.css";
import Links from "../Links/Links";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Menu from "../Menu/Menu";
import Education from "../Education/Education";

const Header = () => {
  const [page, setPage] = useState("menu");

  return (
    <header className="min-h-screen w-full bg-[#000000]">
      <div className="relative max-w-[1024px] p-0px my-0 mx-auto h-screen">
        <div className="pb-[10px] h-[100%] w-[100%] grid flow-col grid-cols-1 grid-rows-[104px_auto] min-h-0 min-w-0 gap-[10px]">
          <div className="h-[100%] w-[100%] grid grid-flow-col grid-cols-2 grid-rows-1 gap-[5%]">
            <div className="group relative bg-(--retro-gray) border-t-0 border-r-4 border-l-4 border-b-4 border-[#bbb] groove w-[100%] h-[100%] p-[5px] grid">
              <div className="span-shadow bg-[#666666]">
                <h1 className="relative h-full w-full lg:text-2xl text-base game text-center content-center">
                  Jurgis Stepenka
                </h1>
              </div>
              <span className="relative my-[1px] bg-size-[200%] h-[100%] w-[100%] bg-linear-to-r from-blue-900 to-blue-400 span-shadow duration-[1.5s] group-hover:bg-right"></span>
            </div>
            <Links />
          </div>
          {page === "menu" && <Menu page={page} setPage={setPage} />}
          {page === "projects" && <Projects page={page} setPage={setPage} />}
          {page === "resume" && <Experience page={page} setPage={setPage} />}
          {page === "education" && <Education page={page} setPage={setPage} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
