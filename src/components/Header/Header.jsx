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
    <header>
      <div className="wrapper">
        <Links />
        <div className="cta">
          <h1 className="name">Jurgis Stepenka</h1>
        </div>
        {page === "menu" && <Menu page={page} setPage={setPage} />}
        {page === "projects" && <Projects page={page} setPage={setPage} />}
        {page === "resume" && <Experience page={page} setPage={setPage} />}
        {page === "education" && <Education page={page} setPage={setPage} />}
      </div>
    </header>
  );
};

export default Header;
