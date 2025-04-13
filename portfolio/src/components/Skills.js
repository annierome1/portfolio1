import React, { useState } from "react";
import { ChipIcon } from "@heroicons/react/solid";
import { skills } from "../data"; // Import skills data
import SkillItem from "./skillItem"; // Import the SkillItem component
import "./Resume.css";

export default function Skills() {
  const categories = Object.keys(skills);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section id="skills" className="relative bg-gray-900 text-center py-10 sm:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-8">
          <ChipIcon className="w-10 mx-auto mb-4 text-purple-100" />
          {/* Optional Tooltip could be added here */}
          <h1 className="text-3xl sm:text-4xl font-medium title-font text-purple-100">
            Tech Stack &amp; Skills
          </h1>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-6 space-x-2 sm:space-x-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 sm:px-5 sm:py-2 font-medium rounded-lg transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-purple-100 text-gray-800"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Container */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-xl flex justify-center mx-auto w-full max-w-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 w-full justify-center items-center">
            {skills[selectedCategory]?.map((skill, index) => (
              <SkillItem key={`${selectedCategory}-${index}`} skillName={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
