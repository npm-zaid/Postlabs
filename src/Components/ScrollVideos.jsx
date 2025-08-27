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

      // Phase 1: Move NUMBER from center to left
      tl.to(numberRef.current, { x: -150, color:"white", duration: 1, ease: "power2.inOut" });

      // Phase 2: Animate masks
      masksRef.current.forEach((mask, i) => {
        if (!mask) return;
        const finalRadius = 1000; // large enough to reveal video
        tl.to(
          mask,
          { attr: { r: finalRadius }, duration: 1, ease: "power2.inOut" },
          i + 0.5
        );
      });

      // Phase 3: Animate texts
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
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="displacementFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              result="displacement"
              scale="100"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feGaussianBlur in="displacement" stdDeviation="5" />
          </filter>

          {[0, 1, 2, 3].map((i) => (
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

        {/* Videos inside foreignObject masked by circleMask */}
        {videos.map((src, i) => (
          <foreignObject
            key={i}
            width="100%"
            height="100%"
            mask={`url(#circleMask${i})`}
          >
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
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex items-center gap-6">
          <span ref={numberRef} className="text-7xl font-extrabold  opacity-90">
            Building For
          </span>
          <div className="relative w-[40vw] min-w-[300px]">
            {texts.map((txt, i) => (
              <div
                key={i}
                ref={(el) => (textsRef.current[i] = el)}
                className="absolute  -left-40 top-1/2 -translate-y-1/2 w-full opacity-0 text-left text-7xl font-bold text-white"
              >
                {txt}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
