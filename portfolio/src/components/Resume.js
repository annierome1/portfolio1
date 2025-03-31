import React from 'react';
import { FaInfoCircle, FaDownload } from 'react-icons/fa';
import './Resume.css'; // Ensure this CSS file is in the same directory as Resume.js

export default function Resume() {
  return (
    <section id="" className="relative bg-purple-100">
      <div className="container mx-auto px-5 py-10 relative bg-purple-100 text-gray-800">
        <h1 className="text-4xl font-medium title-font mb-4 text-center">My Resume</h1>
        <div className="text-center mb-4">
          <div className="tooltip">
            <FaInfoCircle className="text-gray-800 cursor-pointer" />
            <span className="tooltiptext">This resume was generated with ResuBuild</span>
          </div>
        </div>
        {/* Download Resume Button */}
        <div className="text-center mb-6">
          <a
            href="/ARresume.pdf"
            download="ARresume.pdf"
            className="inline-flex items-center px-3 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-00 transition duration-300">
            <FaDownload className="mr-2" />
            Download Resume
          </a>
        </div>
        <div className="text-center">
          <iframe
            src="/ARresume.pdf"
            width="100%"
            height="800px"
            title="Resume"
            className="border-4 border-gray-900"
          />
        </div>
      </div>
    </section>
  );
}
