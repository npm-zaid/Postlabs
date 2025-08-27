import React, { useEffect } from "react";
import Features from "./Features";
import CursorFollower from "./CursorFollower";
import gsap from "gsap";


const Hero = () => {

  useEffect(()=>{
    gsap.to('.arrow',{
      y:40,
      duration:1,
      repeat:-1,
      yoyo:true,
    })
  })

  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Top banner */}
        <div className="bg-black py-3">
          <p className="md:text-md  text- text-center text-white relative z-50">
            Help shape the future of digital journalism — we’re hiring!
          </p>
        </div>

      

        {/* Cursor Follower */}
        <CursorFollower />

        {/* Hero Content */}
        <div className="w-full flex justify-between items-center p-4 md:px-8 border-b border-black/10">
          <div className="w-full"><img src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68227dfdc407523fbe5b56e7_post-labs-logo.svg" alt="" className="md:w-[150px] w-[30vw]" /></div>
          <p className="md:text-[1.2vw] text-[3vw]  w-full text-end">
            We’re building the backbone of Canadian digital media —<br />
            a next-gen platform that gives creators the tools to thrive.
          </p>
        </div>

        <div className="relative z-10 flex md:flex-row flex-col justify-between px-8 pt-24">
          <h1 className="md:text-[11vw] text-[13vw] md:leading-[11vw] leading-[16vw] text-black mt-[22vh] ">
            The Future of <br /> News Starts<br /> Here
          </h1>
          <img
            className="w-[12vw] md:self-end arrow"
            src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68238111591ea94a69065212_Vector.svg"
            alt=""
          />
        </div>
      
      </div>
      
    </>
  );
};

export default Hero;
