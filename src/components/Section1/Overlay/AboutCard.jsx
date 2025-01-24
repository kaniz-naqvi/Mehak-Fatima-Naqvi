import React from "react";
const AboutCard = ({
  index,
  studyProgram,
  instituteName,
  year,
  yearOfWork,
  position,
  jobType,
  company,
}) => {
  return (
    <div
      key={index}
      className="w-[90%] border-t-[1.5px] border-[#ffffffa8] overflow-x-hidden"
    >
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex flex-col">
          <strong className="tracking-wide">
            <p>{studyProgram ? studyProgram : position}</p>
          </strong>
          <p>{instituteName ? instituteName : company}</p>
        </div>
        <div className="flex flex-col items-end">
          <p>{year ? year : yearOfWork}</p>
          {jobType && <p>{jobType}</p>}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
