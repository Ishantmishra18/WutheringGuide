import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import '../Components/WW.css';

const CardContainer = ({ charData, selectedCardElement }) => {
  useEffect(() => {
    gsap.fromTo(
      '.fakecard',
      {
        opacity: 0,
        scale: 0.8,
        rotationX: 35,
        rotationY: 45,
        rotationZ: 15,
        y:40
      },
      {
        opacity: 1,
        scale: 1,
        y:0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        stagger: 0.1,
        duration: 0.5,
      }
    );
  }, [selectedCardElement]);

  const splitName = (name) => {
    const parts = name.split(' ');
    return parts.length > 1 ? (
      <>
        {parts[0]}{' '}
        <span className=" text-[13px] absolute -bottom-[52%] surnamecard -right-5">
          {parts.slice(1).join(' ')}
        </span>
      </>
    ) : (
      name
    );
  };

  // Create a sorted version of charData with rarity === 5 first
  const sortedCharData = [...charData].sort((a, b) => b.rarity - a.rarity);

  return (
    <div className="wrapcont">
      <div className="cardcont flex justify-center items-start mt-[10vh] flex-wrap h-auto w-[90vw] mx-[5vw] gap-4">
        {sortedCharData.map(
          (item, index) =>
            (item.element === selectedCardElement ||
              selectedCardElement === 'null') && (
              <Link
                key={index}
                to={`/WW/Guide/${item.name}`}
                className="h-[360px] w-[220px] relative overflow-hidden fakecard bradius"
              >
                <div className="h-[83.5%] w-full bg-slate-500 mr-[12px] cards bottom-1 absolute bradius">
                  <img
                    src={`/ww/symbols/${item.weapon}.webp`}
                    alt=""
                    className="absolute z-20 top-[0px] -skew-x-12 h-[16%] bg-neutral-900 weaponcard object-contain p-2 rounded-md"
                  />
                </div>
                <img
                  src={
                    item.rarity === 5
                      ? `/ww/characters/${item.name}/background.jpeg`
                      : `/ww/background/cards.jpg`
                  }
                  alt=""
                  className="h-[81%] w-[96%] cardcon bradius object-cover z-10"
                />
                <img
                  src={`/ww/characters/${item.name}/main.webp`}
                  alt=""
                  className="h-[82%] w-[96%] photo bradius z-20"
                />
                <h1 className="text-white uppercase absolute bottom-[6%] right-[50%] text-2xl cardname z-30">
                  {splitName(item.name)}
                </h1>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default CardContainer;
