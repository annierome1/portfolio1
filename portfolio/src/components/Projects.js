// pages/Projects.js
import React, { useState } from 'react';
import { FaTimes, FaGithub } from 'react-icons/fa';
import { projects } from '../data';

// inside your pages/Projects.js, replace ProjectModal with:

function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    // backdrop with blur
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-gray-900 bg-opacity-90 text-purple-100 
                   rounded-2xl shadow-2xl 
                   max-w-4xl w-full mx-4 p-8 overflow-y-auto max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-purple-300 hover:text-purple-100
                     focus:outline-none"
        >
          <FaTimes size={24} />
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-center">{project.title}</h2>

        {/* two‑column layout: info on left, video on right */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left: details */}
          <div className="space-y-6 md:w-1/2">
            {/* Description */}
            {project.description && (
              <p className="leading-relaxed">{project.description}</p>
            )}

            {/* Functions */}
            {project.functions?.length > 0 && (
              <>
                <h4 className="font-semibold">Main Functions</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {project.functions.map((fn, idx) => (
                    <li key={idx}>{fn}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Technologies */}
            <div>
              <h4 className="font-semibold">Technologies</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className="bg-purple-200 text-gray-900 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-6 text-lg mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-white"
                >
                  <FaGithub className="mr-2" /> Code
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Right: auto‑playing video */}
          {project.embedUrl && (
            <div className="mmd:w-1/3 ml-auto flex justify-end items-start">
              <video
                src={project.embedUrl}            // e.g. "/videos/myAppDemo.mov"
                className="w-full max-w-xs h-auto rounded-lg shadow-inner"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


export default function Projects() {
  const [activeTab, setActiveTab] = useState('completed');
  const [selectedProject, setSelectedProject] = useState(null);

  const completed = projects.filter((p) => p.status === 'completed');
  const school = projects.filter((p) => p.category === 'School');

  const handleOpen = (project) => setSelectedProject(project);
  const handleClose = () => setSelectedProject(null);

  return (
    <section id="projects" className="bg-gray-900 text-purple-100 p-10">
      {/* tabs */}
      <div className="flex justify-center mb-8">
        {['completed', 'school'].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setSelectedProject(null); // reset modal when switching tabs
            }}
            className={`mx-2 px-4 py-2 rounded-lg font-bold ${
              activeTab === tab
                ? 'bg-purple-200 text-gray-900'
                : 'bg-gray-800 text-purple-100'
            }`}
          >
            {tab === 'completed' ? 'Projects' : 'School'}
          </button>
        ))}
      </div>

      {/* project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {(activeTab === 'completed' ? completed : school).map((project) => (
          <div
            key={project.slug}
            className="p-6 bg-gray-800 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-shadow"
            onClick={() => handleOpen(project)}
          >
            {/* title + tag wrapper */}
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <span className="bg-gray-900 text-purple-200 text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap">
                {project.category}
              </span>
            </div>

            <p className="text-sm text-purple-300">
              {project.subtitle || `${project.description.substring(0, 80)}...`}
            </p>
          </div>
        ))}
      </div>


      {/* modal overlay */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleClose}
      />
    </section>
  );
}
