import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const Teamcomp = ({ character, name }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      '.data h4',
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        delay: 0.4,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.data h4',
          start: 'top bottom',
        },
      }
    );
  }, []);
  const orderedTeams = isMobile
  ? [
      character.team[1],
      character.team[0],
      character.team[2] !== undefined ? character.team[2] : null
    ].filter(team => team !== null)
  : character.team;

const orderedTeamDescriptions = isMobile
  ? [
      character.teamdes[1],
      character.teamdes[0],
      character.teamdes[2] !== undefined ? character.teamdes[2] : null
    ].filter(des => des !== null)
  : character.teamdes;
  return (
    <div className="overflow-hidden page flex flex-col items-center py-12 w-screen h-auto" id="team">
      <h1 className="title">Team Comps</h1>

      <div className="teams flex justify-center items-center gap-2">
        {orderedTeams.map((team, index) => (
          <div key={index} className="flex flex-col justify-center items-center datacont">
            <div
              className={`aspect-square bg-black flex justify-center items-end teamcont h-[25vw]  ${
                isMobile 
                  ? (index === 0 ? 'bestteam' : '')
                  : (index === 1 ? 'h-[35vw] bestteam' : '')
              }`}
            >
              <img src={`/ww/characters/${team[0]}/main.webp`} alt="" className="photo1"/>
              <img src={`/ww/characters/${name}/main.webp`} alt="" className="photo2 z-10"/>
              <img src={`/ww/characters/${team[1]}/main.webp`} alt="" className="photo3" />
            </div>
            <div
              className={`data h-auto overflow-hidden bg-white flex flex-col justify-center items-center ${
                isMobile 
                  ? (index === 0 ? 'w-[35vw] bestdata' : 'w-[25vw]')
                  : (index === 1 ? 'w-[35vw] bestdata' : 'w-[25vw]')
              }`}
            >
              <h4 className="text-3xl text-center">{team[2]}</h4>
              {((isMobile && index === 0) || (!isMobile && index === 1)) && (
                <h5 className="bg-neutral-950 text-white text-md rounded-full px-4 py-1 my-2">
                  Best team for {name}
                </h5>
              )}
              <p>{orderedTeamDescriptions[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teamcomp;
