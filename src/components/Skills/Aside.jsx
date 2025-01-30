import React from "react";

const Aside = ({ icons, active, setActive }) => {
  return (
    <div className="flex sticky my-4 flex-col justify-center gap-3 lg:gap-8 text-xl items-center">
      {icons.map((i, index) => {
        const isActive = active === index;
        return (
          <div
            key={index}
            className={`w-full flex flex-col ps-1 justify-center items-center cursor-pointer transition-all duration-100 ease-linear border-l-4  ${
              isActive && "text-primary border-primary"
            }`}
            onClick={() => setActive(index)}
          >
            <i className={`bi ${i.icon} text-3xl lg:text-5xl `}></i>
            <span
              className={`lg:text-sm text-[0.6rem] font-semibold   ${
                isActive ? "text-primary" : "text-gray-600"
              }`}
            >
              {i.span}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Aside;
