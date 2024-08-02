import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-purple-100 body-font">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-purple-100 text-sm text-center sm:text-left">
          © 2024 Annie Rome —
          <a href="https://twitter.com/annie" rel="noopener noreferrer" className="text-purple-400 ml-1" target="_blank">
            @annie
          </a>
        </p>
      </div>
    </footer>
  );
}
