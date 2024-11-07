
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Welcome to My Digital World
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Explore my journey, thoughts, and creations in the realm of technology and innovation.
          </p>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold inline-block transition duration-300 hover:shadow-lg"
          >
            Discover More
          </motion.a>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-0"></div>
    </section>
  );
}
