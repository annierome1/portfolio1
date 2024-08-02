import React from 'react';

export default function Resume() {
  return (
    <section id="" className="relative bg-gray-800">
    <div className="container mx-auto px-5 py-10 relative bg-gray-800 text-purple-100">
      <h1 className="text-4xl font-medium title-font mb-4 text-center">My Resume</h1>
      <div className="text-center">
        <iframe
          src="/Annie_Rome_Resume (2).pdf"
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
