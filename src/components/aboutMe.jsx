import PropTypes from 'prop-types';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaCloud } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux, SiPrisma } from 'react-icons/si';

const TechIcon = ({ Icon, name }) => (
  <div className="flex flex-col items-center p-2">
    <Icon className="text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-2 text-blue-500" />
    <span className="text-xs md:text-sm text-white font-lora">{name}</span>
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
  ];

  return (
    <section id="about" className="py-10 bg-black text-black min-h-screen flex items-center">
      <div className="container mx-auto px-4 relative">
        <div className="absolute hidden lg:block top-0 left-1/2 bottom-0 w-px bg-white"></div>
        
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 space-y-4 lg:space-y-0">
          <h2 className="text-2xl md:text-3xl text-blue-600 tracking-tighter text-center lg:text-left font-playfair">ABOUT ME</h2>
          <h3 className="hidden lg:block text-2xl md:text-3xl text-blue-500 tracking-tighter text-center lg:text-right font-playfair">TECHNOLOGIES I WORK WITH</h3>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          <div className="lg:w-1/2 max-w-2xl mx-auto lg:mx-0">
            <p className="tracking-tighter text-white mb-4 font-lora text-sm md:text-base">
              I&apos;m a passionate web developer with a keen interest in creating user-friendly and visually appealing websites. With expertise in React, Next.js, and modern web technologies, I strive to build efficient and scalable applications that make a positive impact.
            </p>
            <p className="tracking-tighter text-white font-lora text-sm md:text-base">
              Besides developing, I love playing video games, film, adventures, and challenges. I enjoy trekking, love animals, and always try to create a good and comfortable environment so everyone can feel at home!
            </p>
          </div>
          
          <div className="lg:hidden w-full my-8">
            <div className="h-px bg-white w-full"></div>
            <h3 className="text-2xl md:text-3xl text-blue-500 tracking-tighter text-center mt-8 font-playfair">Technologies I Work With</h3>
          </div>
          
          <div className="lg:w-1/2 max-w-2xl mx-auto lg:mx-0">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 md:gap-4">
              {technologies.map((tech, index) => (
                <TechIcon key={index} Icon={tech.Icon} name={tech.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}