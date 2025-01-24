import React from "react";
import { XMarkIcon } from "../Icons";

const Borders = () => {
  return (
    <>
      <div className="bg-[url('border-half.png')] lg:w-[20%] h-[55%] lg:left-0 left-3 w-[70%] absolute top-0 bg-cover bg-top"></div>
      <div className="top-3 right-3 fixed">
        <XMarkIcon />
      </div>
    </>
  );
};

const Overlay = () => {
  return (
    <>
      {/* Apply the reset styles directly inside the component */}
      <div className="relative min-h-screen w-full overflow-hidden">
        <div className="relative min-h-screen w-full">
          {/* Background Container */}
          <div className="inset-0 sm:bg-none lg:bg-[url('/your-background-image.jpg')] bg-cover bg-center z-10"></div>

          {/* Overlay */}
          <div className="fixed h-full w-full top-0 left-0 bg-[#000000d5] z-50 p-10 overflow-y-auto">
            <div className="w-full h-full rounded-3xl bg-[url('/laptop.png')] text-light bg-cover bg-center relative">
              {/* Purple Background div */}
              <div className="lg:bg-[#d1057fa8] min-h-full bg-primary rounded-3xl relative w-full overflow-x-hidden overflow-y-auto flex flex-col">
                <Borders />
                <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-8 flex-1 overflow-auto">
                  {/* Left Column */}
                  <div className="w-full ms-10 lg:px-5">
                    <h2 className="heading text-4xl mt-14 mb-5 font-semibold">
                      About me
                    </h2>
                    <p className="leading-[35px] pr-20">
                      Hi, I’m Mehak, a full-stack developer passionate about
                      building innovative web applications. With expertise in
                      HTML, CSS, JavaScript, React, and Node.js, I focus on
                      creating responsive and user-friendly projects. I'm driven
                      by the goal of using technology to create impactful
                      solutions, especially in my community. When I’m not
                      coding, I enjoy exploring K-dramas, sketching, and
                      learning new skills. I’m always eager to collaborate on
                      exciting projects, so feel free to reach out!
                    </p>
                    <button className="p-2 uppercase my-5 lg:mt-10 border-light border-2 ">
                      Download Resume
                    </button>
                  </div>

                  {/* Right Column */}
                  <div className="w-full py-10 lg:px-5 relative sm:border-t-[1px] lg:border-l-[1px] border-light">
                    <div className="bg-[url('border-half.png')] lg:w-[40%] h-[55%] w-[70%] right-0 absolute bottom-0 scale-y-[-1] scale-x-[-1] bg-cover bg-top"></div>
                    {/* Right column content */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overlay;
