"use client";
import React from "react";
import { StickyScroll } from "./UI/sticky-scroll-reveal";

const content = [
  {
    title: "Me as a Developer",
    description:
      "I’m a developer dedicated to crafting clean, efficient, and user-centric solutions. I specialize in building modern Websites that deliver seamless experiences and intuitive designs, ensuring both functionality and aesthetics align with user needs.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white font-bold text-lg ">
        Me as a Developer
      </div>
    ),
  },
  {
    title: "Dealing with Clients",
    description:
      "I prioritize clear communication and collaboration to understand client needs and deliver tailored solutions. My approach is customer-centric, ensuring projects are completed on time, meet expectations, and exceed goals.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white font-bold text-lg">
        Dealing with Clients
      </div>
    ),
  },
  {
    title: "Improving Myself",
    description:
      "I’m committed to continuous learning by exploring new technologies, participating in coding challenges, and staying updated with industry trends. I also seek feedback to refine my skills and expand my expertise.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white font-bold text-lg">
        Improving Myself
      </div>
    ),
  },
  {
    title: "My Tech Stack",
    description: (
      <div className="space-y-2 text-white">
        <p>→ React.js</p>
        <p>→ TypeScript</p>
        <p>→ TailwindCSS</p>
        <p>→ Bootstrap</p>
        <p>→ Framer Motion</p>
        <p>→ Git & GitHub</p>
      </div>
    ),
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white font-bold text-lg">
        My Tech Stack
      </div>
    ),
  },
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full  ">
      <StickyScroll content={content} />
    </div>
  );
}
