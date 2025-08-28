import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Info = () => {
  useEffect(() => {
    gsap.utils.toArray(".anim-text").forEach((el) => {
      gsap.fromTo(
        el.querySelectorAll("span span"),
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
            start: "top 80%",
            end: "top 40%",
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
    <div className=" ">
      {/* Section 1 */}
      <div className="md:h-screen h-[50vh]  p-10">
        <p className="md:text-[11vw] text-[14vw] sm:leading-[13vw] leading-[15vw]  anim-text whitespace-normal max-w-3xl">
          {wrapText("What We’re Building")}
        </p>
      </div>

      {/* Section 2 */}
      <div className="md:h-screen h-[50vh] relative">
        <img
          className="sm:w-[12vw] w-[35vw] absolute sm:top-[35vh] top-[10vh] sm:left-[13vw] -left-10"
          src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68266ea52e91d548861b8d20_icon-1-transparent.svg"
          alt=""
        />
        <p className="absolute sm:top-[50vh] top-1/2 transform  -translate-y-1/2   left-[20vw] sm:w-[50vw] md:text-[2.8vw] text-[7vw] md:leading-[3.5vw] leading-[8vw] anim-text whitespace-normal">
          {wrapText(
            "Post Labs is building a homegrown platform designed for Canadians and the future of Canadian media."
          )}
        </p>
      </div>

      {/* Section 3 */}
      <div className="md:h-screen h-[50vh]  relative">
        <img
          className="sm:w-[12vw] w-[35vw] page2 absolute top-1/2 sm:left-1/2 -left-10  sm:-translate-x-1/2 -translate-y-1/2"
          src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68266ea52e91d548861b8d20_icon-1-transparent.svg"
          alt=""
        />
        <p className="absolute sm:w-[45vw] w-full  top-1/2 transform  -translate-y-1/2 -translate-x-1/2 left-[65vw]  sm:left-[75%]   md:text-[2.8vw] text-[7vw] md:leading-[3.5vw] leading-[8vw]  anim-text whitespace-normal">
          {wrapText(
            "At its core is PostOS, our made-in-Canada publishing engine that connects local voices, communities, and trusted journalism in one seamless digital experience."
          )}
        </p>
      </div>

      {/* Section 4 */}
      <div className="md:h-screen h-[50vh] relative">
        <img
          className="sm:w-[12vw] w-[35vw] absolute sm:top-[35vh] top-[10vh] sm:left-[13vw] -left-10"
          src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68267087adfa3ad7422b8753_icon-3-transparent.svg"
          alt=""
        />
        <p className="absolute sm:top-[50vh] top-1/2 transform  -translate-y-1/2   left-[20vw] sm:w-[50vw] md:text-[2.8vw] text-[7vw] md:leading-[3.5vw] leading-[8vw] anim-text whitespace-normal">
          {wrapText(
            "Built by Canadians, for Canadians, PostOS is more than just technology — it’s a way to bring our stories home."
          )}
        </p>
      </div>
    </div>
  );
};

export default Info;
