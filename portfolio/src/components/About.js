import React, { useState, useRef, useEffect } from "react";
import Chatbot from "./chatbot.js";
import "./styles.css";

export default function About() {
  const [chatOpened, setChatOpened] = useState(false);
  const chatbotWrapperRef = useRef(null);

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
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col h-full gap-x-10">
        {/* IMAGE SECTION */}
        <div
          className={`glass-effect 
                      w-full md:w-[400px] md:h-[500px] h-auto overflow-hidden 
                      rounded-lg shadow-lg 
                      ${chatOpened ? "hidden md:block" : "block"} 
                      order-first md:order-2 ml-0 md:ml-5`}
        >
          <img
            src="/Headshot.JPG"
            alt="Headshot"
            className="object-cover w-full h-full"
          />
        </div>

        {/* CHAT SECTION */}
        <div
          className={`md:w-1/2 lg:pr-24 md:pr-16 flex flex-col justify-center items-center text-center 
            ${!chatOpened ? "pt-60" : ""} 
            order-last md:order-1`}
        >
          {!chatOpened && (
            <p className="text-gray-700 text-xl font-bold leading-relaxed mb-4">
              Hello! Have any questions? Talk to my ChatBot!
            </p>
          )}
          <div ref={chatbotWrapperRef}>
            <Chatbot />
          </div>
        </div>
      </div>
    </section>
  );
}
