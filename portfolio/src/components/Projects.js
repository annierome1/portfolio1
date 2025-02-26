import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";
import { FaReact, FaGithub, FaUnity, FaVideo, FaNodeJs, FaSwift, FaAws, FaJava } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { SiDjango, SiMysql, SiBlender, SiUnrealengine, SiMongodb, SiPostman, SiPython, SiFastapi } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrHeroku } from "react-icons/gr";
import { IoLogoVercel } from "react-icons/io5";
import { AiOutlineOpenAI } from "react-icons/ai";
// Map icon names to actual icon components
import React, { useState, useEffect, useRef } from "react";

const DynamicText = ({ text }) => {
  const [fontSize, setFontSize] = useState("text-lg"); // Default size
  const textRef = useRef(null);
  useEffect(() => {
    if (textRef.current) {
      const length = text.length;
      if (length > 200) setFontSize("text-sm");
      else if (length > 100) setFontSize("text-base");
      else setFontSize("text-lg");
    }
  }, [text]);
  return (
    <p ref={textRef} className={`text-purple-200 ${fontSize} text-center leading-snug`}>
      {text}
    </p>
  );
};


const iconComponents = {
  FaReact,
  SiDjango,
  SiMysql,
  SiBlender,
  SiUnrealengine,
  FaUnity,
  FaMeta,
  FaSwift,
  FaNodeJs,
  RiTailwindCssFill,
  GrHeroku,
  AiOutlineOpenAI,
  IoLogoVercel,
  FaAws,
  VscAzureDevops,
  SiMongodb,
  SiPostman, 
  FaJava,
  SiPython,
  SiFastapi

};

const renderIcon = (iconName) => {
  const IconComponent = iconComponents[iconName];
  return IconComponent ? <IconComponent className="text-4xl mx-2 text-purple-200" /> : null;
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("completed");

  const completedProjects = projects.filter(
    (project) => project.status === "completed"
  );
  const inDevelopmentProjects = projects.filter(
    (project) => project.status === "in-development"
  );
  const schoolCodeExamples = projects.filter(
    (project) => project.category === "School"
  );

  const renderSchoolProject = (project) => (
    <div
      key={project.id}
      className="p-6 bg-gray-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between h-full min-h-[250px]"
    >
      <h2 className="text-lg font-bold text-purple-100 text-center mb-4">{project.title}</h2>

      <div className="flex-grow flex items-center justify-center text-center">
        <DynamicText text={project.description} />
      </div>
  
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 text-purple-300 hover:text-white"
        >
          <FaGithub className="text-2xl" />
        </a>
      )}
    </div>
  );
  

  const renderProject = (project) => (
    <div
      key={project.id}
      className="p-4 bg-gray-800 rounded-lg shadow-lg flex flex-col justify-between h-full min-h-[350px] transform transition-transform hover:scale-105 hover:shadow-2xl"
    >
      {/* Title & Header Section - Stays at the Top */}
      <div>
        <h2 className="text-lg font-bold text-purple-100">{project.title}</h2>
      </div>
  
      {/* Centered Description Section */}
      <div className="flex-grow flex items-center justify-center text-center">
        <DynamicText text ={project.description}/>
      </div>
  
      {/* Technologies Section */}
      {project.technologies && (
        <div className="mt-auto p-4 bg-gray-900 rounded-lg flex items-center justify-center">
          <div className="flex space-x-4">
            {project.technologies.map((tech, techIndex) => (
              <div key={techIndex} className="p-2 flex items-center justify-center">
                {renderIcon(tech.icon)}
              </div>
            ))}
          </div>
        </div>
      )}
  
      {/* Links */}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 text-purple-300 hover:text-white"
        >
          <FaGithub className="text-2xl" />
        </a>
      )}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-white mt-4 inline-block"
        >
          View Project
        </a>
      )}
    </div>
  );
  
  

  return (
    <section id="projects" className="text-gray-800 bg-purple-100 body-font">
      <div className="container px-4 py-10 mx-auto text-center lg:px-20">
        {/* Tabs for navigation */}
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 font-bold ${
              activeTab === "completed" ? "bg-gray-800 text-purple-100" : "bg-purple-100 text-gray-800"
            } rounded-lg mr-2`}
            onClick={() => setActiveTab("completed")}
          >
            Completed Projects
          </button>
          <button
            className={`px-4 py-2 font-bold ${
              activeTab === "in-development" ? "bg-gray-800 text-purple-100" : "bg-purple-100 text-gray-800"
            } rounded-lg mr-2`}
            onClick={() => setActiveTab("in-development")}
          >
            Projects in Development
          </button>
          <button
            className={`px-4 py-2 font-bold ${
              activeTab === "school" ? "bg-gray-800 text-purple-100" : "bg-purple-100 text-gray-800"
            } rounded-lg`}
            onClick={() => setActiveTab("school")}
          >
            School Projects
          </button>
        </div>

        {/* Content based on active tab */}
        {activeTab === "completed" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {completedProjects.map((project) => renderProject(project))}
        </div>
        
        )}

        {activeTab === "in-development" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {inDevelopmentProjects.map((project) => renderProject(project))}
          </div>
        )}

        {activeTab === "school" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolCodeExamples.map((project) => renderSchoolProject(project))}
          </div>
        )}
      </div>
    </section>
  );
}
