import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video1 from '../assets/Post Labs Building the Future of Canadian Digital Media.mp4'

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
          end: "top 30%",
          scrub: true,
         
        },
      }
    );
  }, []);

  return (
    <section className="sm:h-[200vh] h-[150vh] flex items-center justify-center">
      <div className="relative w-full flex justify-center overflow-hidden">
        <video
          ref={videoRef}
          src={video1}
          autoPlay
          muted
          loop
          className="h-[100vh] object-cover w-full"
        />
      </div>
    </section>
  );
}
