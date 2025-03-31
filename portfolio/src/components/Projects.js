//project.js
import { projects } from "../data";
import {
  FaReact, FaGithub, FaUnity, FaVideo, FaNodeJs, FaSwift, FaAws, FaJava, FaAngular, FaHtml5, FaCss3Alt
} from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import {
  SiDjango, SiMysql, SiBlender, SiUnrealengine, SiMongodb, SiPostman, SiPython, SiFastapi, SiSanity
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrHeroku } from "react-icons/gr";
import { IoLogoVercel, IoLogoJavascript } from "react-icons/io5";
import { AiOutlineOpenAI } from "react-icons/ai";
import React, { useState, useEffect, useRef, useMemo } from "react";
import "./projects.css"

const DynamicText = ({ text }) => {
  const [fontSize, setFontSize] = useState("text-lg");
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
  FaReact, SiDjango, SiMysql, SiBlender, SiUnrealengine, FaUnity, FaMeta,
  FaSwift, FaNodeJs, RiTailwindCssFill, GrHeroku, AiOutlineOpenAI,
  IoLogoVercel, FaAws, VscAzureDevops, SiMongodb, SiPostman, FaJava,
  SiPython, SiFastapi, FaAngular, IoLogoJavascript, SiSanity, FaHtml5, FaCss3Alt
};

const renderIcon = (iconName) => {
  const IconComponent = iconComponents[iconName];
  return IconComponent ? <IconComponent className="text-4xl mx-2 text-purple-200" /> : null;
};

const ProjectCard = ({ project, animateOnLoad, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (animateOnLoad) {
      const delay = index * 200;
      setTimeout(() => {
        setIsFlipped(true);
        setTimeout(() => setIsFlipped(false), 800);
      }, delay);
    }
  }, [animateOnLoad, index]);
  

  return (
    <div
      className="flip-card relative w-full h-[400px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flip-card-inner w-full h-full transition-transform duration-800 ${isFlipped ? "rotate-y-180" : ""}`}>
        {/* FRONT SIDE */}
        <div className="flip-card-front absolute w-full h-full p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-bold text-purple-100">{project.title}</h2>
          <p className="text-sm text-purple-100 mt-2 line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* BACK SIDE */}
        <div className="flip-card-back absolute w-full h-full p-6 bg-gray-800 rounded-lg shadow-lg flex flex-col justify-center items-center text-center text-purple-100 transform rotate-y-180">
          {/* Optional background image with opacity */}
          {project.preview && (
            <div className="absolute inset-0">
              <img
                src={project.preview}
                alt={`${project.title} Preview`}
                className="object-cover w-full h-full opacity-20"
              />
            </div>
          )}
          <div className="items-center relative z-10">
            {project.subtitle && (
              <h3 className="text-xl font-semibold text-purple-100">
                {project.subtitle}
              </h3>
            )}
            {project.functions && (
              <div className="mt-4 text-left">
                <h4 className="text-lg font-semibold text-purple-100 mb-2">Main Functions</h4>
                <ul className="list-disc list-inside text-purple-100 text-sm">
                  {project.functions.map((func, idx) => (
                    <li key={idx}>{func}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.technologies && (
              <div className="flex justify-center space-x-3 mt-4 ">
                {project.technologies.map((tech) => (
                  <div key={tech.icon}>
                    {renderIcon(tech.icon)}
                  </div>
                ))}
              </div>
            )}
            <div className="mt-6 flex justify-center space-x-3 ">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-white rounded hover:bg-white hover:text-gray-900 transition bg-purple-100 text-gray-900 items-center"
                >
                  Live
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-white rounded hover:bg-white hover:text-gray-900 transition bg-purple-100 text-gray-900"
                >
                  Code
                </a>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default function Projects() {
  const [activeTab, setActiveTab] = useState("completed");
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setTriggerAnimation(false);
    setTimeout(() => setTriggerAnimation(true), 100);
  };

  const completedProjects = projects.filter(p => p.status === "completed");
  const schoolCodeExamples = projects.filter(p => p.category === "School");
  const scrollContainerRef = useRef();
  const shuffleArray = (arr) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  
  const shuffledCompletedProjects = useMemo(() => {
    return shuffleArray(completedProjects);
  }, []);

  const renderSchoolProject = (project) => (
    <div key={project.id} className="p-6 bg-gray-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between h-full min-h-[200px]">
      <h2 className="text-lg font-bold text-purple-100 text-center mb-4">{project.title}</h2>
      <div className="flex-grow flex items-center justify-center text-center">
        <DynamicText text={project.description} />
      </div>
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 text-purple-300 hover:text-white">
          <FaGithub className="text-2xl" />
        </a>
      )}
    </div>
  );

  return (
    <section id="projects" className="text-gray-800 bg-purple-100 body-font">
      <div className="container px-4 py-10 mx-auto text-center lg:px-20">
        <div className="flex justify-center mb-8">
          <button className={`px-4 py-2 font-bold ${activeTab === "completed" ? "bg-gray-800 text-purple-100" : "bg-purple-100 text-gray-800"} rounded-lg mr-2`} onClick={() => handleTabChange("completed")}>Completed Projects</button>
          <button className={`px-4 py-2 font-bold ${activeTab === "school" ? "bg-gray-800 text-purple-100" : "bg-purple-100 text-gray-800"} rounded-lg`} onClick={() => handleTabChange("school")}>School Projects</button>
        </div>

        {activeTab === "completed" && (
  <div className="relative w-full h-[600px]">

    {/* Scroll Arrows */}
    <button
      onClick={() => scrollContainerRef.current.scrollBy({ left: -360, behavior: "smooth" })}
      className="hidden sm:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600 shadow-md"
    >
      ◀
    </button>

    <button
      onClick={() => scrollContainerRef.current.scrollBy({ left: 360, behavior: "smooth" })}
      className="hidden sm:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600 shadow-md"
    >
      ▶
    </button>

    {/* Carousel Container */}
    <div
      ref={scrollContainerRef}
      className="overflow-x-auto scroll-smooth scrollbar-hide px-6"
    >
      <div className="flex space-x-6 snap-x snap-mandatory w-max py-2">
        {shuffledCompletedProjects.map((project, index) => (
          <div
            key={project.id || project.title}
            className="snap-start shrink-0 w-[320px] sm:w-[360px] md:w-[400px] h-[550px] flex items-center justify-center"
>
            <ProjectCard project={project} animateOnLoad={triggerAnimation} index={index} />
          </div>
        ))}
      </div>
    </div>
  </div>
)}



        {activeTab === "school" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolCodeExamples.map((project, index) => renderSchoolProject(project))}
          </div>
        )}
      </div>
    </section>
  );
}