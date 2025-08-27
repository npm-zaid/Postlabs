import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const containerRef = useRef(null);
  const slotRefs = useRef([]);
  const cardsRef = useRef([]);
  const tweensRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  const cards = [
    { 
      title: "Empowering Creators.", 
      icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239a34145625a862ba3d54_icon-1.svg" 
    },
    { 
      title: "Transforming Publishing.", 
      icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239b7ac5ddc2008b2da9b7_icon-2.svg" 
    },
    { 
      title: "Reclaiming Canadian Media.", 
      icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239b7ab5708009ef8f649e_icon-3.svg" 
    },
  ];

  // ✅ Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // ❌ Skip GSAP on mobile

    const container = containerRef.current;
    const slots = slotRefs.current;
    const cardEls = cardsRef.current;

    // ✅ Kill only local tweens & triggers
    function killTweens() {
      tweensRef.current.forEach((t) => {
        if (t?.kill) t.kill();
      });
      tweensRef.current = [];
    }

    function createAnimations() {
      if (!container) return;
      killTweens();

      gsap.set(cardEls, {
        position: "absolute",
        left: "50%",
        top: "50%",
        xPercent: -50,
        yPercent: -50,
      });

      gsap.set(cardEls[0], { rotate: -15, zIndex: 3 });
      gsap.set(cardEls[1], { rotate: 10, zIndex: 2 });
      gsap.set(cardEls[2], { rotate: -5, zIndex: 1 });

      const containerRect = container.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;

      cards.forEach((_, i) => {
        const slot = slots[i];
        if (!slot) return;

        const slotRect = slot.getBoundingClientRect();
        const slotCenterX = slotRect.left + slotRect.width / 2;
        const dx = slotCenterX - containerCenterX;

        gsap.set(cardEls[i], {
          width: `${slotRect.width}px`,
          height: `${slotRect.height}px`,
        });

        const tween = gsap.to(cardEls[i], {
          x: dx,
          rotate: 0,
          ease: "power3.out",
          scrollTrigger: {
            id: `features-${i}`, // ✅ unique ID
            trigger: container,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        });

        // Save both tween & scrollTrigger
        tweensRef.current.push(tween);
        tweensRef.current.push(tween.scrollTrigger);
      });

      ScrollTrigger.refresh();
    }

    createAnimations();

    const onResize = () => {
      if (!isMobile) createAnimations();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      killTweens();
    };
  }, [isMobile]);

  return (
    <div className="py-28">
      <div ref={containerRef} className="max-w-6xl mx-auto px-6 relative">
        {isMobile ? (
          // ✅ Mobile Carousel
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {cards.map((card, index) => (
              <div
                key={index}
                className="min-w-[70%] h-[40vh] bg-black rounded-3xl p-8 flex flex-col justify-between shadow-lg snap-center"
              >
                <div className="flex gap-2 mb-6">
                  <img
                    src={card.icon}
                    alt={`icon-${index}`}
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-white text-2xl font-medium leading-snug">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>
        ) : (
          // ✅ Desktop GSAP Slots
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div ref={(el) => (slotRefs.current[0] = el)} className="h-[60vh]" />
              <div ref={(el) => (slotRefs.current[1] = el)} className="h-[60vh]" />
              <div ref={(el) => (slotRefs.current[2] = el)} className="h-[60vh]" />
            </div>

            {cards.map((card, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-black rounded-4xl p-8 flex flex-col justify-between shadow-lg"
                style={{ pointerEvents: "none" }}
              >
                <div className="flex gap-2 mb-6">
                  <img
                    src={card.icon}
                    alt={`icon-${index}`}
                    className="w-[6vw]"
                  />
                </div>
                <h3 className="text-white text-4xl font-medium leading-snug">
                  {card.title}
                </h3>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Features;
