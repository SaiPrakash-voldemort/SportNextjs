"use client";
import Hero from "@/components/Hero/Hero";
import Spotlight from "@/components/Spotlight/Spotlight";
import { Meteors } from "@/components/ui/meteors";
import { TracingBeam } from "@/components/ui/tracing-beam";
import React, { useState } from "react";

const page = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="dark:bg-black bg-slate-200">
        <TracingBeam className="px-8 ">
          <button
            className="absolute w-16 h-16 right-1 bg-transparent  dark:bg-white rounded-full text-white dark:text-black font-semibold"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <img
                height="50"
                width="50"
                src="https://cdn.iconscout.com/icon/premium/png-512-thumb/sun-2886246-2390677.png?f=webp&w=156"
              ></img>
            ) : (
              <img
                height="50"
                width="50"
                src="https://cdn.iconscout.com/icon/free/png-512/free-night-mode-1-470320.png?f=webp&w=156"
              ></img>
            )}
          </button>
          <Hero />

          <Spotlight />
        </TracingBeam>
      </div>
    </div>
  );
};

export default page;
