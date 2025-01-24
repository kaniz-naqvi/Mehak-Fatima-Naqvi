import React from "react";
import { DownloadIcon } from "../../Icons";
const AboutMe = () => {
  return (
    <div className="overflow-x-hidden">
      <h2 className="heading text-4xl mt-14 mb-5 font-semibold">About me</h2>
      <p className="leading-[35px] pr-20">
        Hi, I’m Mehak, a full-stack developer passionate about building
        innovative web applications. With expertise in HTML, CSS, JavaScript,
        React, and Node.js, I focus on creating responsive and user-friendly
        projects. I'm driven by the goal of using technology to create impactful
        solutions, especially in my community. When I’m not coding, I enjoy
        exploring K-dramas, sketching, and learning new skills. I’m always eager
        to collaborate on exciting projects, so feel free to reach out!
      </p>
      <button className="p-2 uppercase my-5 lg:mt-10 border-light border-2 flex items-center justify-between gap-3">
        Download Resume <DownloadIcon />
      </button>
    </div>
  );
};

export default AboutMe;
