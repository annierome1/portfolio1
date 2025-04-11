import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font- text-purple-100 mb-4 md:mb-0">
          <Link to="/" className="ml-3 text-xl">
            Annie Rome
          </Link>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-purple-100 justify-center">
          <Link to="/projects" className="mr-5 hover:text-white">
            Projects
          </Link>
          <a href="/resume" className="mr-5 hover:text-white">
            Resume
          </a>
        </nav>
     
        <a
          href="/#contact"
          className="hidden md:flex items-center bg-purple-100  text-gray-800 font-medium py-2 px-6 rounded-full hover:scale-105 transition duration-300 shadow-lg">

          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a> 
      </div>
    </header>
  );
}
