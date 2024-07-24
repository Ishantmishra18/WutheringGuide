import React from 'react'
import Star from '../Feature/star'
import { useState , useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Weapon = ({character , name , weapons}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [charIndex,setHoveredcharIndex] = useState(null);
    const rank=['I','IV','II','III']
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
      gsap.fromTo(
        '.wgsap',
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.1 }
      );
    }, [hoveredIndex]);
  
    useEffect(() => {
      gsap.fromTo(
        '.wimg',
        { opacity: 1, x: -100 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.wtrig',
            start: 'center center',
            once: true, 
          },
        }
      );
     
     
    }, []);
  return (
    <>
    <div className="page h-[145vh] overflow-hidden w-screen flex flex-col items-center justify-start relative py-12" id='weapon'>
        <h1 className="title wtrig">Weapon</h1>
        <div className="flex w-screen h-[90vh] flex-wrap items-center justify-around wmaincont">
        <div className="flex justify-end gap-6 items-end flex-wrap h-[80vh] aspect-square rotate-45 wcont">
        {character.weapons.map((index , key)=>(
            <>
            <div  className={`${key === 0 ? 'h-[60%] aspect-square weaponbox' : 'h-[35%] aspect-square weaponbox'} ${index === hoveredIndex ? 'hoveredweaponbox' : ''} ${weapons[index].rarity===5?'wgold': weapons[index].rarity===4?'wpurple':'wblue'}`}  onMouseEnter={() => {setHoveredIndex(index);setHoveredcharIndex(key)}}>
            <div className={`rank absolute left-2 z-30  text-white ${isMobile?'text-sm bottom-0 left-0':' bottom-4 text-2xl'}`}>{rank[key]}</div>
            <Star num={weapons[index].rarity} size='small'/>
            <img src={`/weapon/${weapons[index].name}.png`} alt={weapons[index].name} className={`-rotate-45 h-full w-full top-0 absolute -z-10 ${index === hoveredIndex ? 'hoveredweapon' : ''}`}
           
             /></div>
            </>
        ))}
        </div>

        <div className={`wdata p-[10px] rounded-lg ${isMobile ? 'w-[80vw] gap-3' : 'w-[40vw] mb-24'} h-auto backdrop-blur-3xl z-30 flex flex-col justify-start items-center bradius`}>
          <div className={`flex w-auto items-center ${isMobile ? 'mb-2' : 'mb-10'}`}>
            <img src={`/symbols/${character.weapon}.png`} alt="" className={`aspect-square wgsap ${isMobile ? 'h-[4vh]' : 'h-[10vh]'}`} />
            <h1 className={`font-bold text-white text-center wgsap ${isMobile ? 'text-3xl' : 'text-6xl m-2'}`}>
              {hoveredIndex !== null ? weapons[hoveredIndex].name : ''}
            </h1>
          </div>
          <h4 className={`text-white wgsap ${isMobile ? 'text-sm' : 'text-2xl'}`}>
            {hoveredIndex !== null ? weapons[hoveredIndex].sub : ''}
          </h4>
          <p className={`wgsap ${isMobile ? 'text-[12px] w-[90vw] m-2' : 'text-sm m-6'} text-white`}>
            {hoveredIndex !== null ? weapons[hoveredIndex].des : ''}
          </p>
          <div className={`note bg-white ${isMobile ? 'px-4 py-3' : 'px-[6vh] py-5'} bradius wgsap text-lg font-bold flex flex-col items-center`}>
            <h1 className={`bradius px-4 text-white py-2 uppercase bg-neutral-900 mb-4 text-center ${isMobile ? 'text-sm' : 'text-2xl'}`}>
              {charIndex !== null ? character.weapnote[charIndex].role : `${isMobile?'Toach':'Hover over'}` + ' the Weapons to see about it'}
            </h1>
            <p className={isMobile ? 'text-sm' : 'text-base'}>
              {charIndex !== null ? character.weapnote[charIndex].des : ''}
            </p>
          </div>
        </div>
         </div>
    </div>
    </>
  )
}

export default Weapon