import React, { useState, useRef, useEffect } from "react";
import Chatbot from "./chatbot.js";
import './styles.css';

export default function About() {
  const [chatOpened, setChatOpened] = useState(false);
  const chatbotWrapperRef = useRef(null);

  // Listen for clicks on the chatbot buttons to toggle the introductory text.
  useEffect(() => {
    const container = chatbotWrapperRef.current;
    if (container) {
      const handleClick = (e) => {
        if (e.target.closest('.chat-button')) {
          setChatOpened(true);
        } else if (e.target.closest('.close-btn')) {
          setChatOpened(false);
        }
      };
      container.addEventListener('click', handleClick);
      return () => container.removeEventListener('click', handleClick);
    }
  }, []);

  return (
    <section id="about" className="h-[750px]">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col h-full">
      <div
        className={`md:w-1/2 lg:pr-24 md:pr-16 flex flex-col justify-center items-center text-center ${
          !chatOpened ? "pt-60" : ""
        }`}
      >
          {!chatOpened && (
            <p className="text-gray-700 text-xl font-bold leading-relaxed mb-4">
              Hello! My name is Annie. Have any questions?
            </p>
          )}
          <div ref={chatbotWrapperRef}>
            <Chatbot />
          </div>
        </div>
        <div
          className="glass-effect w-full h-full overflow-hidden rounded-lg shadow-lg"
          style={{ width: "450px", height: "450px" }}
        >
          <img
            src="/Headshot.JPG"
            alt="Headshot"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
