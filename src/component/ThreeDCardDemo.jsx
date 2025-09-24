import React from "react";
import { CardBody, CardContainer, CardItem } from "@/component/UI/3d-card";
import { FaReact, FaBootstrap ,FaHtml5, FaCss3Alt} from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

const iconMap = {
  FaReact: { icon: FaReact, color: "#61DBFB" },
  FaBootstrap: { icon: FaBootstrap, color: "#7952B3" },
  SiTailwindcss: { icon: SiTailwindcss, color: "#38BDF8" },
  SiJavascript: { icon: SiJavascript, color: "#F7DF1E" },
   FaHtml5: { icon: FaHtml5, color: "#E34F26" },
  FaCss3Alt: { icon: FaCss3Alt, color: "#1572B6" },
};

// Sample data for multiple cards
const cardData = [
  {
    title: "Personal Portfolio",
    description:
      "Professional Portfolio Showcasing Diverse Works and Expertise",
    imageUrl: "/images/image1.png",
    link: "https://github.com/Toaaassem/personal-portfolio",
    techStack: ["FaReact", "SiTailwindcss", "SiJavascript"],
  },
  {
    title: "To Do List",
    description:
      "A basic To-Do List where you can add, update, delete, and mark tasks as complete.",
    imageUrl: "/images/image2.png",
    link: "https://github.com/Toaaassem/ToDoList",
    techStack: ["FaReact", "FaBootstrap", "SiJavascript"],
  },
  {
    title: "Tic Tac Toe",
    description:
      "Players take turns to mark spaces on a 3x3 grid, trying to get three marks in a row.",
    imageUrl: "/images/image3.png",
    link: "https://github.com/Toaaassem/TicTacToe",
    techStack: ["FaReact", "FaBootstrap", "SiJavascript"],
  },
  {
    title: "FlexGo",
    description:
      "A platform that leverages personalized recommendations to connect users with trending entertainment.",
    imageUrl: "/images/image4.png",
    link: "https://github.com/Toaaassem/FlexGo",
    techStack: ["FaReact", "FaBootstrap", "SiJavascript"],
  },
  {
    title: "Travel",
    description:
      "Travel Landing page.",
    imageUrl: "/images/image9.png",
    link: "https://github.com/Toaaassem/Travel",
    techStack: [ "FaHtml5","FaCss3Alt"],
  },
  {
    title: " Product-Management-System",
    description:
      "Interactive Product Management System with Local Storage and Regex Validation.",
    imageUrl: "/images/image10.png",
    link: "https://github.com/Toaaassem/Product-Management-System",
    techStack: [ "FaHtml5","FaCss3Alt","SiJavascript"],
  },
];

const ThreeDCardDemo = () => {
  return (
    <div className="mx-auto bg-[#1B0B1B]">
      <div className="text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-[#87CEEB] to-[#ff6fa0] font-sans font-bold">
        <h1 className="text-4xl font-bold mb-2 pt-12">A Little From My Projects</h1>
      </div>

      {/* Grid without grouping */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-8 max-w-7xl mx-auto">
        {cardData.map((card, cardIndex) => (
          <div key={cardIndex} className="w-full">
            <CardContainer className="inter-var">
              <CardBody
                className="flex flex-col justify-between bg-gray-50 relative group/card 
                  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
                  dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
                  w-full h-auto h-[500px] rounded-xl p-6 border"
              >
                <div>
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold bg-clip-text text-transparent 
                    bg-gradient-to-b from-[#87CEEB] to-[#ff6fa0] text-center mb-5"
                  >
                    {card.title}
                  </CardItem>

                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={card.imageUrl}
                      className="h-56 sm:h-64 md:h-72 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>

                  <CardItem as="p" translateZ="60" className="text-white text-sm mt-4">
                    {card.description}
                  </CardItem>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={card.link}
                    target="_blank"
                    className="px-4 py-2 rounded-xl text-xs font-bold dark:text-white"
                  >
                    Dive In →
                  </CardItem>

                  <CardItem translateZ={20}>
                    <div className="flex items-center gap-3">
                      {card.techStack.map((tech, index) => {
                        const IconComponent = iconMap[tech].icon;
                        const iconColor = iconMap[tech].color;
                        return IconComponent ? (
                          <IconComponent key={index} size={26} style={{ color: iconColor }} />
                        ) : null;
                      })}
                    </div>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ThreeDCardDemo;
