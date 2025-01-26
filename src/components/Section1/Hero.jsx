import React, { useState } from "react";
import "./hero.css";
import Sidebar from "./Sidebar";
import Overlay from "./Overlay/Overlay";

const Hero = () => {
  // State to control overlay visibility
  const [overlayVisible, setOverlayVisible] = useState(false);

  return (
    <section id="hero" className="flex h-full relative">
      <Sidebar />
      <div className="w-full">
        <h1 className="heading text-primary mt-40 lg:font-medium font-semibold md:text-5xl lg:text-7xl text-4xl lg:mt-44">
          <span className="heading active-link">Fr</span>ontEnd
        </h1>
        <h1 className="heading ms-8 lg:ms-48 py-2 lg:font-medium font-semibold md:text-5xl md:ms-16 text-black lg:text-7xl text-[2.5rem]">
          Developer
        </h1>
        <p className="lg:py-7 lg:w-[40rem] md:w-[25rem] px-2 lg:text-lg">
          Building creative and functional web solutions with a focus on design
          and user experience.
        </p>
        <div className="about-me-parent relative flex items-center px-2 h-20 w-40">
          <button
            className="about-me overflow-hidden btn relative border-2 border-[#d10580] p-1 px-4 font-semibold flex items-center gap-5 lg:my-5"
            onClick={() => setOverlayVisible(true)} // Toggle overlay visibility
          >
            About me
          </button>
        </div>
      </div>

      {overlayVisible && (
        <Overlay
          overlayVisible={overlayVisible}
          setOverlayVisible={setOverlayVisible}
        />
      )}
    </section>
  );
};

export default Hero;
