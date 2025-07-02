// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Resume from './components/Resume';

import './App.css';

const GA_ID = 'G-N6PD7N19SN';

function GoogleAnalytics() {
  const location = useLocation();

  // fire a pageview on every route change
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', GA_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return (
    <Helmet>
      {/* 1) load gtag.js */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      {/* 2) initialize dataLayer and gtag() */}
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname
          });
        `}
      </script>
    </Helmet>
  );
}

function AppContent() {
  const location = useLocation();

  const getBackgroundClass = () => {
    if (location.pathname === '/projects') return 'bg-gray-900';
    if (location.pathname === '/resume')   return 'bg-slate-800';
    return 'bg-purple-100';
  };

  return (
    <div id="root" className={`min-h-screen flex flex-col ${getBackgroundClass()}`}>
      {/* inject GA scripts & pageview logic */}
      <GoogleAnalytics />

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
          <Route path="/resume"   element={<Resume />} />
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
