import Project from './project';

const projects = [
  {
    title: 'Sticks',
    description: 'Miro clone: offer the possibility to create plans and workflows and collaborate real time with other users within the same organization',
    previewImage: '/logo-sticks.svg',
    imageUrl: '/sticks-screen.png', 
    link: 'https://sticks-gamma.vercel.app/',
    passkey: 'testuser: mario+clerk_test@example.com password: 12345678'
  },
  {
    title: 'Floating Lemons',
    description: 'Floating Lemons is an interactive landing page that showcases floating 3D objects and animations. Built with React Three Fiber and Three.js, this project leverages libraries like "@react-three/drei" for 3D components and "styled-components" for styling. The page is designed to explore 3D environments and animations, inspired by sites like playful.software and bananas.vercel.app. ',
    previewImage: '/lemons-screen.png',
    imageUrl: '/lemons.png', 
    link: 'https://floatinglemons.vercel.app/',
  },
  {
    title: 'GPlanner',
    description: 'GPlanner is an advanced plan scheduling application designed with React, Next.js, and Tailwind CSS. It offers an interactive calendar experience using "react-big-calendar". The app integrates "clerk-react" for seamless authentication while data management and serverless data operations are supported by Convex. The setup includes robust support for development, building, and linting  to ensure a seamless development experience.',
    previewImage: '/gplanner-screen.png',
    imageUrl: '/gplanner-screen.png',
    link: 'https://project2.com',
  },
  {
    title: 'Highwaytodev',
    description: 'Cars dodging mini-game',
    previewImage: '/highway-screen.png',
    imageUrl: '/highway-screen.png', 
    link: 'https://project2.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-black text-white py-8 font-lora">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font text-center mb-8 text-blue-600">PROJECTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16 justify-items-center">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl} 
              link={project.link}
              previewImage={project.previewImage} 
              passkey={project.passkey}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
