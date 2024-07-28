import React from 'react';
import { useParams } from 'react-router-dom';
import { gsap } from "gsap"
import { useEffect ,useState } from 'react';
import Star from './Feature/star';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Teamcomp from './charinfo/Teamcomp';
import Resonance from './charinfo/Resonance';
import Weapon from './charinfo/Weapon';
import Skills from './charinfo/Skills';
import Echos from './charinfo/Echos';
import Sidebar from './charinfo/sidebar'; 

gsap.registerPlugin(ScrollTrigger);

const elementGradients = {
    fusion: 'linear-gradient(rgb(255, 255, 138) , rgb(115, 17, 8))',
    spectro: ' linear-gradient(white,rgb(211, 227, 27))',
    havoc: 'linear-gradient(45deg, #7F7FD5, #86A8E7, #91EAE4)',
    aero: 'linear-gradient(rgb(225, 235, 234) , rgb(10, 53, 60))',
    glacio:'linear-gradient(#ffffff , rgb(30, 126, 141))',
    electro:'linear-gradient( #ffffff, #a250bb)'
};

const Charinfo = ({ charData, weapons, allEchoes, allSonata}) => {
    const [isMobile, setIsPhone] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsPhone(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
       
    const getRandomDuration = () => {
        const durations = [0.5, 1, 3];
        return durations[Math.floor(Math.random() * durations.length)];
    };

    const [hbdAnimate, sethbdAnimate] = useState(false);

    const hbdClick = () => {
        sethbdAnimate(!hbdAnimate);
    };

    useEffect(() => {
        const duration1 = getRandomDuration();
        const duration2 = getRandomDuration();
        const duration3 = getRandomDuration();

        const tl = gsap.timeline();
        tl.to('.hbdface', { duration: duration1, y:isMobile?100:150 ,opacity:1})
            .to('.hbdface', { duration: duration2 })
            .to('.hbdface', { duration: duration3, y: 0});

        return () => {
            tl.kill();
        };
    }, [hbdAnimate]);

    const { param } = useParams();
    const character = charData.find(char => char.name === param);

    if (!character) {
        return <div>Character not found</div>;
    }

    useEffect(() => {
        gsap.fromTo('.mainphoto', { opacity: 0 }, { opacity: 1, duration: 2 });
        gsap.fromTo('.slace', { opacity: 0 }, { opacity: 1 });
        gsap.fromTo('.intro', { opacity: 0, x: -400 }, { opacity: 1, x: 0 });
        gsap.to('.charintro', {
            y:isMobile?-750: -500,
            ease: 'none',
            scrollTrigger: {
                trigger: '.charintro',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 2,
            },
        });
        gsap.to('.chartop', {
            scale: 1.4,
            y: 300,
            x: -200,
            scrollTrigger: {
                trigger: '.charintro',
                start: 'top center',
                end: 'bottom center',
                scrub: 1,
            }
        });
    }, [param]);

    const charrole = ['Dps', 'Sub-Dps', 'Support'];
    const ascenval = ['8', '8', '12', '4'];

    const splitName = (name) => {
        const parts = name.split(' ');
        return parts.length > 1 ? (
            <>
                {parts[0]} <span className="surnamemain">{parts.slice(1).join(' ')}</span>
            </>
        ) : (
            name
        );
    };

    return (
        <>
            <div className={`flex h-screen w-screen relative ${isMobile ? '' : ''}`} id='up'>
                <img src={character.rarity === 4 || character.name === 'rover' || character.name === 'rover (havoc)'
                    ? `/characters/${param}/top.webp`
                    : `/characters/${param}/full.webp`
                } alt="" className={`${character.rarity === 4 || character.name === 'rover' || character.name === 'rover (havoc)' ? isMobile ? 'h-[70vh] top-[10vh]' : 'h-[110vh] right-[10vw]' : isMobile ? 'w-screen h-[80vh]' : 'h-[100vh]  w-[64%]'} object-cover absolute right-0 top-0 bottom-0 -z-10 mainphoto`} />
                <div className='slace -z-20'></div>
                <img src={`/elements/${character.element}.webp`} alt="" className='elemsym h-[60vh] aspect-square absolute left-[12vw] top-[20vh] z-10' />
                <div className="mainintro absolute top-[20vh] w-[35vw] h-auto left-[10vw] leading-tight ">
                    <Star num={character.rarity} />
                    <h2 className="name tracking-tighter" style={{
                        background: elementGradients[character.element],
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>{splitName(param)}</h2>
                    <h3 className="dilogue text-white">{character.intro}</h3>
                </div>
            </div>

            <div className="charintro w-screen h-[100vh] bg-zinc-950 flex flex-col px-8 pt-12 items-center absolute z-40 overflow-hidden" id='overview'>
                <img src={`/region/${character.region}.webp`} alt="" className={`absolute h-[40vh] -z-20 left-[15vw] ${isMobile ? 'bottom-0 w-full' : ''}`} />
                <img src={`/characters/${param}/top.webp`} alt="" className={`object-cover chartop z-10 absolute left-4 ${isMobile ? 'h-[55vh]' : 'h-[85vh] '}`} />
                <div className="bgrect absolute h-[100vh] w-[12vw] bg-zinc-800 top-0 left-[6vw] -z-10"></div>
                <h1 className='title'>Overview</h1>
                <div className={`overbox  w-[59vw]  rounded-xl relative flex gap-[1vw] ${isMobile ? 'h-[45vh] w-[95vw] flex-col' : 'h-[23vw] ml-[25vw]'}`}>
                    <div className={`hbdface absolute rotate-180 bottom-2 right-2 -z-10   overflow-hidden ${isMobile ? ' right-[0vw] bottom-[0vh] h-[28vw] w-[43vw]' : ' h-[10vw] w-auto '}`}><img src={`/characters/${param}/main.webp`} alt="" className='h-[220%] object-cover ' /></div>
                    <div className={`flex  gap-[1vw]  h-full flex-col ${isMobile ? 'w-screen' : 'w-[61.01%]'}`}>
                        <div className={`flex gap-[1vw]  w-full ${isMobile ? 'h-[8vh]' : 'h-[8vw]'}`}>
                            <div className={`oglass  flex flex-col gap-3 items-center ${isMobile ? 'h-[8vh] w-[50vw]' : 'h-full w-[15vw]'}`}>
                                <h1 className={`text-white h-[40%] ${isMobile?'text-lg':'text-2xl'}`}>Rarity</h1>
                                <Star num={character.rarity} />
                            </div>
                            <div className={`oglass  relative flex  justify-between  overflow-hidden  ${isMobile ? 'h-[8vh] w-[44vw] pl-4' : 'h-full px-4 w-[20vw]'}`}>
                                <div className={`absolute bg-neutral-950 rotate-[30deg] z-10 border-r-2 border-white ${isMobile ? ' h-[25vh] w-[32vw]  left-[-7vh] top-[-8vh]' : ' h-[14vw] w-[12vw]  left-[-2vw] top-[-4vw]'}`}></div>
                                <div className="elem flex-col flex items-center z-20 h-full w-[40%]">
                                    <h2 className={` uppercase text-white ${isMobile ? 'text-[10px]' : 'text-xl'}`}>{character.element}</h2>
                                    <img src={`/elements/${character.element}.webp`} alt="" className={`${isMobile ? 'h-[65%]' : 'h-[60%]'}`} />
                                </div>
                                <div className={`oweapon flex-col items-center justify-end flex h-full ${isMobile ? 'w-[40vw]' : ' w-[40%]'}`}>
                                    <img src={`/symbols/${character.weapon}.webp`} alt="" className={`${isMobile ? 'h-[65%]' : 'h-[60%]'}`} />
                                    <h2 className={` uppercase text-white ${isMobile ? 'text-[10px]' : 'text-xl'}`}>{character.weapon}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-[1vw] h-[14vw] w-full">
                            <div className={`oglass flex flex-col justify-between items-center relative ${isMobile ? 'w-[70vw] h-[16vh]' : 'w-[22vw] h-full'}`}>
                                {charrole.map((val, key) => (
                                    <div className={`role rounded-lg relative flex flex-col items-center ${isMobile ? 'w-[70%] h-[30%]' : ' w-[12vw] h-[4vw]'}`} style={{left: isMobile?`${(key-1)*12}%`:`${(key-1)*24}%`}}>
                                        <h4 className={`text-white h-[30%] ${isMobile ? 'text-[10px]' : ' text-xl'}`}>{val}</h4>
                                        <h3 className='text-white text-2xl h-[70%]'>{character.combatrole[key]}</h3>
                                        <h3 className={`absolute bg-white px-2 rounded-md -bottom-[1vw] left-[-1vw] border-neutral-950 border-2 grid place-content-center ${isMobile ? 'w-[40%] h-[60%] text-[8px]' : ''} ${character.combatrole[3] === key ? '' : 'hidden'}`}>Best Role</h3>
                                    </div>
                                ))}
                            </div>
                            <div className={`oglass relative  hbd ${isMobile ? 'w-[24vw] h-[16vh]' : 'w-[13vw] h-full'}`} onClick={hbdClick}>
                                <img src="/background/hbd.webp" alt="" className='object-cover h-full rounded-lg' />
                                <h2 className={` absolute text-center ${isMobile ? 'bottom-14 text-[13px] left-[50%] -translate-x-1/2 w-[90%]' : 'text-2xl'}`}>{character.hbd}</h2>
                            </div>
                        </div>
                    </div>
                    <div className={`oglass  w-[22vw] flex  items-center relative flex-col ${isMobile ? 'w-[95vw] justify-start gap-4 h-[37vh] flex-wrap ' : ' h-full'}`}>
                        <h1 className={` text-white  grid place-content-center ${isMobile ?'top-1 text-center text-sm left-[50%] w-[80%] ' : ' absolute text-xl top-[-2vw] w-[22vw]'}`}>Ascension Material</h1>
                        <div className={`flex  items-center ${isMobile?'gap-6':'flex-col'}`}>
                        <div className="coin ascenbox h-[7vw] w-[7vw] flex flex-col items-center">
                            <img src="/items/coin.webp" alt="" className='h-[80%]' />
                            <h2>Credit Shell</h2>
                            <h3>170,000</h3>
                        </div>
                        <div className={`flower flex justify-center ${isMobile ? 'gap-6' : ' gap-10'}`}>
                            <div className="ascenbox"><img src={`/items/${character.ascension[0]}.webp`} alt="" />
                                <h2>{character.ascension[0]}</h2>
                                <h3>46</h3></div>
                            <div className="ascenbox"><img src={`/items/${character.ascension[1]}.webp`} alt="" />
                                <h2>{character.ascension[1]}</h2>
                                <h3>60</h3></div>
                                </div>
                        </div>
                        <div className={`flex ${isMobile ? 'gap-6' : ''}`}>
                            {[...Array(4)].map((_, i) => (
                                <div className="ascenbox h-[7vw] flex flex-col items-center">
                                    <img src={`/items/${character.ascension[i + 2]}.webp`} alt="" className='h-[80%]' />
                                    <h2 className='text-sm'>{character.ascension[i + 2]}</h2>
                                    <h3 className=''>{ascenval[i]}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="hide w-screen h-[50vh]"></div>
            <Weapon character={character} name={param} weapons={weapons} />
            <Echos character={character} allEchoes={allEchoes} allSonata={allSonata} />
            <Skills character={character} name={param} />
            <Resonance character={character} name={param} />
            <div className="sep h-[1px] w-screen bg-slate-50"></div>
            <Teamcomp character={character} name={param} />
            <Sidebar className='fixed rounded-full' />
        </>
    );
};

export default Charinfo;
