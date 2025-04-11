import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import './App.css';

function AppContent() {
  const location = useLocation();

  const getBackgroundClass = () => {
    if (location.pathname === '/projects') return 'bg-gray-900';
    if (location.pathname === '/resume') return 'bg-slate-800';
    return 'bg-purple-100';
  };

  return (
    <div id="root" className={`min-h-screen flex flex-col ${getBackgroundClass()}`}>
      <Navbar />
      <main className="flex-grow">
        <Routes>
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
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}