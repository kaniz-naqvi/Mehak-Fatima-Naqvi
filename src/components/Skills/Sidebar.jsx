import React from "react";

const Sidebar = ({ icons, active, setActive }) => {
  return (
    <div className="flex flex-col justify-center gap-8 text-xl items-center sticky">
      {icons.map((icon, index) => {
        const isActive = active === index;
        return (
          <i
            key={index}
            className={`bi ${icon} ps-5  text-3xl lg:text-5xl cursor-pointer transition-all duration-100 ease-linear border-l-4  ${
              isActive && "text-primary border-primary"
            }`}
            onClick={() => setActive(index)}
          ></i>
        );
      })}
    </div>
  );
};

export default Sidebar;
