import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">
            Hello!
          </h1>
          <p className="mb-8 leading-relaxed">
            I am currently a student at the University of Tampa, pursuing a dual degree B.S. in Computer Science and Psychology. With a strong passion for cutting-edge technology and the future of tech, I aim to join a forward-thinking company that shares my enthusiasm for innovation.
          </p>
          <p className="mb-8 leading-relaxed">
            Throughout my academic journey, I have developed a unique blend of technical expertise and deep understanding of human behavior. My studies in computer science have equipped me with a solid foundation in programming, software development, and data analysis. Concurrently, my psychology education has provided me with valuable insights into the human mind and behavior, enhancing my ability to work effectively in diverse team environments and understand user experiences.
          </p>
          <p className="mb-8 leading-relaxed">
            I am eager to begin my career and make a meaningful impact in the world. My goal is to contribute to innovative projects that push the boundaries of technology while also improving lives. I am confident that my unique combination of skills and passion for technology will allow me to excel in any role I undertake.
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
