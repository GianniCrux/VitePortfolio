import Project from './project';

const projects = [
  {
    title: 'Sticks',
    description: 'Miro clone: offer the possibility to create plans and workflows and collaborate real time with other users within the same organization',
    previewImage: '/logo-sticks.svg',
    imageUrl: '/sticks-screen.png', 
    width:"w-[60%]",
    link: 'https://sticks-gamma.vercel.app/',
    passkey: `testuser1: mario+clerk_test@example.com password: 12345678
testuser2: marzia+clerk_test@example.com password: 12345678`
  },
  {
    title: 'Floating Lemons',
    description: 'Floating Lemons is a landing page featuring interactive floating 3D objects and animations, built with React Three Fiber and Three.js. It offers an immersive exploration of 3D environments.',
    previewImage: '/lemons-screen.png',
    imageUrl: '/lemons.png', 
    width:"w-[100%]",
    link: 'https://floatinglemons.vercel.app/',
  },
/*   {
    title: 'GPlanner',
    description: 'GPlanner is an advanced plan scheduling application designed with React, Next.js, and Tailwind CSS. It offers an interactive calendar experience using "react-big-calendar". The app integrates "clerk-react" for seamless authentication while data management and serverless data operations are supported by Convex. The setup includes robust support for development, building, and linting  to ensure a seamless development experience.',
    previewImage: '/plannerLogo.svg',
    imageUrl: '/gplanner-screen.png',
    width:"w-[50%]",
    link: 'https://project2.com',
  },
  {
    title: 'Highwaytodev',
    description: 'Cars dodging mini-game',
    previewImage: '/highway-screen.png',
    imageUrl: '/highway-screen.png', 
    width:"w-full",
    link: 'https://project2.com',
  }, */
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-black text-white py-16 font-lora">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-amber-600">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 auto-rows-fr gap-x-20 cursor-">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl} 
              link={project.link}
              previewImage={project.previewImage} 
              passkey={project.passkey}
              width={project.width}
            />
          ))}
        </div>
      </div>
    </section>
  );
}