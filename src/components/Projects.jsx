import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, interactive portfolio to showcase my skills and projects.",
    link: "#",
    tags: ["React", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "Snake Game",
    description: "A classic snake game built with JavaScript and React.",
    link: "#",
    tags: ["JavaScript", "React"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center px-6 py-20">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="text-green-400">Projects</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-2 text-green-300">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-green-900/40 text-green-200 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-green-400 hover:underline"
                >
                  View Project
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
