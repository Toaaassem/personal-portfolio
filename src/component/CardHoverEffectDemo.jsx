import { HoverEffect } from "../component/UI/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="w-full mx-auto px-8  bg-[#000000] min-h-screen">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Responsive Web Design",
    description:
      "I design and build fully responsive, dynamic web interfaces using React.js, HTML5, CSS3, and modern styling frameworks like Bootstrap or Tailwind CSS to ensure seamless experiences across all devices",
    
  },
  {
    title: "React.js Frontend Development",
    description:
      "I create fast, scalable, and maintainable web applications using React.js. I specialize in component-based architecture, hooks, and state management",
    
  },
  {
    title: "UI/UX Implementation",
    description:
      "I convert Figma or Adobe XD designs into pixel-perfect, accessible user interfaces with attention to detail and usability",
    
  },
  {
    title: "Performance Optimization",
    description:
      "I optimize loading speed, reduce render-blocking resources, and ensure your web app scores high on Lighthouse performance metrics.",
    
  },
  {
    title: "Web App Maintenance ",
    description:
      "I help maintain and refactor existing codebases to improve performance, fix bugs, and upgrade to modern tech stacks where needed",
    
  },
  {
    title: "API Integration",
    description:
      "I integrate RESTful and GraphQL APIs into frontend applications to enable dynamic content and smooth user experiences.",
    
  },
];
