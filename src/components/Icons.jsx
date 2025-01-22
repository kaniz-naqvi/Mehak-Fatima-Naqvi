import React from "react";

const GitHub = () => {
  return <i className="ri-github-line text-2xl"></i>;
};
const LinkedIn = () => {
  return <i className="ri-linkedin-box-line text-2xl"></i>;
};
const Instagram = () => {
  return <i className="ri-instagram-line text-2xl"></i>;
};
const Pixabay = () => {
  return <img src="pixabay.png" className="w-6 py-[6.5px]" alt="" />;
};
const MoonIcon = () => {
  return <i className="ri-moon-line text-2xl"></i>;
};
const XMarkIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};
const Bars3Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};
const ArrowRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-10"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
export {
  GitHub,
  LinkedIn,
  Instagram,
  Pixabay,
  MoonIcon,
  ArrowRight,
  XMarkIcon,
  Bars3Icon,
};
