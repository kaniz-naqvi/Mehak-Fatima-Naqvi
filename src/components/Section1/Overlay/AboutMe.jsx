import React from "react";
import { DownloadIcon } from "../../Icons";
const AboutMe = () => {
  return (
    <div className="overflow-x-hidden">
      <h2 className="heading text-4xl mt-14 mb-5 font-semibold">About me</h2>
      <p className="lg:leading-[35px] leading-relaxed lg:pr-20">
        I’m Mehak, a 19-year-old front-end developer currently diving deep into
        backend technologies. I’m that person who loves solving design
        challenges, creating smart and clean UIs, and building websites that
        feel alive. When I’m not coding, you’ll catch me watching K-dramas or
        practicing my sketching skills. I’m all about turning ideas into
        interactive web experiences. Ready to take on the next big challenge,
        and always eager to learn something new!
      </p>
      <button className="p-2 uppercase my-5 lg:mt-10 border-light border-2 flex items-center justify-between gap-3">
        Download Resume <DownloadIcon />
      </button>
    </div>
  );
};

export default AboutMe;
