import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = ({ buttonNames, onButtonClick }) => {


  return (
    <>
      <div className='navbar h-[10vh] w-screen flex items-center justify-between px-[20px] lg:px-[40px] fixed top-0 z-50'>
        <Link className="logo h-full cursor-pointer aspect-square flex items-center justify-start gap-4 hover:scale-105 duration-100" to={'/'}>
          <img className='h-full w-full' src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="bigelemcont flex h-[8vh] w-[26vw] fixed top-[1vh] justify-between right-[50%] translate-x-1/2 z-50 items-center">
      <div className='h-full w-[84.5%] flex items-center justify-around z-50 z elemcont rounded-l-full rounded-r-2xl'>
        {buttonNames.map((name, index) => (
          <Link key={index} onClick={() => onButtonClick(name)} className="element h-[80%] aspect-square duration-300 p-[6px]" to={`/Guide`}>
            <img src={`/elements/${name}.webp`} alt={name} className="h-full w-full" />
            <div className="elemname top-[0px] text-gray-100 opacity-0 capitalize pointer-events-none">{name}</div>
          </Link>
        ))}
        </div>
        <div className="allchar rounded-r-full rounded-l-sm h-full w-[15%] flex items-center justify-around">
        <Link onClick={() => onButtonClick('null')} className='h-full element duration-300 aspect-square p-[7px] flex items-center flex-col  text-white' to={`/Guide`}>
        <img src={`/symbols/allchar.webp`} alt='' className="h-full"/>
        <div className="elemname top-[0px] text-gray-100 opacity-0 capitalize pointer-events-none">All
        </div>
        </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
