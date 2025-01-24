import React from "react";
import { XMarkIcon } from "../../Icons";

const Borders = ({ setOverlayVisible }) => {
  return (
    <>
      <div className="bg-[url('border-half.png')] hidden lg:block lg:w-[20%] h-[55%] lg:left-0 left-3 w-[70%] absolute top-0 bg-contain bg-no-repeat bg-top"></div>
      <div
        className="top-3 right-3 fixed cursor-pointer"
        onClick={() => setOverlayVisible(false)}
      >
        <XMarkIcon />
      </div>
    </>
  );
};

export default Borders;
