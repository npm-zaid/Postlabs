import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const End = () => {
  useEffect(() => {
    gsap.fromTo(
        '.unique-text span',
        {
            "will-change": "opacity, transform",
            z: () => gsap.utils.random(500, 950),
            opacity: 0,
            xPercent: (pos) => gsap.utils.random(-100, 100),
            yPercent: (pos) => gsap.utils.random(-10, 10),
            rotationX: () => gsap.utils.random(-90, 90)
        },
        {
            ease: "expo",
            opacity: 1,
            rotationX: 0,
            rotationY: 0,
            xPercent: 0,
            yPercent: 0,
            z: 0,
            scrollTrigger: {
                trigger: '.unique-text-container',
                start: "center center",
                end: "+=300%",
                scrub: true,
               
                pin: '.unique-text-container'
            },
            stagger: {
                each: 0.006,
                from: "random"
            }
        }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const textLines = [
  "Royal Challengers Bangalore have etched their name into history.",
  "After years of grit, heartbreak, and undying loyalty — the dream is real.",
  "This win isn’t just a trophy; it’s a statement to every doubter.",
  "The fire doesn’t fade — it fuels us into 2025.",
  "Next year, we don’t defend. We dominate."
  ];

  return (
    <section className="unique-text-container overflow-hidden px-[3vw] h-screen flex items-center justify-center">
     
        <div className="text-[2vw]   flex flex-col gap-1 relative">
          {textLines.map((line, index) => (
            <h2 key={index} className="unique-text" style={{ perspective: '1000px', whiteSpace: 'pre-wrap' }}>
              {line.split('').map((char, charIndex) => (
                <span key={charIndex} className="inline-block leading-[1vw] text-[#D0B05D]">
                  {char}
                </span>
              ))}
            </h2>
          ))}
        </div>
    
    </section>
  );
};

export default End;