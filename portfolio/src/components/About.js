import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Hello!</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
          
              I'm a dual B.S. candidate in  <span className="font-bold text-gray-800">Computer Science</span> and <span className="font-bold text-gray-800"> Psychology</span> at the <span className="font-bold text-gray-800">University of Tampa </span>, passionate about blending technology and human understanding to drive innovation. With expertise in <span className="font-bold text-gray-800">programming, software development, </span> and <span className="font-bold text-gray-800">data analysis</span>, alongside insights into human behavior, I aim to contribute to forward-thinking projects that improve lives and push technological boundaries
          </p>

        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div className="w-full h-full overflow-hidden rounded-lg shadow-lg" style={{ width: '400px', height: '400px' }}>
            <img
              src="/Headshot.JPG"
              alt="Headshot"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
