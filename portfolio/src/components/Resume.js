import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import './Resume.css'; // Ensure this CSS file is in the same directory as Resume.js

export default function Resume() {
  return (
    <section id="" className="relative bg-gray-800">
      <div className="container mx-auto px-5 py-10 relative bg-gray-800 text-purple-100">
        <h1 className="text-4xl font-medium title-font mb-4 text-center">My Resume</h1>
        <div className="text-center mb-4">
          <div className="tooltip">
            <FaInfoCircle className="text-purple-100 cursor-pointer" />
            <span className="tooltiptext">This resume was generated with ResuBuild</span>
          </div>
        </div>
        <div className="text-center">
          <iframe
            src="/ARomeRes.pdf#zoom=100"
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
