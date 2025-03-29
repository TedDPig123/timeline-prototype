import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import Timeline from './timeline-bar';

export default function Gallery() {
  const scrollContainer1 = useRef(null);
  const scrollContainer2 = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      const scrollSpeed = 10;
      const delta = event.deltaY * scrollSpeed;

      gsap.to([scrollContainer1.current, scrollContainer2.current], {
        scrollLeft: (index) => index === 0 ? scrollContainer1.current.scrollLeft + delta : scrollContainer2.current.scrollLeft + delta,
        duration: 0.8,
        ease: "power1.out",
      });
    };

    const container1 = scrollContainer1.current;
    const container2 = scrollContainer2.current;
    container1.addEventListener('wheel', handleWheel);
    container2.addEventListener('wheel', handleWheel);

    return () => {
      container1.removeEventListener('wheel', handleWheel);
      container2.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className='flex flex-col w-[100vw] align-center'>
    
    {/* top scroll */}
      <div className="gallery-wrap flex align-center items-center justify-center ml-[100px] mr-[100px]">
        <div ref={scrollContainer1} className="thumbnail-gallery flex items-center w-[100vw] overflow-x-scroll h-[36vh] pb-3">
          <div className="p-[10px] gap-[20px] grid grid-flow-col grid-cols-[auto auto auto auto auto auto auto]">
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[275px] bg-black'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[275px] bg-black'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[275px] bg-black'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[275px] bg-black'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[275px] bg-black'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[275px] bg-black'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[275px] bg-black'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[275px] bg-black'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[275px] bg-black'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[275px] bg-black'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[275px] bg-black'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[275px] bg-black'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[275px] bg-black'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[275px] bg-black'></div></span>
          </div>
        </div>
      </div>

    {/* bottom scroll */}
      <div className="gallery-wrap flex align-center items-center justify-center ml-[100px] mr-[100px]">
        <div ref={scrollContainer2} className="thumbnail-gallery flex items-center w-[100vw] overflow-x-scroll h-[36vh] pt-3">
          <div className="p-[10px] gap-[20px] grid grid-flow-col grid-cols-[auto auto auto auto auto] ml-[135px] mr-[135px]">
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[270px] bg-black mt-[-100px]'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[270px] bg-black mt-[-100px]'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[270px] bg-black mt-[-100px]'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[270px] bg-black mt-[-100px]'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[270px] bg-black mt-[-100px]'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[270px] bg-black mt-[-100px]'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[270px] bg-black mt-[-100px]'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[270px] bg-black mt-[-100px]'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[270px] bg-black mt-[-100px]'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[270px] bg-black mt-[-100px]'></div></span>
            <span className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"><div className='z-3 w-[0.4rem] h-[270px] bg-black mt-[-100px]'></div></span>
          </div>
        </div>
      </div>

    </div>
  );
}
