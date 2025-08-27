import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CursorFollower = () => {
  const ballRef = useRef(null);

  useEffect(() => {
    const ball = ballRef.current;
    const moveBall = (e) => {
      gsap.to(ball, {
        x: e.clientX - ball.offsetWidth / 2,
        y: e.clientY - ball.offsetHeight / 2,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveBall);
    return () => window.removeEventListener("mousemove", moveBall);
  }, []);

  return (
    <div
      ref={ballRef}
      className="pointer-events-none absolute z-30 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-yellow-200 to-[#FFE600] opacity-80 mix-blend-multiply"
      style={{ filter: "blur(120px)" }}
    ></div>
  );
};

export default CursorFollower;
