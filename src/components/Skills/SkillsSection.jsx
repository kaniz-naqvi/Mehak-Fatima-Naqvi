import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./skills.css";
import { MUI } from "./SvgIcons";

const icons = ["bi-code", "bi-tools", "bi-puzzle", "bi-gear-wide-connected"];
const skills = [
  {
    category: "Frameworks",
    skills: [
      {
        name: "React",
        icon: "ri ri-reactjs-fill",
        color: "text-[#53c1de]",
        description: "A JavaScript library for building user interfaces.",
      },
      {
        name: "Bootstrap",
        icon: "bi-bootstrap-fill",
        color: "text-[#6F2CF4]",
        description: "Components-based CSS framework.",
      },
      {
        name: "Tailwind",
        icon: "ri ri-tailwind-css-fill",
        color: "text-[#38BDF8]",
        description: "Utility-first CSS framework.",
      },
      {
        name: "MUI",
        svg: <MUI />,
        color: "text-[#007FFF]",
        description: "Material UI React components library.",
      },
      {
        name: "GSAP",
        icon: "bi bi-code-slash",
        color: "text-[#6EC1E4]",
        description: "JavaScript library for animations.",
      },
    ],
  },
];

const SkillsSection = () => {
  const [active, setActive] = useState(0);

  // Get active category skills
  const activeSkills = skills[active]?.skills || [];

  return (
    <>
      <div className="flex items-center mt-20 justify-between h-screen w-full">
        <Sidebar active={active} setActive={setActive} icons={icons} />

        <div className="cards w-[80%] items-center mt-10 mx-10 h-[90%] gap-5 border p-5 flex flex-col justify-center">
          <h2 className="text-center pt-3 text-primary border-primary w-fit border-b-[1.7px] text-2xl">
            Frameworks & Libraries
          </h2>
          <div className="flex items-center justify-center flex-wrap gap-12 pt-4 w-full h-[90%]">
            {/* Render cards dynamically */}
            {activeSkills.map((skill, i) => (
              <div
                key={i}
                className="card w-[25%] shadow-shadow-dark bg h-[40%] rounded-2xl relative"
              >
                <div className="absolute flex flex-col items-center px-1 justify-center gap-2 h-full w-full">
                  {skill.icon && (
                    <i className={` ${skill.icon} ${skill.color} text-6xl`}></i>
                  )}
                  {skill.svg && <div className="pt-3">{skill.svg}</div>}

                  <strong>{skill.name}</strong>
                  <p className="text-center">{skill.description}</p>
                </div>
                <div className="bg-primary h-full w-full rotate-[10deg] rounded-2xl -z-10 absolute"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
