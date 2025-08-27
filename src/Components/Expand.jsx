import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Expand() {
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;

    gsap.fromTo(
      el,
      {
        clipPath: "inset(0 25% 0 25% round 3rem)",
      },
      {
        clipPath: "inset(0 0% 0 0% round 0rem)",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom center",
          scrub: true,
          markers: true,
        },
      }
    );
  }, []);

  return (
    <section className="h-[200vh] flex items-center justify-center">
      <div className="relative w-full flex justify-center overflow-hidden">
        <video
          ref={videoRef}
          src="https://www.w3schools.com/html/mov_bbb.mp4" // sample mp4 video
          autoPlay
          muted
          loop
          className="h-[100vh] object-cover w-full"
        />
      </div>
    </section>
  );
}
