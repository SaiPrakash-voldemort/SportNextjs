import React from "react";
import { Meteors } from "../ui/meteors";
import { ThreeDCardDemo } from "../3dcard";

const Hero = () => {
  return (
    <div className="flex  flex-col w-screen dark:text-white text-black">
      <div className="flex items-start">
        <h1 className=" text-2xl mt-3 underline decoration-slate-500 decoration-4 px-3 sm:text-3xl">
          Sports
        </h1>
      </div>

      <div className="flex items-center justify center flex-wrap gap-2 p-3 mt-3  ">
        <ThreeDCardDemo />
        <ThreeDCardDemo />
        <ThreeDCardDemo />
        <ThreeDCardDemo />
        <ThreeDCardDemo />
      </div>
      <div className="flex mx-[28%]">
        <a
          href="#_"
          className="relative inline-flex items-center justify-start dark:bg-transparent bg-blue-300 border-none inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
        >
          <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
          <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 text-xs">
            See More
          </span>
          <span className="absolute inset-0 border-2 border-white rounded-full"></span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
