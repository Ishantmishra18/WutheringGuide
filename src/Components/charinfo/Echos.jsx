import React, { useState, useEffect } from 'react';
import gsap from 'gsap';


const Echos = ({ character, allEchoes, allSonata }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [echocost, setEchocost] = useState(4);
  const [echoIndex, setEchoIndex] = useState(1);
  const [echoSonata, setEchoSonata] = useState(character.echosonata[0][0]);
  const [echoSonata2, setEchoSonata2] = useState(-1);
  const [filteredEchoes, setFilteredEchoes] = useState([]);
  const costlist = [1, 4, 3];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const filtered = allEchoes.filter(
      (val) =>
        val.cost === echocost &&
        (val.sonata.includes(echoSonata) || val.sonata.includes(echoSonata2))
    );
    setFilteredEchoes(filtered);
  }, [echocost, echoSonata, echoSonata2]);

  const renderEmid = (matchingElement) => {
    if (!matchingElement) return null;

    return (
      <div className={`ecircle aspect-square rounded-full bg-neutral-950 grid place-content-center ${isMobile ? 'h-[70vw] relative -right-[20vw] top-10' : 'h-[24vw] relative'}`}>
        <img src={`/echoes/${allEchoes[matchingElement].name}.png`} alt={allEchoes[matchingElement].name} className={`rounded-full aspect-square ${isMobile ? 'h-[68vw]' : 'h-[22.5vw]'}`} />
        <div className="esubcircle sub1">
          <h1 className='text-2xl'>Main Stat</h1>
          {character.echosub.main[echoIndex].map((data, idx) => (
            <p key={idx}>{data}</p>
          ))}
        </div>
        <div className="esubcircle sub3">
          <h1 className='text-2xl'>Sub Stat</h1>
          {character.echosub.sub.map((data, idx) => (
            <p key={idx}>{data}</p>
          ))}
        </div>
        <h4 className={`text-white bg-opacity-25 bg-black rounded-lg backdrop-blur-md absolute ${isMobile ? 'text-sm right-6 px-2 py-2 -bottom-5 ' : 'text-2xl py-3 px-8 -bottom-6 -left-6'}`}>{allEchoes[matchingElement].name}</h4>
      </div>
    );
  };

  const renderSonname = (sonataIndices, key) => {
    if (sonataIndices.length === 1) {
      const index = sonataIndices[0];
      return (
        <div
          className={`SoEf flex items-center font-bold ${character.echosonata.length === 1 ? '' : 'cursor-pointer'} justify-start gap-2 px-3 relative bg-white rounded-full duration-500 hover:scale-[1.06] ${isMobile ? 'w-[46vw] h-[4.5vh] text-[12px]' : 'w-[14vw] mt-6 h-[7vh] text-sm'} ${index === echoSonata && echoSonata2 === -1 ? 'sonclicked' : ''}`}
          onClick={() => {
            handleSonata(index);
            handleSonata2(-1);
          }}
        >
          <div className={`${key === 0 ? '' : 'hidden'} ${isMobile ? '-left-3  -top-6' : 'left-[-20%]  top-[-10%]'} absolute py-1 px-3 rounded-full  text-white bg-black`}>Best</div>
          <img src={`/echoes/sonata/${allSonata.name[index]}.png`} alt="" className="h-[95%] object-cover" />
          <h4 className="py-7">{allSonata.name[index]}</h4>
          <div
            className={`esonades absolute h-auto p-4 z-20 bg-black top-[6vh] rounded-lg text-white opacity-0 pointer-events-none px-3 flex flex-col items-center gap-4 ${isMobile ? ' w-[100%] left-0' : 'w-[140%] -left-[20%]'}`}>
            <div className="sonhead">2-piece set</div>
            <div className="soneff">{allSonata.twopc[index]}</div>
            <div className="sonhead">5-piece set</div>
            <div className="soneff">{allSonata.fivepc[index]}</div>
          </div>
        </div>
      );
    } else if (sonataIndices.length === 2) {
      const [index1, index2] = sonataIndices;
      return (
        <div
          className={`SoEf2 flex items-center font-bold justify-start gap-2 ${character.echosonata.length === 1 ? '' : 'cursor-pointer'} px-3 duration-500 relative bg-white rounded-full hover:scale-[1.06] ${isMobile ? 'w-[52vw] h-[4.5vh] text-[12px]' : 'w-[15vw] mt-6 h-[7vh] text-sm'} ${index1 === echoSonata && index2 === echoSonata2 ? 'sonclicked' : ''}`}
          onClick={() => {
            handleSonata(index1);
            handleSonata2(index2);
          }}
        >
          <div className="sonimgcont h-[95%] aspect-square relative">
            <img src={`/echoes/sonata/${allSonata.name[index1]}.png`} alt="" className="h-full w-full object-cover absolute bottom-2 left-1" />
            <img src={`/echoes/sonata/${allSonata.name[index2]}.png`} alt="" className="h-full w-full object-cover absolute top-2 right-4" />
          </div>
          <h4 className="py-7">{allSonata.name[index1]} / {allSonata.name[index2]}</h4>
          <div
            className={`esonades absolute h-auto p-4 z-30 bg-black top-[6vh] rounded-lg text-white opacity-0 pointer-events-none  px-3 flex flex-col items-center gap-4 ${isMobile ? ' w-[100%] left-0' : 'w-[140%] -left-[20%]'}`}
          >
            <div className="sonhead">2-piece set</div>
            <div className="soneff">{allSonata.twopc[index1]}</div>
            <div className="sonhead">2-piece set</div>
            <div className="soneff">{allSonata.twopc[index2]}</div>
          </div>
        </div>
      );
    }
  };

  function handleClick(val) {
    setEchocost(val);
  }

  function handleIndClick(val) {
    setEchoIndex(val);
  }

  function handleSonata(val) {
    setEchoSonata(val);
  }

  function handleSonata2(val) {
    setEchoSonata2(val);
  }

  const echomang = [[4, 3, 3, 1, 1], [4, 4, 1, 1, 1], [4, 4, 3, 1, '-']];

  useEffect(() => {
    gsap.fromTo(
      ".choosedecho",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        delay: 0.1,
        y: 0,
      }
    );
    gsap.fromTo(
      ".emid",
      {
        scale: 0.9,
        y: 40,
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.4,
      }
    );
  }, [echocost, echoSonata, echoSonata2]);

  return (
    <>
      <div className="page h-auto overflow-hidden w-screen flex flex-col items-center justify-start gap-10 mb-14 pt-12" id="echoes">
        <div className="title">Echos</div>
        <div className={`container flex h-auto flex-wrap items-center  ${isMobile ? 'flex-col justify-around' : ' px-8 justify-around'}`}>
          <div className={`eleft flex flex-col items-center justify-start h-auto ${isMobile ? 'w-[95vw]' : 'w-[35vw] h-[70vh]'}`}>
            <div className="sonata h-[20vh] flex flex-col items-center">
              <h2 className="text-white text-2xl">Sonata Effect</h2>
              <div className={`flex flex-wrap justify-center gap-4 mt-4 ${isMobile ? 'w-[100vw] h-[4vh]' : 'w-[50vw] h-[8vh]'}`}>
                {character.echosonata.map((sonInd ,key) => (
                  <>
                    {renderSonname(sonInd, key)}
                  </>
                ))}
              </div>
            </div>
            <div className="echoice flex flex-col items-center h-auto">
              <h2 className="text-white text-2xl mb-5">Echoes Choice</h2>
              <div className={`flex justify-between gap-5 w-full ${isMobile ? 'h-[8vh]' : 'h-[10vh]'}`}>
                {costlist.map((val, key) => (
                  <div
                    className={`ecocho px-5 py-2 bg-white h-[60%] w-[30%] rounded-full ${echocost === val ? 'clickcost' : ''}`}
                    onClick={() => {
                      handleClick(val);
                      handleIndClick(key);
                    }}
                  >
                    {val}COST
                  </div>
                ))}
              </div>
            </div>

            <div className={`choosedecho -z-20 flex flex-wrap h-auto gap-5 justify-center ${isMobile ? 'w-screen' : 'w-[48vw]'}`}>
              {filteredEchoes.map((val, index) => (
                <div
                  key={index}
                  className={`showecho bg-neutral-950 rounded-lg flex flex-col items-center justify-start ${isMobile ? 'h-[14vh] w-[20vw]' : 'h-[26vh] w-[8vw]'}`}
                >
                  <img src={`/echoes/${val.name}.png`} alt={val.name} className={`object-contain ${isMobile ? 'h-[70%]' : 'h-[75%]'}`} />
                  <h2 className={`text-white h-[15%] grid place-content-center text-center bg-neutral-950 py-4 rounded-full ${isMobile ? 'text-[8px]' : 'text-sm'}`}>{val.name}</h2>
                  <div className="flex h-[20%] pt-1 w-full justify-start gap-2 items-start px-2">
                    {val.sonata.map((sonInd) => (
                      <div key={sonInd} className="h-full">
                        <img src={`/echoes/sonata/${allSonata.name[sonInd]}.png`} alt={allSonata.name[sonInd]} className={`h-[70%] aspect-square rounded-full bg-slate-400 ${val.cost === 1 ? 'hidden' : ''}`} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`emid relative flex items-center justify-start flex-col ${isMobile ? 'h-[55vh] w-screen gap-20' : 'h-[70vh] w-[40vw]'}`}>
          {echocost === 1 ? (
              renderEmid(29)
            ) : (
              renderEmid(character.echobest.find(
                (val) => allEchoes[val].cost === echocost && allEchoes[val].sonata.includes(echoSonata)
              ))
            )}
            <h2 className={`text-white bg-black py-2 px-8 rounded-lg  text-center ${isMobile ? 'text-[12px] w-[45vw] ml-44 rounded-lg' : 'mt-14 text-xl'}`}>
              {echocost === 4 ? echoSonata === character.echosonata[0][0] ? `best Main echo for ${character.name}` : `best Main echo for ${character.name} from ${ allSonata.name[echoSonata]}` : echocost === 3 ? `3 cost alternative echo for ${character.name}` : 'dont use 1 cost echoes as Main echo'}
            </h2>
          </div>
        </div>

        <div className={`costm flex flex-col items-center ${isMobile ? ' h-auto' :''}`}>
          <h2 className="text-2xl text-white mb-4">Cost Management</h2>
          <div className={`flex items-center ${isMobile ? 'flex-col h-auto' : 'gap-10'}`}>
            {[...Array(3)].map((_, i) => (
              <>
                <div key={i} className={`flex items-center relative gap-4  justify-center rounded-2xl py-2 ${isMobile ? 'w-[90vw] h-[4vh]' : 'h-[7vh] w-[25vw]'}`}>
                  <div className={`line bg-white absolute -z-10 top-1/2 -translate-y-1/2 ${isMobile ? 'h-[1px] w-[70vw]' : 'h-[2px] w-[22vw]'}`}></div>
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className={`ecostbox bg-white rounded-2xl grid place-content-center text-xl ${isMobile ? 'h-[3vh] w-[5vh]' : 'h-[6vh] w-[8vh]'} ${j === 0 ? ' mr-5 font-extrabold ' : 'h'}`}>{echomang[i][j]}</div>
                  ))}
                </div>
                {i < 2 && <span key={`span-${i}`} className={`text-white font-bold ${isMobile ? 'rotate-90' : ''}`}>{' > '}</span>}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Echos;
