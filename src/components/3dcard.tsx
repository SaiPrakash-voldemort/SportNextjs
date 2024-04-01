"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import Image from "next/image";

export function ThreeDCardDemo() {
  return (
    <CardContainer>
      <div className="flex flex-col  h-[280px] w-[120px] dark:bg-slate-800 bg-white box-border sm:h-[350px] sm:w-[160px]">
        <div className="h-3/4 w-full flex flex-col items-center">
          <img
            src="https://i.pinimg.com/236x/d4/8e/2b/d48e2b7931c73dd59e1b2230c2d4b662.jpg"
            className="h-full w-full object-contain p-2 rounded-xl"
          ></img>

          <h1 className="dark:text-white text-black m-1 text-xs text-center sm:text-[1rem]">
            Sacramento River Cats
          </h1>
        </div>
        <div className="flex dark:bg-slate-600 bg-gray-400 text-white justify-around p-2 m-2 text-[8px] sm:text-[0.7rem]">
          <div className="flex flex-col items-start justify-center">
            <h1>Total Events</h1>
            <h1 className="dark:text-white text-black font-bold">48 Events</h1>
          </div>
          <div className="flex flex-col items-start justify-center">
            <h1>Sport</h1>
            <h1 className="dark:text-white text-black font-bold">Baseball</h1>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}
