import Project from "./project";

const projects = [
  {
    title: 'Sticks',
    description: 'Miro clone: offer the possibility to create plans and workflows and collaborate real time with other users within the same organization',
    previewImage: '/logo-sticks.svg',
    link: 'https://sticks-gamma.vercel.app/',
    /* previewImage: '/sticks-screen.png' */
  },
  {
    title: 'GPlanner',
    description: 'Plan scheduling app',
    previewImage: '/moonbg.jpg',
    link: 'https://project2.com',
    /* previewImage: '/moonbg.jpg' */
  },
  {
    title: 'Highwaytodev',
    description: 'Cars dodging mini-game',
    previewImage: '/moonbg.jpg',
    link: 'https://project2.com',
    /* previewImage: '/moonbg.jpg' */
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-white text-black dark:bg-black dark:text-white py-16">
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            previewImage={project.previewImage}
          />
        ))}
      </div>
    </div>
    </section>
  );
}
