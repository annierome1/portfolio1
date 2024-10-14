import { CodeIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { projects } from "../data";
import { FaReact, FaGithub, FaUnity, FaVideo, FaNodeJs } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { SiDjango, SiMysql, SiBlender, SiUnrealengine } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrHeroku } from "react-icons/gr";
import { IoLogoVercel } from "react-icons/io5";
import { AiOutlineOpenAI } from "react-icons/ai";

// Map icon names to actual icon components
const iconComponents = {
  FaReact: FaReact,
  SiDjango: SiDjango,
  SiMysql: SiMysql,
  SiBlender: SiBlender,
  SiUnrealengine: SiUnrealengine,
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
  
  const categories = [...new Set(projects.map((project) => project.category))];

 
  return (
    <section id="projects" className="text-gray-800 bg-purple-100 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-800">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These are all of the projects I have created or been a part of. For a further look into the code of each, check out my GitHub.
          </p>
        </div>

        {categories.map((category, catIndex) => (
          <div key={catIndex} className="mb-10">
            {/* Category Title */}
            <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-bold text-purple-100 mb-6">{category}</h2>
              
              {/* Box to group category projects */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {projects
                  .filter((project) => project.category === category)
                  .map((project, index) => (
                    <div key={index} className="p-4 bg-gray-800 rounded-lg border border-gray-800">
                      <div className="relative flex flex-col items-center bg-purple-100 p-6 rounded-lg">
                        {/* GitHub or Video Link */}
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-2 right-2 text-gray-800 hover:text-white"
                          >
                            <FaGithub className="text-2xl" />
                          </a>
                        ) : project.video ? (
                          <a
                            href={project.video}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-2 right-2 text-gray-800 hover:text-white"
                          >
                            <FaVideo className="text-2xl" />
                          </a>
                        ) : null}

                        {/* Project Title and Description */}
                        <div className="flex flex-col items-center mb-4">
                          <h2 className="text-sm font-medium text-gray-800 mb-2">
                            {project.subtitle}
                          </h2>
                          <h1 className="text-lg font-medium text-gray-800 mb-2">
                            {project.title}
                          </h1>
                          <p className="leading-relaxed text-gray-800">
                            {project.description}
                          </p>
                        </div>

                        {/* Show extended details and technologies */}
                        <div className="mt-2 w-full bg-gray-800 text-purple-100 p-4 rounded">
                          {project.link &&(
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mb-2 text-purple-100"
                          >
                            View Project
                          </a>
                          )}
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
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}