import React from "react";
import AboutCard from "./AboutCard";

const Experience = ({ workDetails }) => {
  return (
    <div>
      <h2 className="heading text-3xl mt-5 mb-2 font-semibold">Experience</h2>
      {workDetails.map((object, index) => (
        <AboutCard
          key={index}
          position={object.position}
          yearOfWork={object.yearOfWork}
          company={object.company}
          jobType={object.jobType}
        />
      ))}
    </div>
  );
};

export default Experience;
