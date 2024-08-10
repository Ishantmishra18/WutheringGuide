import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { MdHome } from "react-icons/md";

const Navbar = ({ buttonNames, onButtonClick }) => {


  return (
    <>
      <div className='navbar h-[10vh] w-screen flex items-center justify-between px-[20px] lg:px-[40px] fixed top-0 z-50'>
        <Link className="logo h-full cursor-pointer aspect-square flex items-center justify-start hover:scale-105 duration-100" to={'/'}>
          <img className='h-full w-full' src={logo} alt="Logo" />
        </Link>
        <Link to='/ww' className='flex justify-center items-center text-white font-bold whome h-full aspect-square hover:translate-x-2 duration-300 uppercase hover:text-gray-400'>
        <MdHome className='h-[60%] w-[60%]'/>
        </Link>
      </div>
      <div className="bigelemcont flex h-[8vh] w-[26vw] fixed top-[1vh] justify-between right-[50%] translate-x-1/2 z-50 items-center">
      <div className='h-full w-[84.5%] flex items-center justify-around z-50 z elemcont rounded-l-full rounded-r-2xl'>
        {buttonNames.map((name, index) => (
          <Link key={index} onClick={() => onButtonClick(name)} className="element h-[80%] aspect-square duration-300 p-[6px]" to={`/WW/Guide`}>
            <img src={`/ww/elements/${name}.webp`} alt={name} className="h-full w-full" />
            <div className="elemname top-[0px] text-gray-100 opacity-0 capitalize pointer-events-none">{name}</div>
          </Link>
        ))}
        </div>
        <div className="allchar rounded-r-full rounded-l-sm h-full w-[15%] flex items-center justify-around">
        <Link onClick={() => onButtonClick('null')} className='h-full element duration-300 aspect-square p-[7px] flex items-center flex-col  text-white' to={`/WW/Guide`}>
        <img src={`/ww/symbols/allchar.webp`} alt='' className="h-full"/>
        <div className="elemname top-[0px] text-gray-100 opacity-0 capitalize pointer-events-none">All
        </div>
        </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
