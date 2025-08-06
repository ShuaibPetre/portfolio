'use client';
import Image from 'next/image'
import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Portfolio",
    description: "A modern developer portfolio built with Next.js and Tailwind CSS.",
    github: "https://github.com/ShuaibPetre/portfolio",
    live: "https://shuaibpetre.co.za",
    img: "/laptops/8.png"
  },
  {
    title: "React CV Generator",
    description: "A resume builder that exports your CV as a PDF document.",
    github: "https://github.com/ShuaibPetre/React-CV",
    live: "",
    img: "/laptops/3.png"
  },
  {
    title: "Preacher's lecture player",
    description: "A one-page react App that can play, sort, filter and search sermons. Has a player to see and select track progress.",
    github: "https://github.com/ShuaibPetre/assignment20-07",
    live: "",
    img: "/laptops/7.png"
  },
  {
    title: "Personal Training website",
    description: "Next.js website for personal training. 100 lighthouse speed score. Integrates with Google Maps API to check if client is in service area.",
    github: "https://github.com/ShuaibPetre/travellingtrainers",
    live: "https://mysite1-blond.vercel.app/",
    img: "/laptops/5.png"
  },
  {
    title: "Online eCommerce store",
    description: "Live fruit & veg sales store with Payfast integration. Built with WordPress.",
    github: "",
    live: "https://thepetredish.co.za/",
    img: "/laptops/4.png"
  },
  {
    title: "Online eCommerce fakestore",
    description: "Fakestore created using React.js and a free API.",
    github: "https://github.com/ShuaibPetre/shopping-cart",
    live: "",
    img: "/laptops/1.png"
  },
  {
    title: "Battleships Game",
    description: "A JavaScript-based Battleship game featuring randomized AI ship placement and a turn-based strategy UI.",
    github: "https://github.com/ShuaibPetre/BattleshipGame",
    live: "",
    img: "/laptops/6.png"
  },
  {
    title: "Etch-A-Sketch",
    description: "A dynamic Etch-a-Sketch clone built with vanilla JavaScript — draw with your cursor, customize colors, and reset the grid on demand.",
    github: "https://github.com/ShuaibPetre/etch-a-sketch",
    live: "",
    img: "/laptops/2.png"
  },
  {
    title: "ToDo List",
    description: "A simple Todo Javascript App that uses localstorage.",
    github: "https://github.com/ShuaibPetre/todo_List",
    live: "",
    img: "/laptops/9.png"
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-200 bg-[url('/bg2.svg')] bg-fixed bg-no-repeat bg-cover px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-teal-600 mb-16 text-center"
      >
        Projects
      </motion.h2>

      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col md:flex-row bg-transparent overflow-hidden"
          >
            {/* Image section */}
            <Image
              src={project.img}
              alt="Screenshot of project"
              width={600}
              height={350}
              className="object-cover"
            />

            {/* Info section */}
            <div className="md:w-2/3 w-full p-6 flex flex-col">
              <div>
                <h2 className="text-2xl font-bold text-black">{project.title}</h2>
                <p className="text-gray-700 mt-2 mb-4">{project.description}</p>
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#112240] hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#112240] hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition"
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

