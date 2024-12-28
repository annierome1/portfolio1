import React, { useState } from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../data"; // Import your skills data
import './skills.css';
import { SiPython, SiCplusplus, SiReact, SiDjango, SiUnrealengine, SiUnity, SiPostman, SiGit, SiBlender, SiMysql, SiPostgresql, SiMongodb} from "react-icons/si"; // Import icons
import { IoLogoJavascript } from "react-icons/io5";
import { VscAzureDevops } from "react-icons/vsc";
import { FaNodeJs, FaJava, FaSwift, FaHtml5, FaCss3Alt, FaVrCardboard, FaAws  } from "react-icons/fa";

// Map the skills to their corresponding icons
const skillIcons = {
  JavaScript: <IoLogoJavascript className="text-yellow-400 w-10 h-10" />, // Official JS logo is more yellow-gold
  Python: <SiPython className="text-blue-400 w-10 h-10" />, // Python has a blue-yellow color scheme, blue for logos
  Java: <FaJava className="text-red-700 w-10 h-10" />, // Java logo has a slightly darker red
  "C++": <SiCplusplus className="text-blue-600 w-10 h-10" />, // C++ uses a darker shade of blue
  Swift: <FaSwift className="text-orange-500 w-10 h-10" />, // Swift's logo is orange as you had it
  HTML: <FaHtml5 className="text-orange-600 w-10 h-10" />, // HTML uses a deep orange
  CSS: <FaCss3Alt className="text-blue-600 w-10 h-10" />, // CSS is typically a darker shade of blue
  React: <SiReact className="text-cyan-500 w-10 h-10" />, // React uses a lighter cyan color for its logo
  Django: <SiDjango className="text-green-700 w-10 h-10" />, // Django's logo uses a deeper green
  Blender: <SiBlender className="text-orange-600 w-10 h-10" />, // Blender's orange is darker
  "Unreal Engine": <SiUnrealengine className="text-black w-10 h-10" />, // Unreal Engine logo is primarily black
  Unity: <SiUnity className="text-black-100 w-10 h-10" />, // Unity logo is black, as you had it
  Postman: <SiPostman className="text-orange-600 w-10 h-10" />, // Postman logo is a deep orange
  MySQL: <SiMysql className="text-blue-600 w-10 h-10" />, // MySQL uses a darker blue
  Postgres: <SiPostgresql className="text-blue-500 w-10 h-10" />, // PostgreSQL has a blue elephant logo
  "Node.js": <FaNodeJs className="text-green-500 w-10 h-10" />, // Node.js uses a brighter green
  Git: <SiGit className="text-orange-600 w-10 h-10" />, // Git logo is officially orange
  VR: <FaVrCardboard className="text-orange-600 w-10 h-10" />,
  AzureDevOPs: <VscAzureDevops className  = "text-blue-500 w-10 h-10" /> ,
  MongoDB: <SiMongodb className = "text-green-500 w-10 h-10" />,
  AWS: <FaAws className = "text-blue-500 w-10 h-10" />
    
};


export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("Languages");

  return (
    <section id="skills" className="relative bg-gray-800">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4 text-purple-100" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-purple-100 mb-4">
            Tech Stack and Skills
          </h1>
        </div>

        {/* Tabs for categories */}
        <div className="tabs flex justify-center mb-8">
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 mx-2 font-medium ${
                selectedCategory === category
                  ? "bg-purple-100 text-gray-800"
                  : "bg-gray-300 text-gray-800"
              } rounded-lg hover:bg-purple-200`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Display skills for selected category */}
        <div className="skill-container">
          {skills[selectedCategory].map((skill) => (
            <div key={skill} className="skill-item">
              
                {skillIcons[skill]} {/* Display the skill icon */}
                <span className="title-font font-medium text-white absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {skill} {/* Show the skill name on hover */}
                </span>
              </div>
           
          ))}
        </div>
      </div>
    </section>
  );
}
