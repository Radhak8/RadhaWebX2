
import { motion } from 'framer-motion';

export default function Achievements() {
  const achievements = [
    {
      title: "Project X Completion",
      description: "Successfully led and completed Project X, resulting in a 30% increase in efficiency.",
      icon: "🚀"
    },
    {
      title: "Award for Innovation",
      description: "Received the prestigious Innovation Award for developing a groundbreaking solution in the field of AI.",
      icon: "🏆"
    },
    {
      title: "Published Research Paper",
      description: "Published a research paper on advanced machine learning techniques in a top-tier journal.",
      icon: "📚"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Top Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
