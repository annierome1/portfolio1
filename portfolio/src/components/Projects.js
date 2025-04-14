import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data";
import "./projects.css";

// Utility function to shuffle an array in place
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function ProjectCard({ project, index, flippedIndex, setFlippedIndex }) {
  // This card is flipped if its index matches flippedIndex
  const isFlipped = flippedIndex === index;

  const handleFlip = () => {
    // If already flipped, unflip. Otherwise flip this card and unflip any other
    setFlippedIndex(isFlipped ? -1 : index);
  };

  return (
    <div
      className="flip-card relative w-full h-[400px] cursor-pointer group"
      onClick={handleFlip}
    >
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        
        {/* FRONT */}
        <div className="flip-card-front absolute w-full h-full p-6 bg-[#1f2937] rounded-lg shadow-lg flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-bold text-purple-100">{project.title}</h2>
          {project.subtitle && (
            <p className="text-sm text-purple-300 mt-2">{project.subtitle}</p>
          )}
        </div>
        
        {/* BACK */}
        <div className="flip-card-back absolute w-full h-full p-6 bg-[#1f2937] rounded-lg shadow-lg flex flex-col justify-center items-center text-center text-purple-100 transform rotate-y-180">
          <div className="items-center relative z-10">
            <p className="text-sm mb-2">{project.description}</p>
            {project.functions && (
              <>
                <h4 className="font-semibold mb-1">Main Functions</h4>
                <ul className="list-disc list-inside text-sm mb-2 text-left">
                  {project.functions.map((func, idx) => (
                    <li key={idx}>{func}</li>
                  ))}
                </ul>
              </>
            )}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies?.map((tech) => (
                <span
                  key={tech.name}
                  className="bg-purple-200 text-gray-900 px-2 py-1 rounded text-xs font-medium"
                >
                  {tech.name}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 justify-center">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white text-md inline-flex items-center"
                  onClick={(e) => e.stopPropagation()} // do NOT flip if link is clicked
                >
                  <FaGithub className="mr-1" /> Code
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white text-md"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("completed");
  // Track which card is flipped
  const [flippedIndex, setFlippedIndex] = useState(-1);

  // Separate your projects by category
  const completedProjects = projects.filter((p) => p.status === "completed");
  const schoolCodeExamples = projects.filter((p) => p.category === "School");

  // Shuffle the "completed" projects only once (when component mounts).
  // Or you could do it every time you switch tabs if you prefer.
  const [shuffledCompletedProjects, setShuffledCompletedProjects] = useState(() => {
    const temp = [...completedProjects];
    shuffleArray(temp);
    return temp;
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFlippedIndex(-1); // unflip all cards when tab changes

    // Optional: if you want a new shuffle each tab switch, do:
    // if (tab === 'completed') {
    //   const temp = [...completedProjects];
    //   shuffleArray(temp);
    //   setShuffledCompletedProjects(temp);
    // }
  };

  return (
    <section id="projects" className="text-purple-100 bg-gray-900 body-font">
      <div className="container px-4 py-10 mx-auto text-left lg:px-20">

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <button
            className={`px-4 py-2 font-bold ${activeTab === "completed" ? "bg-purple-200 text-gray-700" : "bg-gray-800 text-purple-100"} rounded-lg mr-2`}
            onClick={() => handleTabChange("completed")}
          >
            Completed Projects
          </button>
          <button
            className={`px-4 py-2 font-bold ${activeTab === "school" ? "bg-purple-200 text-gray-700" : "bg-gray-800 text-purple-100"} rounded-lg`}
            onClick={() => handleTabChange("school")}
          >
            School Projects
          </button>
        </div>

        {/* Completed Projects */}
        {activeTab === "completed" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {shuffledCompletedProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                flippedIndex={flippedIndex}
                setFlippedIndex={setFlippedIndex}
              />
            ))}
          </div>
        )}

        {/* School Projects */}
        {activeTab === "school" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {schoolCodeExamples.map((project, idx) => (
              <div key={project.title} className="p-6 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold text-purple-100 text-center mb-4">{project.title}</h2>
                <p className="text-sm text-purple-200">{project.description}</p>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center block mt-4 text-purple-200 hover:text-white"
                  >
                    <FaGithub className="inline-block mr-1" /> View Code
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
