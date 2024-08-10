import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const StarComponent = ({ num, size}) => {
  const starsRef = useRef([]);

  useEffect(() => {
    starsRef.current = starsRef.current.slice(0, num);
    gsap.fromTo(
      starsRef.current,
      {
        opacity: 0,
        x: -40,
        rotate: 270,
      },
      {
        rotate: 0,
        opacity: 1,
        x: 0,
        stagger: 0.2,
        delay: 0.5,
        duration: 0.5,
        ease: 'power2.out',
      }
    );
  }, [num]);

  

  return (
    <div className="star-container flex gap-2">
      {Array.from({ length: num }).map((_, index) => (
        <img
          key={index}
          ref={(el) => (starsRef.current[index] = el)}
          src="/ww/symbols/star.webp"
          alt="star"
          className={`${ size === 'small'? 'md:h-[20px] h-[14px]':'md:h-[30px] h-[20px] '} stars aspect-square`}
        />
      ))}
    </div>
  );
};

export default StarComponent;