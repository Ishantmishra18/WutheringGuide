import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = ({ character, name }) => {
  const skills = ['Basic Attack', 'Resonance Skill', 'Resonance Liberation', 'Forte Circuit', 'Intro Skill','Outro Skill'];
  const [costToggle, setCostToggle] = useState(false);
  const [costIndex, setCostIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(character.skillprior[0]);
  const [sliderValue, setSliderValue] = useState(1);
  const [rotation , setRotation]=useState(0)

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const handleCost=(val)=>{
    setCostIndex(val)
    setSliderValue(1);
  }
  const rank = ['I', 'II', 'III', 'IV', 'V'];

  const Toggle = () => {
    setCostToggle(!costToggle);
  };
 const handleRotate=()=>{
  setRotation(rotation=>rotation+180)
 }
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sumCost = (skill,index) => {
    let sum = 0;
    for (let i = 0; i < index; i++) {
      sum += skillcoincurrent[skill][i];
    }
    return sum;
  };
  const sumCostmat=(skill,mat, index)=>{
    let sum=0;
    for (let i = 0; i < index; i++) {
      sum += skillcostcurrent[skill][mat][i];
    }
    return sum;
  }

  const skillcostIndex=[[0,1,4,5,6],[0,1,2,3,4,5,6,7,8],[1,2,4,6,7]]
  const skillcoincurrent=[[10000,20000],[1500,2000,4500,6000,16000,30000,50000,70000,100000],[50000,100000]]
  const skillcostcurrent=[[[3,0],[0,3],[0,0],[0,0],[1,1],[3,0],[0,3],[0,0],[0,0]],[[2,3,0,0,0,0,0,0,0],[0,0,2,3,0,0,0,0,0],[0,0,0,0,3,5,0,0,0],[0,0,0,0,0,0,2,3,6],[0,0,0,0,0,1,1,1,1],[2,3,0,0,0,0,0,0,0],[0,0,2,3,0,0,0,0,0],[0,0,0,0,2,3,0,0,0],[0,0,0,0,0,0,2,3,4]],[[0,0],[3,0],[0,3],[0,0],[0,1],[0,0],[3,0],[0,3],[0,0]]]


  const getPositionClass = (index) => {
    switch (index) {
      case 0:
      case 4:
        return isMobile?'top-[9vh]':'top-[24vh]';
      case 1:
      case 3:
        return isMobile?'top-[5vh]':'top-[6vh]';
      case 2:
        return 'top-[3vh]';
      default:
        return '';
    }
  };

  const stitle=['Passive Skill','Forte Skills','Stat Bonus']
  const renderskillcont = () => {
    if (!costToggle && hoveredIndex<6) {     
      return (
        <>
        <div className={`stitle flex items-center justify-between w-full ${isMobile?'h-[6vh] px-2':'px-12 h-[15%]'}`}>
          <div className="left flex items-center h-full">
            <img src={`${hoveredIndex===0?`/ww/symbols/${character.weapon}.webp`:`/ww/characters/${name}/skills/${hoveredIndex}.webp`}`} alt="" className="h-[110%] aspect-square object-cover" />
            <h2 className={` text-black  bradius bg-white font-bold ${isMobile?'text-[12px] px-3 py-1':'text-4xl py-3 px-4'}`}>{skills[hoveredIndex]}</h2>
          </div>
          <h2 className={`text-white text-center ${isMobile?'text-[12px]':'text-2xl'}`}>{character.skilldes[hoveredIndex].name} </h2>
        </div>
        <p className={`text-neutral-400 h-[120vh] mt-10 whitespace-pre-wrap ${isMobile?'text-[12px]':''}`}>
          {character.skilldes[hoveredIndex].des}
        </p>
        </>
      );
    } 
    else if(!costToggle && hoveredIndex>=6){
      return (
        <>
        <div className="h-[60vh] w-[70vw] flex flex-col items-center">
          <h2 className={` text-black bradius bg-white font-bold sgsap ${isMobile?'text-[12px] px-3 py-1':'text-4xl px-4 py-3'}`}>{hoveredIndex===6?'Inherent Skills':'Stat Bonus'}</h2>
          <div className={`flex  w-full justify-center items-center ${isMobile?'flex-col gap-6 mt-10':'gap-10'}`}>
          {character.skilldes[hoveredIndex].map((i ,key) => (
            <div className={`flex flex-col items-center  ${isMobile?'w-[90%] gap-2':'h-full w-[44%]'}`}>
              <div className={`flex  items-center ${isMobile?'h-[2vh]':'h-[20vh]'}`}>
                <img src={`/ww/characters/${name}/skills/${7-key}.webp`} alt="" className={` object-cover ${isMobile?'h-[100%]':'h-[30%]'} ${hoveredIndex===7?'hidden':''}`}/>
                <div className={`passtitle text-center text-white capitalize ${isMobile?'text-[12px]':'text-3xl'}`}>{i.name}</div>
                </div>
                <p className={`text-neutral-400 ${isMobile?'text-[10px]':''}`}>{i.des}</p>
            </div>            
          ))}
          
          </div>
        </div>
        </>
      )
    }
    
    else if (costToggle) {
      return (
        <>
      <div className="h-[50vh] w-[70vw] flex gap-3 flex-col items-center justify-start">
        <h1 className='text-3xl text-white font-bold'>{stitle[costIndex]}</h1>
      <div className={`slider-container h-[32vh] w-full bg-slate-30 rounded-t-[12vh] gap-3 rounded-md flex flex-col items-center`}>
        <div className="flex w-full justify-center items-center gap-4">
        <input
          type="range"
          min="1"
          max={`${costIndex===1?'9':'2'}`}
          value={sliderValue}
          onChange={handleSliderChange}
          className={`sliderbar px-[2px] ${costIndex===1?'sliderlong':'slidershort'}`}
        />
        <div className={`slideval text-white ${isMobile?'w-[30vw] text-[10px]':'text-2xl'}`}>Level {sliderValue} to {Number(sliderValue) + 1}</div>
        </div>
        <div className={`flex flex-wrap  h-[18vh]  bg-slate-70 justify-center ${isMobile?'gap-8 w-[96vw]':'gap-2 w-[60vw]'}`}>
        <div className={`flex flex-col items-center justify-start   ${isMobile?'h-[10vh] w-[15vw]':'h-[20vh] w-[18vh]'}`}>
            <img src={`/ww/items/coin.webp`} alt="" className='h-[65%]' />     
            <h2 className={`text-white text-[10px] text-center ${isMobile?'text-[8px]':''}`}>Credit Shell</h2> 
            <h1 className={`text-neutral-300 font-bold  ${isMobile?'text-[10px]':'text-sm'}`}>{skillcoincurrent[costIndex][sliderValue-1]}</h1>
            <h1 className={`text-neutral-300 font-bold ${isMobile?'text-[10px]':'text-sm'}`}>[{sumCost(costIndex,sliderValue)}]</h1>
          </div>
          {skillcostIndex[costIndex].map((val)=>(
          <div className={`flex flex-col items-center justify-start   ${isMobile?'h-[10vh] w-[15vw]':'h-[20vh] w-[18vh]'}`}>
            <img src={`/ww/items/${character.skillcost[val]}.webp`} alt="" className='h-[65%]' />     
            <h2 className={`text-white text-[10px] text-center w-[75px] ${isMobile?'text-[8px]':''}`}>{character.skillcost[val]}</h2> 
            <h1 className={`text-neutral-300  font-bold ${isMobile?'text-[10px]':'text-sm'}`}>{skillcostcurrent[costIndex][val][sliderValue-1]}</h1>
            <h1 className={`text-neutral-300  font-bold ${isMobile?'text-[10px]':'text-sm'}`}>[{sumCostmat(costIndex,val,sliderValue)}]</h1>
          </div>
          ))}
        </div>
      </div>
      </div>
        </>
      );
    }
  }



  useEffect(() => {
    gsap.fromTo(
      '.skillbox',
      { opacity: 0, y: 100, x: 200 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.togglebar',
          start: 'top bottom',
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      '.skillcont',
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.1 }
    );
  }, [hoveredIndex , costToggle,costIndex]);

  return (
    <div className={`page overflow-hidden relative flex flex-col items-center pt-12 ${isMobile?'h-[120vh]':'h-[140vh]'}`} id="skills">
      <div className="title">Skills</div>
      <div className={`absolute passivebar  flex  items-center justify-evenly duration-500 ${costToggle?'-translate-x-60 -rotate-45 opacity-0':''} ${isMobile?'h-auto w-[90vw] top-[84vh]':' left-8 flex-col  h-[90vh] w-[10vw]'}`}>
      <div className="">
          <img src={`/ww/symbols/passive.webp`} alt="" className={`h-[60%] imgskill object-cover ${6 === hoveredIndex ? 'scale-130' : ''}`} onMouseEnter={() => setHoveredIndex(6)} />
          <h2>Inherent Skills</h2>
        </div>
        <div className="">
          <img src={`/ww/characters/${name}/skills/5.webp`} alt="" className={`h-[60%] imgskill object-cover ${5 === hoveredIndex ? 'scale-130' : ''}`}
          onMouseEnter={() => setHoveredIndex(5)}/>
          <h2 className='text-white'>Outro Skills</h2>
        </div>
        <div className="">
          <img src={`/ww/symbols/statbonus.webp`} alt="" className={`h-[60%] imgskill object-cover ${7 === hoveredIndex ? 'scale-130' : ''}`}
          onMouseEnter={() => setHoveredIndex(7)}/>
          <h2 className='text-white'>Stat Bonus</h2>
        </div>
      </div>
      <div className={`togglebar  bg-slate-300 mb-2 rounded-full p-1 cursor-pointer  absolute  z-30 ${isMobile?'top-[73vh]  left-1/2 -translate-x-1/2':'bottom-[50vh] h-10 w-24 right-[11vw]'}`} onClick={() => {
    Toggle();
    handleRotate();
  }} >
        <div className={`ball h-full w-[50%] bg-neutral-950 rounded-full ${costToggle ? 'transright' : 'transleft'}`}></div>
        <h1 className='text-white mt-3 absolute w-32 grid place-content-center left-1/2 -translate-x-1/2 bg-rd-500'>{costToggle?'Switch to Info':'Switch to Cost'}</h1>
      </div>
      <div className={`skillcont overflow-hidden flex items-center flex-col h-[60vh] w-[76vw] py-5 overflow-y-scroll rounded-md rounded-t-[10vw] ${isMobile ? 'w-[95vw] px-2' : 'px-10'}`}>
      {renderskillcont()}
      
      </div>
      
      <div className={`absolute aspect-square  skillwheel rounded-full ${isMobile ? 'h-[180vw] top-[90vh]' : 'h-[120vw] bottom-[-95vw]'} ${costToggle? 'rotate-180' : ''}`} style={{ transform: `rotate(${rotation}deg)`}}>
        {character.skillprior.map((i, index) => (
          <div
            key={i}
            className={`skillbox flex flex-col justify-start items-center h-[120px] w-[11vw] absolute ${getPositionClass(index)}`}
            style={{ right: isMobile?`${((4 - index) * 19.75) + 45}vw`:`${((4 - index) * 17.2) + 20}vw` }}
          >
            <h2 className="text-white srank">{rank[index]}</h2>
            <img
              src={`${i===0?`/ww/symbols/${character.weapon}.webp`:`/ww/characters/${name}/skills/${i}.webp`}`}
              alt={`${i + 1}`}
              className={`h-[80%] imgskill ${i === hoveredIndex ? 'scale-130' : ''}`}
              onMouseEnter={() => setHoveredIndex(i)}
            />
            <h1 className="text-white text-center">{skills[i]}</h1>
          </div>
        ))}
        
        <div className={`absolute text-white uppercase bg-black rounded-full ${isMobile?'right-[42vw] top-[23vh] p-2 px-4 text-[12px]':'right-[18vw] rounded-bl-sm top-[15vh] p-4 '}`}>Least</div>
        <div className={`absolute text-white uppercase bg-black rounded-full ${isMobile?'left-[42vw] top-[23vh] p-2 px-4 text-[12px]':'left-[18vw] rounded-br-sm top-[15vh]  p-4'}`}>Most</div>
        <div className={`toggleskill  ${isMobile?'left-[50vw] bottom-[7vh]':'left-[30vw] bottom-[14vh]'}`}>
          <img src={`/ww/symbols/passive.webp`} alt="" className={`h-[80%] imgskill ${0 === costIndex? 'scale-130' : ''}`} onMouseEnter={() => handleCost(0)} />
          <h2>Inherent Skills</h2>
        </div>
        <div className={`toggleskill ${isMobile?'left-[84.5vw] bottom-[2vh]':'left-[54.5vw] bottom-[0vh]'}`}>
          <img src={`/ww/symbols/forteall.webp`} alt="" className={`h-[80%] imgskill ${1 === costIndex ? 'scale-130' : ''}`} onMouseEnter={() => handleCost(1)} />
          <h2>Forte Skills</h2>
        </div>
        <div className={`toggleskill ${isMobile?'left-[119vw] bottom-[7vh]':'left-[79vw] bottom-[14vh]'}`}>
          <img src={`/ww/symbols/statbonus.webp`} alt="" className={`h-[80%] imgskill ${2 === costIndex ? 'scale-130' : ''}`} onMouseEnter={() => handleCost(2)} />
          <h2>Stat Bonuses</h2>
        </div>
        
      </div>
      
    </div>
  );
};

export default Skills;
