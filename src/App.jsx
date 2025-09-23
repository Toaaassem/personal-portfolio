import { useState } from "react";
import "./App.css";
import Home from "./component/Home";
import { FloatingNavDemo } from "./component/FloatingNavDemo";
import { TailwindcssButtons } from "./component/TailwindcssButtons";
import StickyScrollRevealDemo from "./component/StickyScrollRevealDemo";
import ThreeDCardDemo from "./component/ThreeDCardDemo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardHoverEffectDemo } from "./component/CardHoverEffectDemo";

import Getintouch from "./component/Getintouch";

function App() {
  return (
    <div>
      <FloatingNavDemo />
      <div id="home">
        <Home />
      </div>

      <div id="about">
        <StickyScrollRevealDemo />
      </div>
      
      <div id="projects">
        <ThreeDCardDemo />
      </div>
<div id="services "className="bg-white">
  <CardHoverEffectDemo/>
</div>

    <div>
      <Getintouch />
    </div>
    </div>

    
  );
}


export default App;
