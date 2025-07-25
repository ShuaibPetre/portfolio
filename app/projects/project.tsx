'use client';

const projects = [
  {
    title: "Personal Portfolio",
    description: "A modern developer portfolio built with Next.js and Tailwind CSS.",
    github: "https://github.com/ShuaibPetre/portfolio",
    live: "https://shuaibpetre.com",
  },
  {
    title: "React CV Generator",
    description: "A resume builder that exports your CV as a PDF document.",
    github: "https://github.com/ShuaibPetre/React-CV",
    live: "",
  },
  {
    title: "Preacher's lecture player",
    description: "A one-page react App that can play, sort, filter and search sermons. Has a player to see and select track progress.",
    github: "https://github.com/ShuaibPetre/assignment20-07",
    live: "https://weather.shuaibpetre.com",
  },
  {
    title: "Personal Training website",
    description: "Next.js website for personal training. 100 lighthouse speed score. Integrates with Google Maps API to check if client is in service area.",
    github: "",
    live: "https://www.shuaibpetre.co.za/",
  },
  {
    title: "Online eCommerce store",
    description: "Fruit & veg sales store with Payfast integration. Built with WordPress.",
    github: "",
    live: "https://thepetredish.co.za/",
  },
  {
    title: "Battleships Game",
    description: "A JavaScript-based Battleship game featuring randomized AI ship placement and a turn-based strategy UI.",
    github: "https://github.com/ShuaibPetre/BattleshipGame",
    live: "",
  },
  {
    title: "Etch-A-Sketch",
    description: "A dynamic Etch-a-Sketch clone built with vanilla JavaScript — draw with your cursor, customize colors, and reset the grid on demand.",
    github: "https://github.com/ShuaibPetre/etch-a-sketch",
    live: "",
  },
  {
    title: "ToDo List",
    description: "A simple Todo Javascript App that uses localstorage.",
    github: "https://github.com/ShuaibPetre/todo_List",
    live: "",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-200 bg-[url('/bg2.svg')] bg-fixed bg-no-repeat bg-cover px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-teal-400 mb-12">Projects</h1>

      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col md:flex-row bg-white/80 rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Placeholder image block */}
            <div className="md:w-1/3 w-full h-48 md:h-auto bg-gray-300 flex items-center justify-center text-gray-500 text-sm">
              Screenshot coming soon
            </div>

            {/* Info section */}
            <div className="md:w-2/3 w-full p-6">
              <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
              <p className="text-gray-700 mt-2 mb-4">{project.description}</p>
              <div className="flex gap-6 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500 hover:underline"
                  >
                    Live Site
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
