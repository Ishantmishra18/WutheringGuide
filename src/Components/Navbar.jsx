import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = ({ buttonNames, onButtonClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
      <div className='navbar h-[10vh] w-screen flex items-center justify-between px-[20px] lg:px-[40px] fixed top-0 z-50'>
        <div className="logo h-full aspect-square flex items-center justify-start gap-4">
          <img className='h-full w-full' src={logo} alt="Logo" />
        </div>
        <div className="right hidden lg:flex items-center justify-center gap-3">
          <Link to={`/`} className="Navbtn">Home</Link>
          <Link to={`/Guide`} className="Navbtn" onClick={() => onButtonClick('null')}>Guide</Link>
        </div>
        <div className="lg:hidden">
          <button onMouseEnter={toggleMenu} onMouseLeave={toggleMenu} className="text-zinc-300 focus:outline-none">
            <svg className="w-8 h-8 mt-6 navtoggle" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
        <div ref={menuRef} className={`absolute top-[10vh] right-0 humburg w-full h-32 p-4 flex flex-col items-center lg:hidden transition-all duration-300 ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
          <Link to={`/`} className="Navbtn mb-2 text-sm" onClick={()=>toggleMenu(false)}>Home</Link>
          <Link to={`/Guide`} className="Navbtn text-sm" onClick={() => { onButtonClick('null'); toggleMenu(); }}>Guide</Link>
        </div>
      </div>
      <div className='fixed h-[8vh] w-[25vw] top-[1vh] duration-500 right-[50%] translate-x-1/2 flex items-center justify-around z-50 elemcont'>
        {buttonNames.map((name, index) => (
          <Link key={index} onClick={() => onButtonClick(name)} className="element" to={`/Guide`}>
            <img src={`/elements/${name}.png`} alt={name} className="h-full w-full" />
            <div className="elemname top-[0px] text-gray-100 opacity-0 capitalize pointer-events-none">{name}</div>
          </Link>
        ))}
        <Link onClick={() => onButtonClick('null')} className='h-[20px] rounded-full w-[0px] grid place-content-center duration-500 absolute opacity-0 text-white bottom-[-3.2vh] navallchar' to={`/Guide`}>View All</Link>
      </div>
    </>
  );
};

export default Navbar;
