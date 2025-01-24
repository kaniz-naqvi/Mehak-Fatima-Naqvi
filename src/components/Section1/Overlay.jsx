import React from "react";
import { XMarkIcon } from "../Icons";
const Borders = () => {
  return (
    <>
      <div className="bg-[url('border-half.png')] w-[20%] h-[55%] left-0 absolute top-0 bg-cover bg-top"></div>
      <div className="cross absolute top-5 right-5 ">
        <XMarkIcon />
      </div>
      <div className="bg-[url('border-half.png')] w-[20%] h-[55%] right-0 absolute bottom-0 scale-y-[-1] scale-x-[-1] bg-cover bg-top"></div>
    </>
  );
};
const Overlay = () => {
  return (
    <div className="fixed h-full w-full top-0 left-0 bg-[#000000d5] z-50 p-10">
      <div className="w-full h-full rounded-3xl bg-[url('/laptop.png')] text-light bg-cover bg-center ">
        <div className="bg-[#d1057f70] rounded-3xl w-full h-full relative p-14">
          <Borders />
          {/* <div className="grid"> */}
          <h2 className="heading text-4xl my-2 font-semibold">About me</h2>
          <p>
            Hi, I’m Mehak, a full-stack developer passionate about building
            innovative web applications. With expertise in HTML, CSS,
            JavaScript, React, and Node.js, I focus on creating responsive and
            user-friendly projects. I'm driven by the goal of using technology
            to create impactful solutions, especially in my community. When I’m
            not coding, I enjoy exploring K-dramas, sketching, and learning new
            skills. I’m always eager to collaborate on exciting projects, so
            feel free to reach out!
          </p>
          <button className="p-2 border-light border-2 ">
            Download Resume
          </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Overlay;
