import React, { useState, useEffect, useRef } from 'react';
import { FaInstagram } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import FancyInputForm from './Feature/FancyInputForm.jsx';
import gsap from 'gsap';
import { Link } from 'react-router-dom';


const Footer = () => {
  const [aboutus, setAboutus] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [clientsub, setClientsub] = useState(0);
  const [randomImage, setRandomImage] = useState('/random/feedback/0.webp');

  const hasMounted = useRef(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (hasMounted.current) {
      const tl = gsap.timeline();
      tl.to('.submitedimg', { duration: 0.5, x: isMobile ? 100 : 220, rotate: 30 })
        .to('.submsg', { y: isMobile ? -50 : -100, opacity: 1, duration: 1, rotate: -30 })
        .to('.submsg', { duration: 2 })
        .to('.submsg', { y: 0, opacity: 0, duration: 1 })
        .to('.submitedimg', { duration: 0.5, x: 0, rotate: 0 });

      return () => {
        tl.kill();
      };
    } else {
      hasMounted.current = true;
    }
  }, [clientsub, isMobile]);

  const moveup = () => {
    setAboutus(!aboutus);
  };

  const emailsub = () => {
    setClientsub(prev => prev+1); 
    const randomIndex = Math.floor(Math.random() * 3);
    setRandomImage(`/random/feedback/${randomIndex}.webp`);
  };

  return (
    <>
      <footer className='overflow-hidden' id='down'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="" fillOpacity="1" d="M0,192L60,170.7C120,149,240,107,360,106.7C480,107,600,149,720,192C840,235,960,277,1080,288C1200,299,1320,277,1380,266.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        <div className={`fixed submitedimg z-50 ${isMobile ? 'h-[15vh] w-[15vh] left-[-15vh] bottom-[5%]' : 'h-[40vh] w-[20vw] left-[-20vw] bottom-0'} ${clientsub===0?'hidden':''}`}>
          <img src={randomImage} alt="Submitted Feedback" />
          <div className={`submsg absolute h-[45%] w-[110%] bg-white top-[-20%] px-2 rounded-lg text-center grid place-content-center opacity-0 ${isMobile ? 'text-sm' : 'text-xl'}`}>
            Thanks for the feedback
          </div>
        </div>

        <div className={`w-screen ${isMobile ? 'h-[60vh]' : 'h-[70vh]'} flex flex-col py-7 justify-center items-center bg-black relative`}>
          <div className={`circle h-[20vh] w-[20vh] ${isMobile ? 'h-[20vh] w-[20vh] top-0 left-[10vw] rotate-180' : 'h-[40vh] w-[40vh] top-0 left-[20vw] rotate-180'} rounded-full bg-slate-300 absolute`}></div>
          <div className={`circle h-[10vh] w-[10vh] ${isMobile ? 'h-[10vh] w-[10vh] top-[2vh] right-[10vw]' : 'h-[20vh] w-[20vh] top-[2vh] right-[25vw]'} rounded-full bg-slate-300 absolute`}></div>
          <h1 className={`text-white text-4xl ${isMobile ? 'text-4xl' : 'text-6xl'} mb-5 uppercase text-center`}>Fugin | Wuthering Waves</h1>
          <div className={`fakefootercont overflow-hidden ${isMobile ? 'h-[25vh] w-[90%]' : 'h-[40vh] w-[40%]'} relative transition-all duration-500`}>
            <div className={`footerscroll duration-500 h-auto ${aboutus ? 'translate-up' : ''}`}>
              <div className={`footercont flex flex-col w-full items-center justify-between ${isMobile ? 'mt-2 h-[25vh] py-2' : 'h-[40vh] py-5'}`}>
                <h2 className={`text-white ${isMobile ? 'text-[5px]' : 'text-2xl'}`} onClick={emailsub}>Contact Us</h2>
                <div className={`flex justify-evenly items-center contactbox ${isMobile ? 'gap-2 h-[4vh]' : 'h-[10vh]'}`}>
                  <a href="https://www.instagram.com/fugin_guides?utm_source=qr&igsh=NnF2N3NiaGhiNHp3" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className={`instalogo ${isMobile ? 'h-[8vw] w-[8vw]' : 'h-[3vw] w-[3vw]'} text-white`} />
                  </a>
                  <div className="sep hidden md:block"></div>
                  <MdMail className={`${isMobile ? 'h-[8vw] w-[8vw]' : 'h-[3vw] w-[3vw]'} text-white`} />
                  <FancyInputForm emailsub={emailsub} />
                </div>
                <h2 onClick={moveup} className={`cursor-pointer text-white ${isMobile ? 'text-md mb-5 ' : 'text-2xl'}`}>About Us</h2>
              </div>
              <p className={`${isMobile ? ' px-4 leading-2 text-[10px]' : 'my-8 px-4 pb-12 text-base'} text-white`}>
                Welcome to Fugin Gaming Guides, your ultimate destination for mastering the virtual realms of Wuthering Waves. Join us as we delve into the depths of virtual worlds, decode complex game mechanics, and share our collective wisdom garnered through countless hours of gameplay. Let Fugin be your guide as you embark on unforgettable gaming experiences.
              </p>
            </div>
          </div>
          <Link to='/privacypolicy' className={`text-white mt-10 ${isMobile?'text-sm':'text-xl'}`}>© 2024 FuginGuides. All rights reserved.</Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
