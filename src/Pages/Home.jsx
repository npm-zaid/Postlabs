import React, { useRef, useEffect, useState } from "react";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Mission from "../Components/Mission";
import Video from "../Components/Video";
import SectionScroll from "../Components/SectionScroll";
import Expand from "../Components/Expand";
import Test from "../Components/Test";
import CursorFollower from "../Components/CursorFollower";
import Capital from "../Components/Capital";
import Footer from "../Components/Footer";
import Info from "../Components/Info";
import ScrollVideos from "../Components/ScrollVideos";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Floating Buttons with moving highlight
const FloatingButtons = React.forwardRef((props, ref) => {
  const highlightRef = useRef(null);
  const btnRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Move highlight when activeIndex changes
  useEffect(() => {
    if (btnRefs.current[activeIndex]) {
      gsap.to(highlightRef.current, {
        x: btnRefs.current[activeIndex].offsetLeft,
        width: btnRefs.current[activeIndex].offsetWidth,
        backgroundColor:"white",
        textColor:"#ffffff",
        duration: 0.4,
        ease: "power3.out",
      });
    }
  }, [activeIndex]);

  return (
    <div
      ref={ref}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 flex z-50 pointer-events-auto"
    >
      <div className="relative bg-black/50 p-2 rounded-full flex gap-1">
        {/* Highlight background */}
        <div
          ref={highlightRef}
          className="absolute top-2 bottom-2 left-0 rounded-full"
        ></div>

        {/* Buttons */}
        {["About", "Contact"].map((label, i) => (
          <button
            key={i}
            ref={(el) => (btnRefs.current[i] = el)}
            onClick={() => setActiveIndex(i)}
            className={`relative z-10 px-6 py-3 rounded-full font-medium ${activeIndex === i ? "text-black" : "text-white"} transition-colors duration-300`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
});

const Home = () => {
  const buttonsRef = useRef(null);
  const missionRef = useRef(null);
  const capitalRef = useRef(null);

  useEffect(() => {
    const buttons = buttonsRef.current;

    // Initially hidden
    gsap.set(buttons, { autoAlpha: 0, y: 50, scale: 0.9 });

    // Show buttons when Mission enters viewport
    ScrollTrigger.create({
      trigger: missionRef.current,
      start: "top 65%",
      end: "bottom center",
      onEnter: () =>
        gsap.to(buttons, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
        }),
      onEnterBack: () =>
        gsap.to(buttons, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
        }),
      onLeaveBack: () =>
        gsap.to(buttons, {
          autoAlpha: 0,
          y: 50,
          scale: 0.9,
          duration: 0.5,
          ease: "power2.in",
        }),
    });

    // Hide buttons when Capital enters
    ScrollTrigger.create({
      trigger: capitalRef.current,
      start: "top 65%",
      end: "bottom center",
      onEnter: () =>
        gsap.to(buttons, {
          autoAlpha: 0,
          y: 50,
          scale: 0.9,
          duration: 0.5,
          ease: "power2.in",
        }),
      onEnterBack: () =>
        gsap.to(buttons, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
        }),
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="overflow-hidden">

      <div className="bg-[#F8F8F2] relative z-40">
    
      <div className="absolute inset-0 grid md:grid-cols-[1fr_1.5fr_1.5fr_1fr] grid-cols-[1fr_3fr_3fr_1fr]  grid-rows-1 border-black/10">
        <div className="border-r border-black/10"></div>
        <div className="border-r border-black/10"></div>
        <div className="border-r border-black/10"></div>
      </div>
        <Hero />
       
        <div ref={missionRef}>
          <Mission />
        </div>

        <Expand />
        <Info />
        <ScrollVideos />

       
        <div ref={capitalRef}>
          <Capital />
        </div>
      </div>

    

      <Footer />

     
      <FloatingButtons ref={buttonsRef} />
    </div>
  );
};

export default Home;
