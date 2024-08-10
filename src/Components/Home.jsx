import React, { useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/fuginlogo.png';
import gsap from 'gsap';

const Home = ({latestChar, allWeapon , allEchoes}) => {
  const random = () => Math.floor(Math.random() * 3) + 1;

    const viewnew = (id) => {
      const element = document.getElementById(id);
            element.scrollIntoView({ behavior: 'smooth' });
    }
    const charitmes=[0,1,5]

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  useEffect(() => {
    gsap.fromTo(".show", 
      {
        opacity: 0,
        scale: 0.2,
        rotationX: 145,
        rotationY: 145,
        x: 100, 
        y: 200, 
      },
      {
        opacity: 1,
        scale: 1,
        rotationX: 0,
        rotationY: 0,
        x: 0,
        y: 0,
        stagger: 0.1,
        duration: 0.5
      }
    );
  }, []);

  return (
    <>
      <div className="homepage h-screen w-screen flex items-center relative overflow-hidden px-8 gap-3">
        <div className="hwholecont pl-2 flex flex-col ">
          <Link to='/'>
          <img className='h-[10vw] w-[10vw] homelogo' src={logo} alt="" /></Link>
          <div className="stripe h-[40vh] w-[120vw] absolute top-[40vh] left-[-30vw] -z-10 rotate-45"></div>
          <div className="hcont text-white mt-3 w-[50vw] h-[full] leading-tight tracking-tighter">
            <h2 className='realtext text-center'>Master the Game with Style</h2>
            <h2 className=' absolute z-40 shadetext text-center'>Master the Game with Style</h2>
            <h4 className='w-[45vw] text-lg hometag'>
              Elevate your gameplay with our beautifully crafted guides. Discover expert strategies and tips, all presented with elegance and style. Master every challenge with ease and sophistication.
            </h4>
          </div>
          <div className="hbtn flex justify-start gap-3 mt-4">
            <Link to={`/WW/Guide`} className='btn'>View Guide</Link>
            <button className='btn' onClick={()=>viewnew('newchar')}>Check New</button>
          </div>
        </div>

        <div className="h-[63vh] w-[80vw] mainshow rounded-3xl flex flex-wrap justify-center items-center gap-4">
          {[...Array(7)].map((_, i) => {
            const randomNumber = random();
            const isGif = [0, 4, 5].includes(i);
            const extension = isGif ? 'gif' : 'webp';

            return (
              <div key={i} className={`show ${i === 0 ? 'show1' : ''} h-[20vh] w-[20vh] bg-white flex items-center justify-center`}>
                <img
                  src={i === 3 ? '/ww/random/centerimg.webp' : `/ww/random/${i+1}/${randomNumber}.${extension}`}
                  alt=""
                  className='h-full w-full object-cover rounded-xl'
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={`h-[100vh] overflow-hidden w-screen relative flex ${isMobile ? 'flex-col justify-start' : 'flex-row'}`} id="newchar">
  <img
    src={`ww/characters/${latestChar.name}/main.webp`}
    alt=""
    className={`absolute  object-cover z-10 ${isMobile ?' bottom-[-2%] right-0 w-[100vw] h-[80vh]' : 'h-[120vh] right-[20vw] bottom-[-5vw]'}`}
  />

  <div className="left h-full w-full md:w-[65%] relative">
    <img
      src={`ww/characters/${latestChar.name}/full.webp`}
      alt=""
      className={`opacity-30 object-cover ${isMobile ? 'w-[150vh] absolute h-[100vh]' : 'w-full h-full'}`}
    />
    <div className={`latestcont bottom-0 left-0 flex flex-col items-center justify-around ${isMobile ? 'w-full gap-10 mt-8' : 'absolute w-[75%] h-[70%]'}`}>
      <div className="flex items-end">
        <span className={`latestintro z-20 text-white uppercase ${isMobile ? 'text-[48px] md:text-[72px]' : 'text-[100px]'}`}>{latestChar.name}'s</span>
        <span className='text-white text-[24px] md:text-[40px] -translate-x-4 md:-translate-x-14 translate-y-2 md:translate-y-5'>Guide</span>
      </div>
      <Link
        className={`latestbtn bg-white relative text-xl md:text-2xl hover:translate-y-3 duration-200 z-30 rounded-2xl text-center grid place-content-center ${isMobile ? 'h-[8vh] w-[60vw]' : 'h-[6vw] w-[18vw]'}`}
        to={`/WW/Guide/${latestChar.name}`}
      >
        View Now
        {charitmes.map((val, key) => (
          <img src={`/ww/items/${latestChar.ascension[val]}.webp`} alt="" className={`absolute btnitem${key + 1} duration-300 opacity-0 btnitem`} />
        ))}
      </Link>
    </div>
  </div>

  <div className={`latestright w-[40vw] md:w-[35%] h-full flex gap-10 z-20 ${isMobile ? 'justify-center items-end py-10 h-[30vh] w-screen' : 'flex-col items-start justify-center px-[7vw]'}`}>
    <img src={`ww/weapon/${allWeapon[latestChar.weapons[0]].name}.webp`} alt="" className='h-[16vh] w-[16vh] md:h-[21vh] md:w-[21vh] z-20 object-contain aspect-square bg-neutral-900 duration-200 rounded-[25px] hover:-rotate-12 hover:scale-110' />
    <img src={`ww/echoes/${allEchoes[latestChar.echobest[0]].name}.webp`} alt="" className='h-[12vh] w-[12vh] md:h-[21vh] md:w-[21vh] z-20 object-contain aspect-square bg-neutral-900 duration-200 rounded-[25px] hover:rotate-12 hover:scale-110' />
  </div>
</div>


    </>
  );
}

export default Home;
