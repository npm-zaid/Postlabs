import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Text = () => {
  const [text, setText] = useState("Built for Scale Creators Canada");
  const [bgImage, setBgImage] = useState("url('https://via.placeholder.com/1500x1000?text=Image1')");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top 10%",
      end: "bottom 10%",
      onUpdate: (self) => {
        if (self.progress > 0.5) {
          setText("Built for Scale Creators Canada Expanding on Vision");
          setBgImage("url('https://via.placeholder.com/1500x1000?text=Image2')");
        } else {
          setText("Built for Scale Creators Canada");
          setBgImage("url('https://via.placeholder.com/1500x1000?text=Image1')");
        }
      }
    });
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundImage: bgImage, backgroundSize: 'cover', transition: 'background-image 1s ease' }}>
      <div className="section text-center">
        <h1 className="text-4xl font-bold">{text}</h1>
      </div>
    </div>
  );
};

export default Text;