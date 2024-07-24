import React , {useState, useEffect} from 'react';

const Sidebar = () => {
    const sideBtnNames = ['overview', 'weapon',  'echoes', 'skills','resonance', 'team'];
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);


    const scrollToSection = (id) => {
   
        if (id === 'overview') {

            const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
            const targetPosition =isMobile? vh*0.78 : vh * 0.735;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });

        } else {
            const element = document.getElementById(id);
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className={`sidescrollbar flex md:justify-between justify-start items-center md:h-[60vh] h-[4vh] md:w-[4vw] w-screen md:right-3 bottom-0 md:top-[50%] md:-translate-y-[50%] z-50 fixed rounded-full md:flex-col flex-row`}>
                {sideBtnNames.map((name, index) => (
                    <div key={index} onClick={() => scrollToSection(name)} className="sidebarbtn flex justify-center md:h-[7vh] h-full gap-0 items-center md:w-[7vh] w-full relative">
                        <div className="sidebarname top-[0px] text-gray-100 md:opacity-0 capitalize md:text-xl text-[10px] absolute md:right-[8vh] opacity-100 md:translate-x-0 pointer-events-none rounded-full bg-neutral-800 py-2 px-4">{name}</div>
                        <img src={`/symbols/${name}.svg`} alt="" className='md:h-[4vh] h-[2vh]' />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Sidebar;
