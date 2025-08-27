import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SectionScroll = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const texts = document.querySelectorAll('.text-item');
    const videoContainer = document.querySelector('.video-container');

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 10%',
        end: 'bottom 10%',
        onEnter: () => {
          texts.forEach(text => text.classList.remove('bg-yellow-300', 'text-black'));
          texts[index].classList.add('bg-yellow-300', 'text-black');
          videoContainer.style.backgroundImage = `url('https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4')`; // Sample video 1
          if (index === 1) videoContainer.style.backgroundImage = `url('https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4')`; // Sample video 2
          if (index === 2) videoContainer.style.backgroundImage = `url('https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4')`; // Sample video 3
        },
        onEnterBack: () => {
          texts.forEach(text => text.classList.remove('bg-yellow-300', 'text-black'));
          texts[index].classList.add('bg-yellow-300', 'text-black');
          videoContainer.style.backgroundImage = `url('https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4')`;
          if (index === 1) videoContainer.style.backgroundImage = `url('https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4')`;
          if (index === 2) videoContainer.style.backgroundImage = `url('https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4')`;
        },
      });
    });

    gsap.to(".panel", {
      y: -100 * (sections.length - 1) + "vh",
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        end: "+=" + (sections.length * 100) + "vh",
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="container min-h-screen relative">
      <div className="video-container w-full h-screen bg-cover bg-center absolute top-0 left-0 z-0" style={{ backgroundImage: `url('https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4')` }} />
      <div className="panel relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-4xl font-bold">
        <div className="section">
          <h2 className="text-item">Scale</h2>
        </div>
        <div className="section">
          <h2 className="text-item">Built for Creators</h2>
        </div>
        <div classClassName="section">
          <h2 className="text-item">Canada</h2>
        </div>
      </div>
    </div>
  );
};

export default SectionScroll;