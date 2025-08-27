import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Video = () => {

  const sectionRef = useRef(null);
  const scaleBoxRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top", 
        end: "bottom top", 
        scrub: 1.2,
        pin: true, 
        anticipatePin: 1, 
      },
    });
  
    tl.to(scaleBoxRef.current, { scale: 1, borderRadius: "0px", ease: "power2.out" });
  
    return () => {
      tl.kill(); 
    };
  }, []);
  return (
    <div>
      <div className="h-screen  w-full flex flex-col items-center justify-center "
        ref={sectionRef}>
        <div className="h-full scale-[0.3] w-full rounded-3xl overflow-hidden"
          ref={scaleBoxRef}>
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover "
            src='https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F683a0051a4448581c2d2e587_post-labs-video-mobile-4-transcode.mp4'
          />
        </div>
      </div>
    </div>
  );
};

export default Video;