"use client";
import { useEffect, useState } from "react";

export default function Scroll() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(0, 1 - scrollY / 200);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-1 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50"
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        width="40"
        height="70"
        viewBox="0 0 40 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Oval outline */}
        <rect
          x="1"
          y="1"
          width="38"
          height="68"
          rx="19"
          stroke="black"
          strokeWidth="2"
          fill="none"
        />
        {/* Animated dot */}
        <circle cx="20" r="6" fill="black">
          <animate
            attributeName="cy"
            values="10;58"
            dur="2s"
            repeatCount="indefinite"
            keyTimes="0;1"
            keySplines="0.4 0 0.2 1"
            calcMode="spline"
          />
        </circle>
      </svg>
    </div>
  );
}
