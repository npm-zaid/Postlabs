import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  useEffect(() => {
    gsap.to(".mission-text span", {
      color: "#000000",   
      duration: 1,
      stagger: 0.02,      
      scrollTrigger: {
        trigger: ".mission-text",
        start: "top 75%",
        end: "top 20%",
        scrub: 2,

      },
    });

  
  }, []);

  const text = `Post Labs is rethinking how digital media works for Canadians. Our mission is simple: make journalism profitable, sustainable, and trusted — built for Canadians, by Canadians.`;

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative z-40 ">
      <h2 className="mission-text text-[10vw] md:text-[4vw]   leading-tight max-w-xl text-center">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block text-[#fafaf7]" 
          
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>
    </section>
  );
};

export default Mission;
