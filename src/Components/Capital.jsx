import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Capital = () => {
  useEffect(() => {
    gsap.utils.toArray(".anim-text").forEach((el) => {
      gsap.fromTo(
        el.querySelectorAll("p span"), 
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
          stagger: 0.004,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const wrapText = (text) =>
    text.split(" ").map((word, i) => (
      <p key={i} className="inline-block mr-[0.3em]">
        {word.split("").map((ch, j) => (
          <span key={j} className="inline-block">
            {ch}
          </span>
        ))}
      </p>
    ));

  return (
    <div className="relative min-h-screen ">
      {/* Investors Section */}
      <div className="h-screen  md:w-[50vw] w-full md:px-8 px-6 flex flex-col justify-center gap-6">
        <h1 className="md:text-[9vw] text-[15vw] md:leading-[9vw] leading-[15vw] anim-text">
          {wrapText("For Investors")}
        </h1>
        <p className="anim-text whitespace-normal">
          {wrapText(
            "We’re raising capital to scale fast. If you’re an investor who believes in the future of independent Canadian media, we’d love to speak with you."
          )}
        </p>
        <a className="text-3xl anim-text" href="mailto:investors@postlab.com">
          {wrapText("invest@postlabs.com")}
        </a>
      </div>

      {/* Builders Section */}
      <div className="h-screen  px-6 bg-gradient-to-t from-[#FCED61] via-[#FCED61]/30 to-transparent">
        <div className="md:w-[45vw] w-full h-screen flex flex-col justify-center gap-6 ml-auto">
          <h1 className="md:text-[9vw] text-[15vw] md:leading-[9vw] leading-[15vw] anim-text">
            {wrapText("For Builders")}
          </h1>
          <p className="anim-text whitespace-normal">
            {wrapText(
              "We’re hiring. If you’re passionate about media, technology, and the future of Canada’s digital ecosystem, come build with us. We’re always looking for great people. Check out our jobs page for current opportunities."
            )}
          </p>
          <a className="text-3xl anim-text" href="mailto:investors@postlab.com">
            {wrapText("careers@postlabs.com")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Capital;
