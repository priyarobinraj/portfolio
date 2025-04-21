import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Terminal } from "lucide-react";

const projects = [
  {
    title: "JournalSlay Blog-E'commerce",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and secure payment integration.",
    image:
      "https://i.pinimg.com/originals/8f/01/87/8f01878f78ca29641000ba6f761e153e.jpg",
    tags: ["HTML", "CSS", "Bootstrap", "React"],
    demoUrl: "https://journalslay.vercel.app/",
    sourceUrl: "https://github.com/priyarobinraj/journalslay",
  },
  {
    title: "OceanBlog Travel-Guides",
    description:
      "Designed and developed an engaging blog website dedicated to exploring the wonders of the ocean..",
    image: "http://wallpapercave.com/wp/M0LQ3nk.jpg",
    tags: ["React", "TypeScript", "Node.js", "Tailwind"],
    demoUrl: "https://oceanblog.vercel.app/",
    sourceUrl: "https://github.com/priyarobinraj/oceanblog",
  },

  {
    title: "Book Cafe",
    description: "A simple yet well structured webpage as a demo",
    image:
      "https://thesmartlocal.com/wp-content/uploads/2019/07/Book-Cafes-21-1.jpg",
    tags: ["HTML", "CSS"],
    demoUrl: "https://thebookcafe.vercel.app/",
    sourceUrl: "https://github.com/priyarobinraj/thebookcafe",
  },
  {
    title: "Plusgen",
    description:
      "Built PlusGen, a modern and user-friendly medical website focused on health services and patient care solutions.",
    image:
      "https://www.missouripartnership.com/wp-content/uploads/2018/01/iStock-695349930.jpg",
    tags: ["HTML, CSS"],
    demoUrl: "https://plusgen.vercel.app/",
    sourceUrl: "https://github.com/priyarobinraj/plusgen",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="terminal">
          <div className="flex items-center gap-2 mb-6">
            <Terminal className="w-5 h-5 text-green-400" />
            <p className="text-gray-400 font-mono">
              <span className="text-green-400">$</span> ls ./projects/
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-mono font-bold mb-2 text-green-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 font-mono text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-900 border border-gray-700 text-green-400 rounded text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-400 hover:text-green-300 font-mono text-sm"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink className="w-4 h-4" /> demo
                    </motion.a>
                    <motion.a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-400 hover:text-green-300 font-mono text-sm"
                      whileHover={{ x: 5 }}
                    >
                      <Github className="w-4 h-4" /> source
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
