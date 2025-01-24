import React from "react";
import { GitHub, Instagram, LinkedIn, Pixabay } from "../Icons";
const Sidebar = () => {
  return (
    <div className="flex flex-col mx-2 text-light lg:ms-8  w-14 lg:mr-16 z-20 gap-3 lg:gap-6 sticky">
      <div className="bg-primary h-36 ms-6 w-[3px]"></div>
      <a href="#" className="bg-primary rounded-full py-2 px-3">
        <GitHub />
      </a>
      <a href="#" className="bg-primary rounded-full py-2 px-3">
        <Instagram />
      </a>
      <a href="#" className="bg-primary rounded-full py-2 px-3">
        <Pixabay />
      </a>
      <a href="#" className="bg-primary rounded-full py-2 px-3">
        <LinkedIn />
      </a>
    </div>
  );
};

export default Sidebar;
