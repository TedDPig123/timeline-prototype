import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Gallery() {
  const scrollContainer1 = useRef<HTMLDivElement | null>(null);
  const scrollContainer2 = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const scrollSpeed = 5;
      const delta = event.deltaY * scrollSpeed;

      gsap.to([scrollContainer1.current, scrollContainer2.current], {
        scrollLeft: (index) =>
          index === 0
            ? scrollContainer1.current?.scrollLeft + delta
            : scrollContainer2.current?.scrollLeft + delta,
        duration: 1,
        ease: 'power1.out',
      });
    };

    const container1 = scrollContainer1.current;
    const container2 = scrollContainer2.current;

    if (container1 && container2) {
      container1.addEventListener('wheel', handleWheel);
      container2.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (container1 && container2) {
        container1.removeEventListener('wheel', handleWheel);
        container2.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  useEffect(() => {
    const adjustThumbnailSize = () => {
      const scrollContainers = [scrollContainer1.current, scrollContainer2.current];

      scrollContainers.forEach((container) => {
        if (!container) return;

        const thumbnails = container.querySelectorAll('.thumbnail');
        const containerRect = container.getBoundingClientRect();
        const containerCenterX = containerRect.left + containerRect.width / 2;

        thumbnails.forEach((thumbnail) => {
          const thumbnailRect = thumbnail.getBoundingClientRect();
          const thumbnailCenterX = thumbnailRect.left + thumbnailRect.width / 2;
          const distance = Math.abs(containerCenterX - thumbnailCenterX);
          const maxDistance = containerRect.width / 2;

          //calculate scale based on the distance
          const scale = Math.max(0.6, Math.sin(1 - distance / maxDistance));
          const size = 250 * scale;

          //apply width and height based on scale
          thumbnail.style.width = `${size}px`;
          thumbnail.style.height = `${size}px`;
        });
      });
    };

    const handleScroll = () => {
      adjustThumbnailSize();
    };

    if (scrollContainer1.current) {
      scrollContainer1.current.addEventListener('scroll', handleScroll);
    }
    if (scrollContainer2.current) {
      scrollContainer2.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer1.current) {
        scrollContainer1.current.removeEventListener('scroll', handleScroll);
      }
      if (scrollContainer2.current) {
        scrollContainer2.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="flex flex-col w-[100vw] align-center">
      {/* top scroll */}
      <div className="gallery-wrap flex align-center items-center justify-center ml-[200px] mr-[200px]">
        <div
          ref={scrollContainer1}
          className="thumbnail-gallery flex items-end w-[100vw] overflow-x-scroll h-[36vh] pb-3"
        >
          <div className="items-end p-[10px] gap-[20px] grid grid-flow-col grid-cols-[auto auto auto auto auto auto auto]">
            {Array.from({ length: 13 }).map((_, index) => (
              <span
                key={index}
                className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"
              >
                <div className="z-3 w-[0.4rem] h-[275px] bg-black"></div>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* bottom scroll */}
      <div className="gallery-wrap flex align-center items-center justify-center ml-[200px] mr-[200px]">
        <div
          ref={scrollContainer2}
          className="thumbnail-gallery flex w-[100vw] overflow-x-scroll h-[36vh] pt-3"
        >
          <div className="p-[10px] gap-[20px] grid grid-flow-col grid-cols-[auto auto auto auto auto] ml-[135px] mr-[135px]">
            {Array.from({ length: 12 }).map((_, index) => (
              <span
                key={index}
                className="thumbnail h-[250px] w-[250px] bg-black flex flex-row justify-center align-center"
              >
                <div className="z-3 w-[0.4rem] h-[200px] bg-black mt-[-100px]"></div>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
