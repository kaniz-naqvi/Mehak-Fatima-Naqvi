import React, { useState } from "react";
import { MoonIcon, XMarkIcon, Bars3Icon } from "../Icons";

const linkName = ["Home", "Skills", "Projects", "Testimonials", "Contact"];

const NavLinks = ({ activeItem, clickHandler }) => {
  return (
    <ul className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-14">
      {linkName.map((item, index) => (
        <li key={index} onClick={() => clickHandler(index)}>
          <a
            href="#"
            className={`tracking-wide font-semibold ${
              activeItem === index ? "active-link text-primary" : ""
            }`}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Nav = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

  const clickHandler = (index) => {
    setActiveItem(index); // Update the active item
    setMenuOpen(false); // Close menu on link click
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="w-full flex">
        {/* Navbar */}
        <nav className="lg:px-12 px-3 lg:ps-20 z-10 w-full h-20 flex items-center fixed bg-[#ffffff] justify-between">
          {/* Brand */}
          <a href="#" className="nav-brand flex items-center">
            <img src="M-logo.png" alt="Logo" className="h-14" />
            <span className="heading font-semibold">ehak</span>
          </a>

          {/* Mobile MoonIcon and Hamburger Menu */}
          <div className="lg:hidden flex items-center gap-4">
            <a
              href="#"
              aria-label="Dark Mode"
              className="z-10 fixed top-6 right-20" // MoonIcon stays behind the menu
            >
              <MoonIcon />
            </a>
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="z-50 fixed top-7 right-5" // XMarkIcon stays on top
            >
              {menuOpen ? (
                <XMarkIcon className="h-8 w-8 text-gray-700" />
              ) : (
                <Bars3Icon className="h-8 w-8 text-gray-700" />
              )}
            </button>
          </div>

          {/* Nav Links */}
          <div
            className={`${
              menuOpen ? "translate-x-0" : "translate-x-full"
            } lg:translate-x-0 fixed lg:static top-0 right-0 h-full lg:h-auto w-3/4 lg:w-auto bg-[#ffffffda] lg:bg-transparent flex flex-col lg:flex-row items-center lg:justify-end gap-6 lg:gap-14 px-6 py-12 lg:p-0 shadow-2xl lg:shadow-none transition-transform duration-300 z-20`} // Menu z-index higher than MoonIcon but lower than XMarkIcon
          >
            <NavLinks activeItem={activeItem} clickHandler={clickHandler} />
            {/* Desktop MoonIcon */}
            <a href="#" className="hidden lg:block" aria-label="Dark Mode">
              <MoonIcon />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
