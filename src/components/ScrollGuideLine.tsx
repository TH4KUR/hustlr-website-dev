import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollGuideLine = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // Generate a random wavy line that flows down the page
    const generateRandomPath = () => {
      const startX = 50;
      const startY = 0;
      const endY = 5000; // Adjust based on page height
      const segments = 50;
      const amplitude = 100;

      let pathData = `M ${startX} ${startY}`;

      for (let i = 1; i <= segments; i++) {
        const y = (endY / segments) * i;
        const randomOffset = (Math.random() - 0.5) * amplitude;
        const x = startX + randomOffset + Math.sin(i * 0.2) * 150;
        pathData += ` L ${x} ${y}`;
      }

      return pathData;
    };

    if (pathRef.current && svgRef.current) {
      const pathData = generateRandomPath();
      pathRef.current.setAttribute("d", pathData);

      const pathLength = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${pathLength}`;
      pathRef.current.style.strokeDashoffset = `${pathLength}`;

      // Animate the line drawing on scroll
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: "main",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5, // Smooth scrubbing
          markers: false,
        },
        duration: 1,
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      className="fixed left-0 top-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 1,
        opacity: 0.4,
      }}
      width="100"
      height="5000"
      viewBox="0 0 100 5000"
      preserveAspectRatio="none"
    >
      <path
        ref={pathRef}
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ScrollGuideLine;
