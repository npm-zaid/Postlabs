import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Buttons = ({ startRef, endRef }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    if (!startRef.current || !endRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: startRef.current, // Mission section
        start: "top bottom",       // when Mission enters viewport
        endTrigger: endRef.current, // ScrollVideos section
        end: "top top",            // when ScrollVideos reaches top
        scrub: true,
        pin: true,                 // box fixed during Mission section
      },
    });

    // Slide in from Y
    tl.fromTo(
      boxRef.current,
      { y: 100, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.5, ease: "power2.out" }
    );

    // Animate out (clip-path) when end reached
    tl.to(
      boxRef.current,
      {
        y: -100,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power2.in",
      },
      ">0.2"
    );
  }, [startRef, endRef]);

  return (
    <div
      ref={boxRef}
      className="absolute top-[20%] right-10 bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4"
      style={{ minWidth: "200px" }}
    >
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Button 1
      </button>
      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Button 2
      </button>
    </div>
  );
};

export default Buttons;
