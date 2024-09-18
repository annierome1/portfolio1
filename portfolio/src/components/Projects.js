import { CodeIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { projects } from "../data";
import { FaReact, FaGithub, FaUnity, FaVideo, FaNodeJs } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { SiDjango, SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrHeroku } from "react-icons/gr";
import { IoLogoVercel } from "react-icons/io5";
import { AiOutlineOpenAI } from "react-icons/ai";

// Map icon names to actual icon components
const iconComponents = {
  FaReact: FaReact,
  SiDjango: SiDjango,
  SiMysql: SiMysql,
  FaUnity: FaUnity,
  FaMeta: FaMeta,
  FaNodeJs: FaNodeJs,
  RiTailwindCssFill: RiTailwindCssFill,
  GrHeroku: GrHeroku,
  AiOutlineOpenAI: AiOutlineOpenAI,
  IoLogoVercel: IoLogoVercel,




  // Add other icons as necessary
};

const renderIcon = (iconName) => {
  const IconComponent = iconComponents[iconName];
  return IconComponent ? <IconComponent className="text-3xl mx-2" /> : null;
};

export default function Projects() {
  const [visibleDropdowns, setVisibleDropdowns] = useState({});

  const toggleDropdown = (index) => {
    setVisibleDropdowns((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section id="projects" className="text-purple-100 bg-gray-800 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-purple-100">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These are all of the projects I have created or been a part of. For a further look into the code of each, check out my GitHub.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="p-4">
              <div className="relative flex flex-col items-center">
                <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900">
                  {/* Conditional rendering for GitHub or video icon */}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-2 right-2 text-gray-400 hover:text-white"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                  ) : project.video ? (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-2 right-2 text-gray-400 hover:text-white"
                    >
                      <FaVideo className="text-2xl" />
                    </a>
                  ) : null}
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="tracking-widest text-sm title-font font-medium text-gray-200">
                      {project.subtitle}
                    </h2>
                  </div>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <button
                    className="mt-4 bg-purple-200 text-gray-800 px-4 py-2 rounded"
                    onClick={() => toggleDropdown(index)}
                  >
                    {visibleDropdowns[index] ? "Hide Details" : "Show Details"}
                  </button>
                </div>
                {visibleDropdowns[index] && (
                  <div className="mt-2 w-full bg-gray-700 text-white p-4 rounded">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mb-2 text-blue-400"
                    >
                      View Project
                    </a>
                    <p>{project.extendedDescription}</p>
                    <div className="flex justify-center mt-4">
                      {project.technologies &&
                        project.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="text-3xl mx-2">
                            {renderIcon(tech.icon)}
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
