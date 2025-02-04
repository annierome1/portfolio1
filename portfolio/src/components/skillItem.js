import React, { useState } from "react";
import skillIcons from "./skillIcons"; // Import skill icons

export default function SkillItem({ skillName }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative flex flex-col items-center justify-center"
      onMouseEnter={(e) => {
        setIsHovered(true);
        setMousePos({ x: e.clientX, y: e.clientY });
      }}
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Skill Icon without Glow */}
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full 
        bg-gray-700 transition-all duration-300 ease-in-out"
      >
        {skillIcons[skillName] || <span className="text-white">{skillName}</span>}
      </div>

      {/* Skill Name Tooltip (Follows Cursor) */}
      {isHovered && (
        <div
          className="fixed bg-gray-900 text-white text-sm font-semibold px-3 py-1 rounded-lg shadow-lg pointer-events-none z-50"
          style={{
            top: `${mousePos.y + 10}px`,
            left: `${mousePos.x + 15}px`,
            whiteSpace: "nowrap",
          }}
        >
          {skillName}
        </div>
      )}
    </div>
  );
}
