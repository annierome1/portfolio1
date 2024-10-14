import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

export default function App() {
  return (
    <Router>
      <main className="text-grey-400 bg-purple-100 body-font">
        <Navbar />
        <Routes>
          {/* Main page route */}
          <Route
            path="/"
            element={
              <>
                <About />
                <Skills />
                
                <Contact />
              </>
            }
          />
          
          {/* Projects page route */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />}/>
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}
