import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Resume from "./components/Resume"


export default function App() {
  return (
    <main className="text-grey-400 bg-purple-100 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact/>
      <Footer />
    </main>
  );
}