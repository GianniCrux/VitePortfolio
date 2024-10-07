import PropTypes from 'prop-types';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaCloud, FaCube } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux, SiPrisma } from 'react-icons/si';
import { GiCubes } from 'react-icons/gi';
import { useRef, useEffect, useState } from 'react';

const TechIcon = ({ Icon, name }) => (
  <div className="flex flex-col items-center p-2 w-20 flex-shrink-0">
    <Icon className="text-xl md:text-2xl lg:text-3xl mb-1 text-amber-500" />
    <span className="text-xs md:text-sm text-black font-sans">{name}</span>
  </div>
);

TechIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
};

export default function AboutMe() {
  const technologies = [
    { Icon: FaHtml5, name: 'HTML5' },
    { Icon: FaCss3, name: 'CSS' },
    { Icon: FaJs, name: 'JavaScript' },
    { Icon: FaReact, name: 'React' },
    { Icon: SiNextdotjs, name: 'Next.js' },
    { Icon: FaNodeJs, name: 'Node.js' },
    { Icon: SiTailwindcss, name: 'Tailwind' },
    { Icon: SiTypescript, name: 'TypeScript' },
    { Icon: SiRedux, name: 'Redux' },
    { Icon: FaPython, name: 'Python' },
    { Icon: SiPrisma, name: 'Prisma' },
    { Icon: FaCloud, name: 'Convex' },
    { Icon: FaCube, name: 'R3F' },
    { Icon: GiCubes, name: 'Three.js' },
  ];

  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        carousel.scrollLeft += 1;
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
          carousel.scrollLeft = 0;
        }
      }, 15); 
    };

    startAutoScroll();

    const stopAutoScroll = () => clearInterval(scrollInterval);

    carousel.addEventListener('mouseenter', stopAutoScroll);
    carousel.addEventListener('mouseleave', startAutoScroll);

    return () => {
      clearInterval(scrollInterval);
      carousel.removeEventListener('mouseenter', stopAutoScroll);
      carousel.removeEventListener('mouseleave', startAutoScroll);
    };
  }, []);


  return (
    <section id="about" className="py-10 bg-amber-300 text-black min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 relative max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-black tracking-tighter font-playfair mb-6">About me</h2>
          <div>
            <p className="tracking-tighter text-black mb-4 font-sans text-sm md:text-base">
              As a dedicated web developer, I specialize in crafting user-centric, visually appealing websites with a strong focus on efficiency and scalability. Leveraging my expertise in React, Next.js, and modern web technologies, I build applications that not only meet high performance standards but also deliver a seamless user experience.
            </p>
            <p className="tracking-tighter text-black font-sans text-sm md:text-base">
            Beyond coding, I&apos;m an avid gamer and film enthusiast who thrives on adventures and challenges. My love for trekking and animals keeps me connected to nature, and I always aim to foster an inclusive environment where everyone feels at home. I&apos;m passionate about continuously evolving as a developer, embracing new technologies, and creating solutions that make a meaningful impact.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <div 
            className="overflow-hidden bg-yellow-100 bg-opacity-50 rounded-lg p-4"
            onMouseDown={startDragging}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onMouseMove={onDrag}
          >
            <h3 className="text-2xl md:text-3xl text-black tracking-tighter text-center font-playfair mb-4">Technologies i work with</h3>
            <div 
              ref={carouselRef}
              className="flex overflow-x-hidden"
            >
              {[...technologies, ...technologies, ...technologies, ...technologies, ...technologies, ...technologies, ...technologies, ...technologies, ...technologies, ...technologies].map((tech, index) => (
                <TechIcon key={index} Icon={tech.Icon} name={tech.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}