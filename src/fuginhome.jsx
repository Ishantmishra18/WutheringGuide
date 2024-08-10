import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

const FuginHome = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen w-screen flex flex-col">
      <nav className={`flex items-center justify-between w-full px-4 py-2 ${isMobile ? 'h-16' : 'h-20'}`}>
        <div className="flex items-center gap-2 h-full">
          <img src={logo} alt="Fugin Guides Logo" className="h-full" />
          <h2 className="text-white text-lg sm:text-xl lg:text-2xl uppercase">Fugin Guides</h2>
        </div>
      </nav>

      <div className={`text-white border-t-2 border-b-2 border-white flex ${isMobile ? 'flex-col h-80' : 'h-[50vh]'} w-full`}>
        <Link
          to="/WW"
          className={`h-full relative duration-300 opacity-75 hover:opacity-100 hover:w-[70%]  group ${isMobile ? 'w-full border-white border-b-2' : 'w-[65%]'}`}
        >
          <div className={`h-full w-full overflow-hidden relative skew-x-[-20deg] ${isMobile?'':'origin-bottom'}`}>
            <img
              src="/home/ww.webp"
              alt="Wuthering Wave"
              className="h-full w-full object-cover absolute skew-x-[20deg] scale-[1.15] over"
            />
          </div>
          <h2 className="font-extrabold uppercase text-3xl sm:text-4xl lg:text-5xl absolute bottom-2 left-1/2 -translate-x-1/2 group-hover:text-black group-hover:text-[55px] duration-300 whitespace-nowrap">
            Wuthering Wave
          </h2>
        </Link>
        <div className={`flex gap-10 ${isMobile ? 'h-16 items-center' : 'items-end'}`}>
          <h2 className="uppercase text-white text-lg sm:text-xl lg:text-2xl mb-1 ml-5">Coming Soon...</h2>
        </div>
      </div>

      <div className={`fugincont px-4 sm:px-8 pt-4 ${isMobile ? 'w-full mx-auto' : 'w-[60vw]'} `}>
        <h2 className="text-white text-xl sm:text-2xl lg:text-3xl uppercase">Welcome</h2>
        <p className={`text-white leading-6 ${isMobile ? 'text-sm leading-5' : 'text-lg'}`}>
          Welcome to Fugin Guides! Your ultimate guide to mastering your favorite games. Dive in for expert tips, tricks, and comprehensive walkthroughs to elevate your gaming experience. Happy gaming!
        </p>
      </div>
    </div>
  );
};

export default FuginHome;
