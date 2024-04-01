import React from "react";
import { ThreeDCardDemo } from "../3dcard";
import BottomCard from "../BottomCard";

const Spotlight = () => {
  return (
    <div className="mt-4 p-4 h-full dark:bg-gradient-to-t from-gray-900 to-green-900 bg-white flex flex-col gap-3 justify-center ">
      <div className="w-[100%] rounded-md h-full">
        <div className="dark:text-white text-black text-center m-1 p-1">
          <h1 className="text-xl m-1 p-1 sm:text-3xl">Collection Spotlight</h1>
          <h1 className="text-xs m-1 p-1 sm:text-xl">
            Discover extraordinary moments with our Spotlight Collection meta
            tickets-exclusive access to premium events for an unforgettable
            experience.Grab yours today!
          </h1>
        </div>
        <div className="flex flex-wrap  justify-center gap-4 h-[750px] mt-8 sm:h-[750px] md:h-[510px]">
          {" "}
          <BottomCard />
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
