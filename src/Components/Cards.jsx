import React, { useEffect ,useState} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { div } from 'framer-motion/client';

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {

    const [mobile,setIsMobile] = useState(false);
    useEffect(()=>{
      if(window.innerWidth<768){
        setIsMobile(true);
      }
    },[])

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
    }
  ];

  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    // Initial stacked state: all cards overlap at center with different rotations
    gsap.set(cards, {
      x: 0,
      y: 0,
    });

    gsap.set(cards[0], { rotate: -10 });
    gsap.set(cards[1], { rotate: 5 });
    gsap.set(cards[2], { rotate: 15 });

    // Animate to original positions
    gsap.to(cards, {
      x: (i) => i * 400 - 400, // spread cards horizontally
      rotate: 0,
      duration: 1,
    ease: "expo.in",
      scrollTrigger: {
        trigger: '.page',
        scrub: 1,
        start: 'top 50%',
        end: 'top 20%',
      }
    });
  }, []);

  return (
    mobile
    ? <div className='h-[70vh] flex  justify-center items-center '>
       <div className='overflow-x-scroll flex gap-6 justify-start items-center px-6'>
        {cards.map((card, index) => (
              <div
                key={index}
                className="card  h-[40vh]   bg-black rounded-4xl p-8 flex flex-col justify-between shadow-lg"
                style={{ pointerEvents: "none" }}
              >
                <div className="flex gap-2 mb-6">
                  <img
                    src={card.icon}
                    alt={`icon-${index}`}
                    className="w-[10vw]"
                  />
                </div>
                <h3 className="text-white text-2xl font-medium leading-snug">
                  {card.title}
                </h3>
              </div>
            ))}
            </div>

    </div>
   
    :  <div className='h-screen page flex justify-center items-center relative'>

       {cards.map((card, index) => (
              <div
                key={index}
                className="card absolute h-[60vh] w-[28%] bg-black rounded-4xl p-8 flex flex-col justify-between shadow-lg"
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
    </div>
  );
}

export default Cards;
