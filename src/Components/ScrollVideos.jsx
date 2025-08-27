import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MaskedScrollVideoSVG() {
  const containerRef = useRef(null);
  const masksRef = useRef([]);
  const textsRef = useRef([]);
  const numberRef = useRef(null);

  const texts = ["First Video", "Second Video", "Third Video"];
  const videos = [
    "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F683a0051a4448581c2d2e587_post-labs-video-mobile-4-transcode.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://www.w3schools.com/html/mov_bbb.mp4",
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%",
          scrub: true,
          pin: true,
        },
      });

      // Move NUMBER from center to left (responsive)
      tl.to(numberRef.current, {
        x: () => (window.innerWidth < 768 ? -30 : -50),
        color: "white",
        duration: 1,
        ease: "power2.inOut",
      });

      // Animate masks
      masksRef.current.forEach((mask, i) => {
        if (!mask) return;
        const finalRadius = window.innerWidth < 768 ? 1200 : 1000;
        tl.to(mask, { attr: { r: finalRadius }, duration: 1, ease: "power2.inOut" }, i + 0.5);
      });

      // Animate texts
      textsRef.current.forEach((text, i) => {
        if (!text) return;
        tl.fromTo(text, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 }, i + 1).to(
          text,
          { autoAlpha: 0, duration: 0.5 },
          i + 1.8
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Videos with SVG masks */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <filter id="displacementFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" result="displacement" scale="100" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur in="displacement" stdDeviation="5" />
          </filter>

          {[0, 1, 2].map((i) => (
            <mask id={`circleMask${i}`} key={i}>
              <circle
                ref={(el) => (masksRef.current[i] = el)}
                cx="50%"
                cy="50%"
                r="0"
                fill="white"
                style={{ filter: "url(#displacementFilter)" }}
              />
            </mask>
          ))}
        </defs>

        {videos.map((src, i) => (
          <foreignObject key={i} width="100%" height="100%" mask={`url(#circleMask${i})`}>
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </foreignObject>
        ))}
      </svg>

      {/* NUMBER + Active Text */}
      <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center sm:justify-start px-6 sm:px-20 gap-4 sm:gap-0 pointer-events-none">
        <span
          ref={numberRef}
          className="text-5xl sm:text-7xl  font-extrabold text-black  text-center sm:text-right opacity-90">
          Build For
        </span>
        <div className="relative w-full sm:w-[40vw] min-w-[250px] ">
          {texts.map((txt, i) => (
            <div
              key={i}
              ref={(el) => (textsRef.current[i] = el)}
              className="absolute top-1/2 left-0  w-full -translate-y-1/2 text-center sm:text-left text-5xl sm:text-7xl  font-bold text-white opacity-0"
            >
              {txt}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
