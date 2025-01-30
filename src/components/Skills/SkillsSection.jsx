import React, { useState } from "react";
import Aside from "./Aside";
import { GSAP, MUI, Canva, Figma } from "./SvgIcons"; // Import MUI SVG

// Sample icons array
const icons = [
  { icon: "bi-code", span: "Languages" },
  { icon: "bi-gear-wide-connected", span: "Frameworks" },
  { icon: "bi-tools", span: "Toolkit" },
  { icon: "bi-puzzle", span: "Others" },
];

// Sample skills array with different categories
const skills = [
  {
    category: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        icon: "ri-javascript-fill",
        color: "text-yellow-500",
      },
      { name: "Python", icon: "bi bi-python", color: "text-[#306998]" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      {
        name: "React",
        icon: "ri ri-reactjs-fill",
        color: "text-[#53c1de]",
      },
      {
        name: "Bootstrap",
        icon: "bi-bootstrap-fill",
        color: "text-[#6F2CF4]",
      },
      {
        name: "Tailwind",
        icon: "ri ri-tailwind-css-fill",
        color: "text-[#38BDF8]",
      },
      {
        name: "MUI",
        svg: <MUI />, // SVG icon
        color: "text-[#007FFF]",
      },
      {
        name: "GSAP",
        svg: <GSAP />,
        color: "text-[#6EC1E4]",
      },
    ],
  },
  // Add more categories and skills as needed
  {
    category: "Tools and ..",
    skills: [
      {
        name: "Figma",
        svg: <Figma />,
        color: "text-[#bb00bb]",
      },
      { name: "Canva", svg: <Canva />, color: "text-[#306998]" },
    ],
  },
];

const SkillsSection = () => {
  // State to track the active icon (category)
  const [active, setActive] = useState(1); // Default active index for Frameworks & Libraries

  // Get the active skills category
  const activeSkills = skills[active];

  return (
    <section className="mt-28 py-3 lg:mt-32 overflow-x-hidden" id="projects">
      <h2 className="text-primary m-auto text-center border-b-2 w-fit text-xl lg:text-2xl border-primary">
        {activeSkills.category} {/* Dynamically render the category */}
      </h2>
      <div className="h-full gap-3 flex items-center justify-start">
        <div className="fixed z-10 lg:w-32">
          <Aside icons={icons} active={active} setActive={setActive} />
        </div>
        <div className="flex flex-col items-center gap-3 justify-center h-full w-full">
          <div className="flex flex-wrap gap-6 px-3 lg:gap-10 justify-center items-center grid-cols-2 lg:grid-cols-3 py-5 lg:w-[60%]">
            {activeSkills.skills.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="card col-span-1 rounded-xl relative w-[43%] lg:w-36 flex flex-col items-center justify-center h-20 lg:h-32 bg-light shadow-2xl"
                >
                  {skill.icon && (
                    <i
                      className={`${skill.icon} text-2xl lg:text-6xl ${skill.color}`}
                    ></i>
                  )}
                  {skill.svg && skill.svg} {/* Render SVG icon if exists */}
                  <h4 className="font-semibold">{skill.name}</h4>
                  <div className="card-bg bg-primary top-0 left-0 absolute -z-10 h-full w-full rounded-xl rotate-12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
