import React, { useState } from "react";
import { GitHub, Instagram, LinkedIn, MoonIcon, Pixabay } from "../Icons";

const linkName = ["Home", "Skills", "Projects", "Testimonials", "Contact"];

const NavLinks = ({ activeItem, clickHandler }) => {
  return (
    <ul className="flex ms-auto justify-center items-center gap-8 px-3">
      {linkName.map((item, index) => {
        return (
          <li key={index} onClick={() => clickHandler(index)}>
            <a
              href="#"
              className={`tracking-wide font-semibold ${
                activeItem === index ? "active-link" : ""
              }`}
            >
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const Nav = () => {
  const [activeItem, setActiveItem] = useState(0);

  const clickHandler = (index) => {
    setActiveItem(index); // Update the active item
  };

  return (
    <>
      <header className="w-full flex">
        {/* Sidebar */}
        <div className="flex flex-col ms-8 mx-3 gap-5 sticky">
          <div className="bg-primary h-32 ms-6 w-[3px]"></div>
          <a href="#" className="bg-primary text-white rounded-full py-2 px-3">
            <GitHub />
          </a>
          <a href="#" className="bg-primary text-white rounded-full py-2 px-3">
            <Instagram />
          </a>
          <a href="#" className="bg-primary text-white rounded-full py-2 px-3">
            <Pixabay />
          </a>
          <a href="#" className="bg-primary text-white rounded-full py-2 px-3">
            <LinkedIn />
          </a>
        </div>

        {/* Navbar */}
        <nav className="p-3 w-full h-20 flex items-center fixed ms-16 justify-between">
          <a href="#" className="nav-brand flex items-center justify-start">
            <img src="M-logo.png" alt="" className="h-14" />
            <span className="heading font-semibold">ehak</span>
          </a>
          <NavLinks activeItem={activeItem} clickHandler={clickHandler} />
          <a href="#" className="mx-5">
            <MoonIcon />
          </a>
        </nav>
      </header>
    </>
  );
};

export default Nav;
