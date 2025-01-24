import React from "react";
import "./hero.css";

import Sidebar from "./Sidebar";
import Overlay from "./Overlay";
const Hero = () => {
  return (
    <section id="hero" className="flex h-full">
      <Sidebar />
      <div className="w-full">
        <h1 className="heading text-primary mt-40 lg:font-medium font-semibold lg:text-7xl text-4xl lg:mt-44">
          <span className="heading active-link">Fr</span>ontEnd
        </h1>
        <h1 className="heading ms-8 lg:ms-48 py-2 lg:font-medium font-semibold text-black lg:text-7xl text-[2.5rem]">
          Developer
        </h1>
        <p className="lg:py-7 lg:w-[40rem] px-2 lg:text-lg">
          Building creative and functional web solutions with a focus on design
          and user experience.
        </p>
        <div className="about-me-parent relative flex items-center px-2 h-20 w-40">
          <button className="about-me overflow-hidden btn relative border-2 border-[#d10580] p-1 px-4 font-semibold flex items-center gap-5 lg:my-5">
            About me
          </button>
        </div>
      </div>
      <Overlay />
    </section>
  );
};

export default Hero;
