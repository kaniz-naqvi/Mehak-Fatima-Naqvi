import React from "react";
import AboutCard from "./AboutCard";

const Education = ({ educationDetails }) => {
  return (
    <div>
      <h2 className="heading text-3xl lg:mt-5 mb-2 md:mt-0 font-semibold">
        Education
      </h2>
      {educationDetails.map((object, index) => (
        <AboutCard
          key={index}
          instituteName={object.instituteName}
          year={object.year}
          studyProgram={object.studyProgram}
        />
      ))}
    </div>
  );
};

export default Education;
