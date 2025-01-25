import React from "react";
import Borders from "./Borders";
import Education from "./Education";
import Experience from "./Experience";
import AboutMe from "./AboutMe";

const educationDetails = [
  {
    studyProgram: "BSCS",
    instituteName: "Virtual University",
    year: "2023 - present",
  },
  {
    studyProgram: "ICS",
    instituteName: "Students' Inn",
    year: "2021 - 2023",
  },
];

const workDetails = [
  {
    position: "FrontEnd Developer",
    company: "CodeAlpha",
    yearOfWork: "Oct-Nov, 2024",
    jobType: "Intern",
  },
  {
    position: "React Developer",
    company: "Cloud Ignite",
    yearOfWork: "Jan-Feb, 2025",
    jobType: "Contract",
  },
];

const Overlay = ({ overlayVisible, setOverlayVisible }) => {
  return (
    <div
      className={`fixed h-full w-full top-0 left-0 bg-[#000000d5] z-50 lg:p-16 md:p-10 overflow-y-auto lg:overflow-y-hidden overflow-x-hidden transform ${
        overlayVisible ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-1000 ease-in-out`} // Slide effect
    >
      <div className="relative min-h-screen w-full">
        {/* Background Container */}
        <div className="inset-0 sm:bg-none lg:bg-[url('/your-background-image.jpg')] bg-cover bg-center z-10"></div>

        {/* Overlay Content */}
        <div className="relative min-h-screen w-full">
          <div className="w-full h-full rounded-3xl bg-[url('/laptop.png')] text-light bg-cover bg-center relative">
            {/* Purple Background div */}
            <div className="lg:bg-[#d1057fcb] px-0 py-0 min-h-full bg-primary lg:rounded-3xl md:rounded-3xl relative w-full overflow-x-hidden overflow-y-auto flex flex-col">
              <Borders setOverlayVisible={setOverlayVisible} />
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-full h-full lg:gap-8 flex-1 overflow-y-auto overflow-x-hidden">
                {/* Left Column */}
                <div className="w-full lg:ms-10 lg:px-5 p-4">
                  <AboutMe />
                </div>

                {/* Right Column */}
                <div className="w-full lg:py-10 ps-4 lg:px-5 relative lg:border-l-[1px] border-light h-[90%] lg:mt-8">
                  <div className="lg:bg-[url('border-half.png')] lg:w-[40%] lg:block hidden h-[60%] w-[70%] right-0 absolute bottom-[-3%] scale-y-[-1] scale-x-[-1] bg-contain bg-no-repeat bg-top p-10"></div>
                  <Education educationDetails={educationDetails} />
                  <Experience workDetails={workDetails} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
