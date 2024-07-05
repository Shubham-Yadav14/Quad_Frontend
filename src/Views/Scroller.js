import React, { useEffect, useState } from "react";

export default function Scroller() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / windowHeight;
    const scrollPercent = Math.min(Math.max(scrollFraction * 100, 0), 100);
    setScrollProgress(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (id3) => {
    const Section = document.getElementById(id3);
    if (Section) {
      Section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Calculate circumference of the circle
  const radius = 11; // Adjusted radius to around 22 units
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      onClick={() => {
        handleClick("top");
      }}
      className="fixed bottom-4 right-4 hover:cursor-pointer max-xl:hidden"
    >
      <div className="relative">
        <svg className="w-24 h-24" viewBox="0 0 44 44">
          {" "}
          {/* Adjusted viewBox size */}
          <circle
            className="text-gray-200"
            strokeWidth="1" // Adjusted stroke width for better visibility
            fill="none"
            stroke="currentColor"
            cx="22" // Adjusted center x coordinate
            cy="22" // Adjusted center y coordinate
            r="11" // Adjusted radius
          />
          <circle
            className="text-purple-600"
            strokeWidth="1" // Adjusted stroke width for better visibility
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={
              circumference - (scrollProgress / 100) * circumference
            }
            stroke="currentColor"
            cx="22" // Adjusted center x coordinate
            cy="22" // Adjusted center y coordinate
            r="11" // Adjusted radius
            style={{ transition: "stroke-dashoffset 0.3s ease" }}
            transform="rotate(-90 22 22)" // Rotate -90 degrees around the center (22, 22)
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-purple-600" // Adjusted the size of the inner icon
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a1 1 0 01-1-1V5.414L5.707 9.707a1 1 0 01-1.414-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 01-1 1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
