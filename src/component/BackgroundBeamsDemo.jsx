"use client";
import React from "react";
import { BackgroundBeams } from "./UI/background-beams";
export function BackgroundBeamsDemo() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="h-[49rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-5xl sm:text-7xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-[#87CEEB] to-[#ff6fa0]  text-center font-sans font-bold">
          A Software Engineer Specialized in React.js
        </h1>
        <p></p>
        <p className="text-white font-semibold max-w-lg mx-auto my-10 text-sm text-center relative z-10">
          Hi there! I’m Toqa , a Front-End Developer who creates stunning
          websites.
        </p>
        <div className=" flex flex-column justify-center">
        <button
  className="relative z-50 inline-flex h-10 w-50 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
  onClick={() =>
    window.open(
      "https://drive.google.com/file/d/1yK3VGN94w-cW-_UL8BEq3YmFofsia4pu/view?usp=sharing",
      "_blank"
    )
  }
>
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    View CV
  </span>
</button>




        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
