import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  useEffect(() => {
    // Animate per-character spans only
    gsap.to(".mission-text span", {
      color: "#000000",   // reveal to black
      duration: 1,
      stagger: 0.02,      // letter-by-letter
      scrollTrigger: {
        trigger: ".mission-text",
        start: "top 65%",
        end: "top 10%",
        scrub: 2,

      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const text = `Post Labs is rethinking how digital media works for Canadians. Our mission is simple: make journalism profitable, sustainable, and trusted — built for Canadians, by Canadians.`;

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative z-40">
      <h2 className="mission-text text-[10vw] md:text-[4vw]   leading-tight max-w-xl text-center">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block text-[#fafaf7]" // same as bg (invisible initially)
          
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>
    </section>
  );
};

export default Mission;
