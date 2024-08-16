import Project from './project';

const projects = [
  {
    title: 'Sticks',
    description: 'Miro clone: offer the possibility to create plans and workflows and collaborate real time with other users within the same organization',
    previewImage: '/logo-sticks.svg',
    imageUrl: '/sticks-screen.png', 
    link: 'https://sticks-gamma.vercel.app/',
  },
  {
    title: 'Floating Lemons',
    description: 'Simple landing page created to practice with 3D object and learn about three.js and animation.',
    previewImage: '/lemons.png',
    imageUrl: '/lemons-screen.png', 
    link: 'https://floatinglemons.vercel.app/',
  },
  {
    title: 'GPlanner',
    description: 'Plan scheduling app',
    previewImage: '/moonbg.jpg',
    imageUrl: '/planner-screen.png',
    link: 'https://project2.com',
  },
  {
    title: 'Highwaytodev',
    description: 'Cars dodging mini-game',
    previewImage: '/moonbg.jpg',
    imageUrl: '/highway-screen.png', 
    link: 'https://project2.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl} 
              link={project.link}
              previewImage={project.previewImage} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
