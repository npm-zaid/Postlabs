import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Info = () => {
  useEffect(() => {
    gsap.utils.toArray(".anim-text").forEach((el) => {
      gsap.fromTo(
        el.querySelectorAll("span span"), // target inner characters
        {
          color: "white",
          y: 40,
          opacity: 0,
        },
        {
          color: "black",
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.008,
          scrollTrigger: {
            trigger: el,
            start: "top 65%",
            end: "top 10%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const wrapText = (text) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="inline-block mr-[0.3em]">
        {word.split("").map((ch, j) => (
          <span key={j} className="inline-block">
            {ch}
          </span>
        ))}
      </span>
    ));

  return (
    <div className="min-h-screen relative ">
      {/* Section 1 */}
      <div className="h-screen p-10">
        <p className="text-[11vw] leading-[13vw] anim-text whitespace-normal max-w-3xl">
          {wrapText("What We’re Building")}
        </p>
      </div>

      {/* Section 2 */}
      <div className="h-screen relative">
        <img
          className="w-[12vw] absolute top-[35vh] left-[13vw]"
          src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68266ea52e91d548861b8d20_icon-1-transparent.svg"
          alt=""
        />
        <p className="absolute top-[40vh] left-[20vw] w-[50vw] text-[3vw] leading-[4vw] anim-text whitespace-normal">
          {wrapText(
            "Post Labs is building a homegrown platform designed for Canadians and the future of Canadian media."
          )}
        </p>
      </div>

      {/* Section 3 */}
      <div className="h-screen relative">
        <img
          className="w-[12vw] page2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68266ea52e91d548861b8d20_icon-1-transparent.svg"
          alt=""
        />
        <p className="absolute top-[40vh] right-[0vw] w-[50vw] text-[2.8vw] leading-[3.5vw] anim-text whitespace-normal">
          {wrapText(
            "Greetings! I'm an enthusiastic Full Stack Developer who thrives on crafting vibrant and interactive web applications."
          )}
        </p>
      </div>

      {/* Section 4 */}
      <div className="h-screen relative">
        <img
          className="w-[12vw] absolute top-[35vh] left-[13vw]"
          src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68267087adfa3ad7422b8753_icon-3-transparent.svg"
          alt=""
        />
        <p className="absolute top-[40vh] left-[20vw] w-[50vw] text-[3vw] leading-[4vw] anim-text whitespace-normal">
          {wrapText(
            "Built by Canadians, for Canadians, PostOS is more than just technology — it’s a way to bring our stories home."
          )}
        </p>
      </div>
    </div>
  );
};

export default Info;
