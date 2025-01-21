import React from "react";
import { ArrowRight } from "../Icons";

const Hero = () => {
  return (
    <section className=" top-40 left-28 absolute">
      <h1 className="heading text-primary text-7xl">
        {" "}
        <span className="heading active-link">Fr</span>ont-End
      </h1>
      <h1 className="heading text-7xl ms-48 text-black">Developer</h1>
      <p className="py-7 ps-3 text-lg">
        Building creative and functional web solutions with a focus on design{" "}
        <br /> and user experience.
      </p>
      <button className="about-me overflow-hidden btn relative border-2 border-[#d10580] p-2 px-3 font-semibold flex items-center gap-5 m-5">
        About me
      </button>
    </section>
  );
};

export default Hero;
