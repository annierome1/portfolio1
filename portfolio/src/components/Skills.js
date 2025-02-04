import React, { useState } from "react";
import { ChipIcon } from "@heroicons/react/solid";
import { FaInfoCircle } from 'react-icons/fa';
import { skills } from "../data"; // Import skills data
import SkillItem from "./skillItem"; // Import the SkillItem component
import './Resume.css'


export default function Skills() {
  const categories = Object.keys(skills);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section id="skills" className="relative bg-gray-900 text-center py-14">
      <div className="container px-5 mx-auto">
        {/* Section Title */}
        <div className="mb-10">
          <ChipIcon className="w-10 mx-auto mb-4 text-purple-300" />
          <div className="tooltip">
            {/*
            <FaInfoCircle className="text-gray-800 cursor-pointer" />
              <span className="tooltiptext">Green = Mastery 
                Red = Begginner
              </span>
            */}
           </div>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
            Tech Stack & Skills
          </h1>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-6 space-x-3 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 font-medium rounded-lg ${
                selectedCategory === category
                  ? "bg-purple-200 text-gray-600"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

      {/* Skills Container (Grid Layout for Better Spacing) */}
      <div className="bg-gray-800 p-6 rounded-xl flex justify-center mx-auto w-full max-w-xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full justify-center items-center">
          {skills[selectedCategory]?.map((skill, index) => (
            <SkillItem
              key={`${selectedCategory}-${index}`}
              skillName={skill.name}
              skillLevel={skill.level} // Pass level from data.js
            />
          ))}
        </div>
      </div>


      </div>
    </section>
  );
}