import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";

const Resonance = ({ character, name }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getPositionClass = (index) => {
    if (isMobile) {
      switch (index) {
        case 0:
          return 'left-[8vw] bottom-[22vh]';
        case 1:
          return 'left-[23vw] bottom-[27vh]';
        case 2:
          return 'left-[38vw] bottom-[29vh]';
        case 3:
          return 'left-[53vw] bottom-[29vh]';
        case 4:
          return 'left-[68vw] bottom-[27vh]';
        case 5:
          return 'left-[83vw] bottom-[22vh]';
        default:
          return '';
      }
    } else {
      switch (index) {
        case 0:
        case 5:
          return 'right-[23vh]';
        case 1:
        case 4:
          return 'right-[19vh]';
        case 2:
        case 3:
          return 'right-[15vh]';
        default:
          return '';
      }
    }
  };

  useEffect(() => {
    gsap.fromTo('.resodata', {
      x: 100,
      opacity: 0
    },
      {
        x: 0,
        opacity: 1,
        duration: 0.4
      });
  }, [hoveredIndex]);

  useEffect(() => {
    gsap.fromTo(
      '.charimg',
      { opacity: 0, x: -100, },
      {
        opacity: 1,
        x: 0,
        delay: 0.4,
        scrollTrigger: {
          trigger: '.charimg',
          start: 'top bottom',
        },
      }
    );
  }, []);

  return (
    <>
      <div className="page w-screen h-screen overflow-hidden relative flex flex-col items-center pt-12" id='resonance'>
        <h1 className="title">Resonance</h1>
        <img src={`/ww/characters/${name}/main.webp`} alt={`${name} main`} className={`charimg absolute ${isMobile ? 'bottom-[20vh] left-[20vw] w-[60vw]' : '-bottom-[10vw] left-0 w-[40vw]'}`} />

        {[...Array(6)].map((_, i) => (
          <img
            key={i}
            src={`/ww/characters/${name}/resonance/${i + 1}.webp`}
            alt={`${name} resonance ${i}`}
            className={`aspect-square absolute resocont transition-transform duration-500 ${getPositionClass(i)} ${i === hoveredIndex ? 'scale-130' : ''} ${isMobile?'bg-neutral-900 rounded-full':''}`}
            style={{top:isMobile ?'':`${(i * 15)+8}vh`, height: isMobile ? '40px' : '80px' }}
            onMouseEnter={() => !isMobile && setHoveredIndex(i)}
            onTouchStart={() => isMobile && setHoveredIndex(i)}
          />
        ))}

        <div className={`resodata absolute bg-slate-200 ${isMobile ? 'top-[11vh] left-[5vw] w-[90vw] mt-4' : 'top-[20vh] left-[32vw] w-[50vw]'} p-[10px] rounded-lg h-auto backdrop-blur-3xl z-30 opacity-90 flex flex-col justify-start items-center bradius`}>
          <h1 className={`mt-[5vh] ${isMobile ? 'text-2xl' : 'text-4xl'} m-2 font-bold text-center`}>{hoveredIndex !== null ? character.resonance[hoveredIndex] : `${isMobile?'Touch':'Hover over'} the Resonance to see Info`}</h1>
          <h4 className={`bg-neutral-900 text-white rounded-full py-2 px-6 ${isMobile?'text-[10px]':''}`}>Sequence {hoveredIndex + 1}</h4>
          <p className={`m-6 ${isMobile ? 'text-[12px]' : 'text-xl'}`}>{hoveredIndex !== null ? character.resodes[hoveredIndex] : ''}</p>
        </div>

        <div className={`resoprior absolute ${isMobile ? ' top-[85vh] w-[100vw] h-[60px]' : 'bottom-[10vh] left-[35vw] w-[600px] h-[80px]'} flex justify-evenly items-center`}>
          <h3 className={`absolute ${isMobile ? 'top-[-5vh] text-xl' : 'bottom-[12vh] text-2xl'} text-white`}>Important Resonance</h3>
          {character.resoprior.map((index, key) => (
            <>
              <div className={`resopriorcont flex flex-col items-center h-full`}>
                <img
                  src={`/ww/characters/${name}/resonance/${index}.webp`}
                  alt={`${name} resonance ${index}`}
                  className={`aspect-square ${isMobile ? 'h-[40px]' : 'h-[90%]'}`}
                />
                <h4 className={`bg-white rounded-full ${isMobile ? 'px-2 py-1 text-[12px]' : 'px-5 py-2'}`}>Sequence {index}</h4>
              </div>
              {key < character.resoprior.length - 1 && <span className="text-white font-bold">{' > '}</span>}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Resonance;
