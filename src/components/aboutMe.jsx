import PropTypes from 'prop-types';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaCloud } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux, SiPrisma } from 'react-icons/si';

const TechIcon = ({ Icon, name }) => (
  <div className="flex flex-col items-center p-2">
    <Icon className="text-4xl mb-2 text-blue-500" />
    <span className="text-xs text-white">{name}</span>
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
    <section id="about" className="py-10 bg-black text-black min-h-screen flex items-center content-center">
      <div className="container mx-auto px-4 relative">

        <div className="absolute hidden md:block top-0 left-1/2 bottom-0 w-[2px] bg-white -translate-x-1/2"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <h2 className="text-3xl text-blue-600 font-bold tracking-tighter text-center md:text-left">ABOUT ME</h2>
          <h3 className="hidden md:block text-2xl font-bold text-blue-500 tracking-tighter text-center md:text-right">Technologies I Work With</h3>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="md:w-1/2">
            <p className="tracking-tighter text-white mb-4">
              I&apos;m a passionate web developer with a keen interest in creating user-friendly and visually appealing websites. With expertise in React, Next.js, and modern web technologies, I strive to build efficient and scalable applications that make a positive impact.
            </p>
            <p className="tracking-tighter text-white">
              Besides developing, I love playing video games, film, adventures, and challenges. I enjoy trekking, love animals, and always try to create a good and comfortable environment so everyone can feel at home!
            </p>
          </div>
          
          <div className="md:hidden w-full my-8">
            <div className="h-[2px] bg-white w-full"></div>
            <h3 className="text-2xl font-bold text-blue-500 tracking-tighter text-center mt-8">Technologies I Work With</h3>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
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