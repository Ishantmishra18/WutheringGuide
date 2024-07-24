import React, { useEffect } from 'react';
import gsap from 'gsap';

const Teamcomp = ({ character, name }) => {
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

  const middleIndex = Math.floor(character.team.length / 2);

  return (
    <div className="z-20 overflow-hidden page flex flex-col items-center py-12 w-screen h-auto" id="team">
      <h1 className="title ">Team Comps</h1>

      <div className="teams flex justify-center items-center gap-2">
        {character.team.map((team, index) => (
          <div key={index} className="flex flex-col justify-center items-center datacont">
            <div
              className={`aspect-square bg-black flex justify-center items-end teamcont ${
                index === middleIndex ? 'h-[35vw] bestteamcont' : 'h-[25vw]'
              }`}
            >
              <img src={`/characters/${team[0]}/main.png`} alt="" className="photo1" />
              <img src={`/characters/${name}/main.png`} alt="" className="photo2 z-40" />
              <img src={`/characters/${team[1]}/main.png`} alt="" className="photo3" />
            </div>
            <div
              className={`data h-auto overflow-hidden bg-white flex flex-col justify-center items-center ${
                index === middleIndex ? 'w-[35vw] bestdata' : 'w-[25vw]'
              }`}
            >
              <h4 className="text-3xl text-center">{team[2]}</h4>
              {index === middleIndex && (
                <h5 className="bg-neutral-950 text-white text-md rounded-full px-4 py-1 my-2">
                  Best team for {name}
                </h5>
              )}
              <p>{character.teamdes[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teamcomp;
