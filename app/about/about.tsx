"use client";

import { motion } from "framer-motion";

const skills = [
  "JavaScript (ES6+)",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "WordPress",
  "SASS",
  "GIT",
  "GitHub",
  "Responsive Design",
  "SEO",
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-200 bg-[url('/bg2.svg')] bg-fixed bg-no-repeat bg-center bg-cover h-screen w-full
    flex flex-col items-center justify-center">
      {/* Centered Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-teal-600 mb-16 text-center"
      >
        About Me
      </motion.h2>

      {/* Content Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full grid md:grid-cols-2 gap-12"
      >
        {/* Left Column - About Text */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get to know me!</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hello! I&apos;m <span className="text-black font-semibold">Shuaib</span>, a
            passionate developer who enjoys building modern, fast, and accessible web
            applications. My journey began with curiosity and grew into a career driven by
            creativity and technology.
          </p>
          <p className="text-gray-700 mb-4">
            I focus on creating seamless user experiences and clean, maintainable code.
            Focusing on React.js and Next.js. I love solving
            real-world problems with efficient solutions, while offering an enjoyable user experience.
          </p>
        </div>

        {/* Right Column - Skills Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technologies I Use</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-4 py-2 bg-[#112240] text-white border border-teal-500 rounded text-sm hover:bg-teal-500 hover:text-black transition whitespace-nowrap"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
