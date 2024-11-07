
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Project Alpha",
    description: "A cutting-edge AI-powered analytics platform",
    tech: ["React", "Node.js", "TensorFlow"],
    link: "https://github.com/yourusername/project-alpha"
  },
  {
    title: "Beta App",
    description: "Mobile app for productivity and task management",
    tech: ["React Native", "Firebase", "Redux"],
    link: "https://github.com/yourusername/beta-app"
  },
  {
    title: "Gamma Website",
    description: "E-commerce website with advanced features",
    tech: ["Next.js", "MongoDB", "Stripe"],
    link: "https://github.com/yourusername/gamma-website"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
